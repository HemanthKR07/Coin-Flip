// SPDX-License-Identifier : GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract CoinFlip {
    using safeMath for uint256;
    uint256 lastval;
    uint256 public win;
    uint256 fac =
        123456789098765433456789065434567856783456789098765484567890098765434567890;

    constructor() {
        win = 0;
    }

    function flip(bool guess) public returns (bool) {
        uint256 blk = uint256(blockhash(block.number.sub(1)));

        if (lastval == blk) {
            revert();
        }

        lastval = blk;

        uint256 val = blk.div(fac);

        bool side = val == 1 ? true : false;

        if (side == guess) {
            win.add(1);
            return true;
        } else {
            win.sub(1);
            return false;
        }
    }
}
