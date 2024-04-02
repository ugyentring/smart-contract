//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract StudentList {
    uint public studentsCount = 0;

    struct Student {
        uint _id;
        uint cid;
        string name;
        bool graduated;
    }

    mapping(uint => Student) public students;

    event createStudentEvent(
        uint _id,
        uint indexed cid,
        string name,
        bool graduated
    );

    event markGraduatedStudent(uint indexed cid);

    function createStudent(
        uint _studentCid,
        string memory _name
    ) public returns (Student memory) {
        studentsCount++;
        students[studentsCount] = Student(
            studentsCount,
            _studentCid,
            _name,
            false
        );
        emit createStudentEvent(studentsCount, _studentCid, _name, false);
        return students[studentsCount];
    }

    constructor() {
        createStudent(100001, "Ugyen Dendup");
    }

    function markGraduated(uint _id) public returns (Student memory) {
        students[_id].graduated = true;
        emit markGraduatedStudent(_id);
        return students[_id];
    }

    function findStudent(uint _id) public view returns (Student memory) {
        return students[_id];
    }
}
