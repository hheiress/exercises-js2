// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
    tom: 20,
    george: 17,
    abdul: 19,
  };
  
 //// LONGEST WAY
// const studentKeys = Object.keys(studentGrades)
// const keysWithScoresGreaterThan18 = studentKeys.filter(function(key) {
//   return studentGrades[key] > 18
// })
// keysWithScoresGreaterThan18.forEach(function(key) {
//   console.log(key.toUpperCase() + ' - ' + studentGrades[key])
// })
//// MEDIUM WAY
// const studentKeys = Object.keys(studentGrades)
// studentKeys.forEach(function(key) {
//   const score = studentGrades[key]
//   if (score > 18)
//     console.log(key.toUpperCase() + ' - ' + score)
// })


  for (const key in studentGrades){
    if (studentGrades[key] >18){
      console.log(key +" - "+ studentGrades[key])
    }
  }
  // Prints
  // TOM - 20
  // ABDUL - 19