/**
 * Find the highest scoring student for each grade
 * @param {Array} grades - Array of grade objects with students and their marks
 * @returns {Array} Array of strings with grade, top student name, and total score
 */
function findTopStudents(grades) {
    const results = [];
    
    // Process each grade
    for (const gradeData of grades) {
      const grade = gradeData.grade;
      let highestScore = -1;
      let topStudent = '';
      
      // Process each student in the grade
      for (const student of gradeData.students) {
        // Calculate total marks for the student
        const totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
        
        // Check if this student has the highest score so far
        if (totalMarks > highestScore) {
          highestScore = totalMarks;
          topStudent = student.name;
        }
      }
      
      // Format and store the result
      results.push(`${grade}-${topStudent}-${highestScore}`);
    }
    
    return results;
  }
  
  // Test with the provided sample
  const sampleInput = [
    {
      grade: "V",
      students: [
        {name: "Nrupul", marks: [10, 20, 30]},
        {name: "Prateek", marks: [20, 30, 40]}
      ]
    },
    {
      grade: "VI",
      students: [
        {name: "Aman", marks: [10, 20, 30]},
        {name: "Albert", marks: [20, 30, 40]}
      ]
    },
    {
      grade: "VII",
      students: [
        {name: "Yogesh", marks: [10, 20, 30]},
        {name: "Sandhya", marks: [20, 30, 40]}
      ]
    }
  ];
  
  // Get and display results
  const results = findTopStudents(sampleInput);
  for (const result of results) {
    console.log(result);
  }
  
  // Additional test case with more students and tied scores
  const additionalTest = [
    {
      grade: "VIII",
      students: [
        {name: "John", marks: [15, 25, 35]},
        {name: "Jane", marks: [20, 30, 40]},
        {name: "Alice", marks: [30, 30, 30]},
        {name: "Bob", marks: [45, 15, 30]}
      ]
    },
    {
      grade: "IX",
      students: [
        {name: "Sarah", marks: [50, 50, 50]},
        {name: "Thomas", marks: [40, 60, 50]}
      ]
    }
  ];
  
  // Test with additional cases
  const additionalResults = findTopStudents(additionalTest);
  console.log("\nAdditional Test Results:");
  for (const result of additionalResults) {
    console.log(result);
  }