// SPDX-License-Identifier : GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

contract coinFlip {
    address public owner; // Me - Contract deployer
    uint256 public betval; // The threshhold
    uint256 public botval; // Amt bot has / bank

    constructor() {
        owner = msg.sender;
        betval = 1e15; // 1 Ether = 1e18 wei
    }

    event betPlaced(address indexed user, uint256 amt, bool prediction);

    modifier botbalance() {
        require(botval > msg.value * 3, "Low balance !");
        _;
    }

    modifier validbet() {
        require(msg.value >= betval, "Invalid bet value");
        _;
    }

    function flip(bool betOn) external payable botbalance validbet {
        bool prediction = (block.timestamp % 2 == 0);

        if (betOn == prediction) {
            payable(msg.sender).transfer(msg.value * 2);
        }
        botval += msg.value;

        emit betPlaced(msg.sender, msg.value, prediction);
    }
}
