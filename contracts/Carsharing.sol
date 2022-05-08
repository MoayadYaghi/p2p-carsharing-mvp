// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

// import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/v4.5.0/contracts/token/ERC721/ERC721.sol";
// import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/v4.5.0/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/v4.5.0/contracts/access/Ownable.sol";
// import "https://raw.githubusercontent.com/distributed-ledger-technology/solidity-logger/main/src/logger.sol";

contract CarRentalContract /* is ERC721, ERC721URIStorage, Ownable */ {
    uint256 contractStartTime = 0;
    // string constant contractName = "P2PCarSharingService";
    // string constant contractSymbol = "PCSS";
    string constant addToAvailableCars = "addToAvailableCars";
    string constant removeFromAvailableCars = "removeFromAvailableCars";
    string constant removeFromOfferedCars = "removeFromOfferedCars";

    struct customerData {
        address payable from;
        uint256 balance;
        uint256 desiredHours;
    }

    struct car {
        string id;
        address payable to;
        uint256 costsPerHour;
        string modelName;
        // string image;
        // string location;
        bool available;
    }

    customerData[] customers;
    car[] offeredCars;
    car[] rentedCars;
    car[] availableCars;

    constructor(string memory contractName, string memory contractSymbol) {
        contractStartTime = block.timestamp;
    }

    function offerCar(string memory _id, string memory _modelName, uint256 _costsPerHour) public payable {
        offeredCars.push(car(_id, payable(msg.sender), _costsPerHour, _modelName, true));
    }

    function rentCar(customerData memory _customer, string memory _carId) public {
        for (uint256 i = 0; i < availableCars.length; i++) {
            if (keccak256(abi.encodePacked((availableCars[i].id))) == keccak256(abi.encodePacked((_carId)))) {
                uint256 totalRentCost = calculateTotalRentCost(_customer.desiredHours, availableCars[i].costsPerHour);
                if (_customer.balance >= totalRentCost) {
                    reserveCar(_carId);
                    updateCarsLists(removeFromAvailableCars, _carId);
                    // pay(_carId, totalRentCost, _customer, availableCars[i].to);
                }
            }
        }
    }

    function returnCar(string memory _carId) public {
        updateCarsLists(addToAvailableCars, _carId);
    }

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
        car[] memory newListOfAvailableCars;
        for (uint256 i = 0; i < offeredCars.length; i++) {
            if (keccak256(abi.encodePacked((offeredCars[i].id))) == keccak256(abi.encodePacked((_carId)))) {
                // newListOfAvailableCars.push(offeredCars[i]); // Error
            }
        }
        // availableCars = newListOfAvailableCars; // Error
    }

    function addToAvailableCarsFunction(string memory _carId) public {
        for (uint256 i = 0; i < offeredCars.length; i++) {
            if (keccak256(abi.encodePacked((offeredCars[i].id))) == keccak256(abi.encodePacked((_carId)))) {
                availableCars.push(offeredCars[i]);
            }
        }
    }

    function removeFromOfferedCarsFunction(string memory _carId) public {
        car[] memory newListOfOfferedCars;
        for (uint256 i = 0; i < offeredCars.length; i++) {
            if (keccak256(abi.encodePacked((offeredCars[i].id))) == keccak256(abi.encodePacked((_carId)))) {
                // newListOfOfferedCars.push(offeredCars[i]); // Error
            }
        }
        // offeredCars = newListOfOfferedCars; // Error
    }
    
    // function pay(string memory _carId, uint256 _totalRentCost, customerData memory _customer, address  _ownerAddress) public {
    //     car memory offer = getCar(_carId);
    //     payable(_ownerAddress).transfer(_totalRentCost); // transfers the money to the seller
    //     transferOwnership(_customer.from); // transfers the NFT to the buyer
    // }

    function getCar(string memory _carId) public view returns (car memory) {
        for (uint256 i = 0; i < offeredCars.length; i++) {
            if (keccak256(abi.encodePacked((offeredCars[i].id))) == keccak256(abi.encodePacked((_carId)))) {
                return offeredCars[i];
            } // handle other cases. What if car does not exist? 
        }
    }

    function getAllOfferedCars() public view returns (car[] memory) {
        return offeredCars;
    }

    // Get all not reserved cars
    function getAllAvailableCars() public view returns (car[] memory) {
        return availableCars;
    }

    // Get all resereved cars
    function getAllUnavailableCars() public view returns (car[] memory) {
        return rentedCars;
    }
}