// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
    tom: 20,
    george: 17,
    abdul: 19,
  };
  
  const studentKeys =Object.keys(studentGrades)
  const keysGreaterThan18 =studentKeys.keys.filter(function(key){
   return studentGrades[key] > 18;
 })
keysGreaterThan18.forEach(function(key){
  console.log(key.toUpperCase()+" - "+studentGrades[key])
})
//or




// OR

  for (const key in studentGrades){
    if (studentGrades[key] >18){
      console.log(key +" - "+ studentGrades[key])
    }
  }
  // Prints
  // TOM - 20
  // ABDUL - 19