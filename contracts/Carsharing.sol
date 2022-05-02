// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/v4.5.0/contracts/token/ERC721/ERC721.sol";
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/v4.5.0/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/v4.5.0/contracts/access/Ownable.sol";
import "https://raw.githubusercontent.com/distributed-ledger-technology/solidity-logger/main/src/logger.sol";

contract CarRentalContract is ERC721, ERC721URIStorage, Ownable {
    uint256 contractStartTime = 0;
    string constant contractName = "P2PCarSharingService";
    string constant contractSymbol = "PCSS";
    string constant addToAvailableCars = "addToAvailableCars";
    string constant removeFromAvailableCars = "removeFromAvailableCars";
    string constant removeFromOfferedCars = "removeFromOfferedCars";


    struct customer {
        address payable from;
        uint256 balance;
        uint256 desiredHours;
    }

    struct offerByProvider {
        string id;
        address payable to;
        uint256 costsPerHour;
        string modelName;
        // string image;
        // string location;
        bool available;
    }

    // All costumers
    customer[] customers;
    // All cars
    offerByProvider[] offersByProviders;
    // Reserved cars
    offerByProvider[] rentedCars;
    // Available cars
    offerByProvider[] availableCars;

    // nft 
    constructor() ERC721(contractName, contractSymbol) {
        contractStartTime = block.timestamp;
        // car: makeOfferByProvider()
        // customer: makeOffer()
    }

    // Provide a new car to be rented. Pass id (automatically), car name and cost per hour as arguments
    // register car !!!!!!!!!
    function makeOfferByProvider(string memory _id, string memory _modelName, uint256 _costsPerHour) public payable {
        rentedCars.push(offerByProvider(_id, payable(msg.sender), _costsPerHour, _modelName, true));
    }

    // rent car
    function rentCar(customer memory _customer, string memory _carId) public {
        for (uint256 i = 0; i < availableCars.length; i++) {
            if (keccak256(abi.encodePacked((availableCars[i].id))) == keccak256(abi.encodePacked((_carId)))) {
                uint256 totalRentCost = calculateTotalRentCost(_customer.desiredHours, availableCars[i].costsPerHour);
                if (_customer.balance >= totalRentCost) {
                    reserveCar(_carId);
                    updateCarsLists(removeFromAvailableCars, _carId);
                    pay(_carId, totalRentCost, _customer, availableCars[i].to);
                }
            }
        }
    }

    // when returning the car to its owner
    function returnCar(string memory _carId) public {
        updateCarsLists(addToAvailableCars, _carId);
    }

    // when owner stops offering the car for sharing
    function withdrawCar(string memory _carId) public {
        updateCarsLists(removeFromOfferedCars, _carId);
    }

    function calculateTotalRentCost(uint _desiredHours, uint _costPerHour) public view returns (uint) {
        return _desiredHours * _costPerHour;
    }

    function reserveCar(string memory _carId) public {
        for (uint256 i = 0; i < availableCars.length; i++) {
            if (keccak256(abi.encodePacked((availableCars[i].id))) == keccak256(abi.encodePacked((_carId)))) {
                availableCars[i].available = false;
            }
        }
    }

    function updateCarsLists(string memory _action, string memory _carId) public {
        // when renting a car
        if (keccak256(abi.encodePacked((_action))) == keccak256(abi.encodePacked((removeFromAvailableCars)))) {
            removeFromAvailableCarsFunction(_carId);
        // when returning a car
        } else if (keccak256(abi.encodePacked((_action))) == keccak256(abi.encodePacked((addToAvailableCars)))) {
            addToAvailableCarsFunction(_carId);
        // when stop offering a car
        } else if (keccak256(abi.encodePacked((_action))) == keccak256(abi.encodePacked((removeFromOfferedCars)))) {
            removeFromOfferedCarsFunction(_carId);
        }
    }

    function removeFromAvailableCarsFunction(string memory _carId) public {
        offerByProvider[] memory newListOfAvailableCars;
        for (uint256 i = 0; i < offersByProviders.length; i++) {
            if (keccak256(abi.encodePacked((offersByProviders[i].id))) == keccak256(abi.encodePacked((_carId)))) {
                // newListOfAvailableCars.push(offersByProviders[i]); // Error
            }
        }
        // availableCars = newListOfAvailableCars; // Error
    }

    function addToAvailableCarsFunction(string memory _carId) public {
        for (uint256 i = 0; i < offersByProviders.length; i++) {
            if (keccak256(abi.encodePacked((offersByProviders[i].id))) == keccak256(abi.encodePacked((_carId)))) {
                availableCars.push(offersByProviders[i]);
            }
        }
    }

    function removeFromOfferedCarsFunction(string memory _carId) public {
        offerByProvider[] memory newListOfOfferedCars;
        for (uint256 i = 0; i < offersByProviders.length; i++) {
            if (keccak256(abi.encodePacked((offersByProviders[i].id))) == keccak256(abi.encodePacked((_carId)))) {
                // newListOfOfferedCars.push(offersByProviders[i]); // Error
            }
        }
        // offersByProviders = newListOfOfferedCars; // Error
    }
    
    function pay(string memory _carId, uint256 _totalRentCost, customer memory _customer, address  _ownerAddress) public {

        offerByProvider memory offer = getOffer(_carId);

        payable(_ownerAddress).transfer(_totalRentCost); // transfers the money to the seller
        // payable(this.owner()).transfer(_totalRentCost); // transfers the money to the seller

        transferOwnership(_customer.from); // transfers the NFT to the buyer
    }
    
    // get car
    function getOffer(string memory _carId) public view returns (offerByProvider memory) {
        // search a car with the given id in the list of all offered cars
        for (uint256 i = 0; i < offersByProviders.length; i++) {
            // if given car id corresponds to a car id from the list, ...
            if (keccak256(abi.encodePacked((offersByProviders[i].id))) == keccak256(abi.encodePacked((_carId)))) {
                // return the matched car
                return offersByProviders[i];
            } // handle other cases. What if car does not exist? 
        }
    }

    // Get all offered cars
    function getAllOffers() public view returns (offerByProvider[] memory) {
        return offersByProviders;
    }

    // Get all not reserved cars
    function getAllAvailableOffers() public view returns (offerByProvider[] memory) {
        return availableCars;
    }

    // Get all resereved cars
    function getAllUnavailableOffers() public view returns (offerByProvider[] memory) {
        return rentedCars;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }
    
    /* */
}