
function findTopStudents(grades) {
    const results = [];
    for (const gradeData of grades) {
      const grade = gradeData.grade;
      let highestScore = -1;
      let topStudent = '';
      
      
      for (const student of gradeData.students) {
        
        const totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
        if (totalMarks > highestScore) {
          highestScore = totalMarks;
          topStudent = student.name;
        }
      }
      results.push(`${grade}-${topStudent}-${highestScore}`);
    }
    return results;
  }
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
