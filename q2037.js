/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    seats = seats.sort((a, b) => a - b)
    students = students.sort((a, b) => a - b)

    let move = 0
    students.forEach((value, index) => {
        move += Math.abs(value - (seats[index]))
    });
    return move

};

seats = [3, 1, 5], students = [2, 7, 4]
// seats = [4, 1, 5, 9], students = [1, 3, 2, 6]
seats = [3,20,17,2,12,15,17,4,15,20], students = [10,13,14,15,5,2,3,14,3,18]


console.log(minMovesToSeat(seats, students))