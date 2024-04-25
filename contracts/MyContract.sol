//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract MyContract {
    int256 public var1;
    int256 public var2;

    function storeVals(int256 x, int256 y)public{
        var1 = x;
        var2 = y;
    }

    function addOperations()public view returns (int256){
        return var1 + var2;
    }

    function subtractOperation()public view returns(int256){
        return var1-var2;
    }
}
