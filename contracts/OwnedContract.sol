//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract OwnedContract {
    address public owner;
    string public message;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function setOwner(address newOwner_) public onlyOwner {
        owner = newOwner_;
    }

    function setMessage(string memory message_) public onlyOwner {
        message = message_;
    }
}
