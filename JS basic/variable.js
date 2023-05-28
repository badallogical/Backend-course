function getSubjectMarks(){
    const readline = require('readline-sync')
    let marksList = [];
    let totalMarks = 0;
    let subject = [ "math", "hindi","English","Science"]

    console.log("Enter the marks of subject \n")
    for (let i = 0; i < subject.length ; ++i) {
        // marks.push(Number(readline.question("Enter Marks "+subject[i])));
        var valueEnter = Number(readline.question("enter your marks in "+ subject[i] ))
        totalMarks = totalMarks + valueEnter;
        marksList.push(valueEnter);
    }

    console.log("Total Marks is " + totalMarks)
    console.log("My Marks List is ", marksList )

    return marksList;

}

// function getPercentage(){


// }

// marks = getSubjectMarks()

const obj1 = {
    'math' : 70,
    'science' : 70,
    'hindi' : 70
}


function getPercentage(obj1 ){
    var sum = obj1.math + obj1.science + obj1.hindi
    console.log(sum)
}

getPercentage(obj1)

var result = getSubjectMarks()
console.log("Return value is " + result)