//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract SubjectList {
    uint256 public subjectsCount = 0;

    struct Subject {
        uint _id;
        string code;
        string name;
        bool retired;
    }

    mapping(uint => Subject) public subjects;

    event createSubjectEvent(
        uint _id,
        string indexed code,
        string name,
        bool retired
    );
    event markRetirdEvent(uint indexed cid);

    constructor() {
        // hhhhhhhhhhhhhhhhhhh
    }

    function createSubject(
        string memory _code,
        string memory _name
    ) public returns (Subject memory) {
        subjectsCount++;
        subjects[subjectsCount] = Subject(subjectsCount, _code, _name, false);
        return subjects[subjectsCount];
    }

    function markRetired(uint _id) public returns (Subject memory) {
        subjects[_id].retired = true;
        emit markRetirdEvent(subjectsCount);
        return subjects[_id];
    }

    function findSubject(uint _id) public view returns (Subject memory) {
        return subjects[_id];
    }
}
