// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.24;

contract HelloWorld {
    event updatedMessage(string oldstr, string newStr);

    string public message;

    constructor(string memory initMessage){
        message = initMessage;
    }

    function update(string memory _newMessage) public {
        string memory oldMsg = message;
        message = _newMessage;

        emit updatedMessage(oldMsg, message);
    }
}