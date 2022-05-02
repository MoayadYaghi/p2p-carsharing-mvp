//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract CarRentalContract {
    uint private rentalCostPerHour;
    uint private rentalHours;

    constructor(uint _rentalCostPerHour, uint _rentalHours) {
        console.log("Deploying a car rental contract with '%s' cost per hour and '%s' rental hours", _rentalCostPerHour, _rentalHours);
        rentalCostPerHour = _rentalCostPerHour;
        rentalHours = _rentalHours;
    }

    function getCostPerHour() public view returns (uint) {
        return rentalCostPerHour;
    }

    function getRentalHours() public view returns (uint) {
        return rentalHours;
    }

    function setCostPerHour(uint _rentalCostPerHour) public {
        console.log("Changing cost per hour from '%s' to '%s'", rentalCostPerHour, _rentalCostPerHour);
        rentalCostPerHour = _rentalCostPerHour;
    }

    function setRentalHours(uint _rentalHours) public {
        console.log("Changing rental hours from '%s' to '%s'", rentalHours, _rentalHours);
        rentalHours = _rentalHours;
    }

    function getRentalTotalCost() public view returns (uint) {
        return rentalHours * rentalCostPerHour;
    }
}
