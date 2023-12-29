// SPDX-License-Identifier : GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

contract coinFlip {
    address public owner; // Contract deployer
    uint256 public betval = 1e15; // The threshhold
    uint256 public botval;

    uint256 private constant NOT_ENTERED = 1;
    uint256 private constant ENTERED = 2;

    uint256 private _status;

    /**
     * @dev Unauthorized reentrant call.
     */
    error ReentrancyGuardReentrantCall();

    constructor() payable {
        owner = msg.sender;
        botval = msg.value; // Bot balance
    }

    event betPlaced(address indexed user, uint256 amt, bool prediction);

    modifier botbalance() {
        require(botval > msg.value * 3, "Low balance !");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "should be the owner");
        _;
    }

    modifier nonReentrant() {
        _nonReentrantBefore();
        _;
        _status = NOT_ENTERED;
    }

    modifier validbet() {
        require(msg.value >= betval, "Invalid bet value");
        _;
    }

    
    function _nonReentrantBefore() private {
        // On the first call to nonReentrant, _status will be NOT_ENTERED
        if (_status == ENTERED) {
            revert ReentrancyGuardReentrantCall();
        }

        // Any calls to nonReentrant after this point will fail
        _status = ENTERED;
    }

    function flip(bool betOn) external payable botbalance validbet {
        bool prediction = (block.timestamp % 2 == 0);

        if (betOn == prediction) {
            // payable(msg.sender).transfer(msg.value * 2);
            payable(msg.sender).transfer(msg.value * 2);
        }
        botval += msg.value;

        emit betPlaced(msg.sender, msg.value, prediction);
    }

    function withdrawWinnings() external onlyOwner nonReentrant {
        uint256 contractBalance = address(this).balance;
        require(botval == contractBalance, "check validity");
        (bool sent, ) = owner.call{value: contractBalance}("");
        require(sent, "Failed to send Ether");
    }
}
