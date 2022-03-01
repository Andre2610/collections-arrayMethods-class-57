// arrays
// objects

// Each comma seperates the index
const myArray = [1, 3, 76, 5, 85, 3, 7, 99, 100, 120, 145, 57, 42, 87, 75, 43];
// [0, 1, 2, 3, 4, ...]

// Check the length of an array, also works for strings
// console.log('Length of myArray', myArray.length);

// Target a speficic index
// console.log('Console.log a specific index', myArray[3]);

// last index of an array
// console.log('Last index of myArray', myArray[myArray.length - 1]);

// The label -> student

const student = {
  name: 'Sweta',
  nationality: 'India',
  skills: ['Javascript', 'React', 'NodeJs'],
  equipment: {
    name: 'Laptop',
    weight: '1kg',
    ram: 16,
  },
};

// const student1 = {
//   name: 'Fran',
//   nationality: 'Brazil',
//   skills: ['Javascript', 'React', 'Express', 'Redux'],
//   equipment: {
//     name: 'Laptop',
//     weight: '1kg',
//     ram: 16,
//   },
// };

// console.log('The student object', student);
// console.log('The name of the student', student.name);
// console.log('The ram of the students equipment', student.equipment);

// const nationality = 'India';
// A variable is a box
// Label on the box: name of the variable -> nationality
// You put a value inside the box -> "India"

const arrayOfStudents = [
  {
    // index 0
    name: 'Sweta',
    nationality: 'India',
    'my skills?': ['Javascript', 'React', 'NodeJs'],
    equipment: {
      name: 'Laptop',
      weight: '1kg',
      ram: 16,
    },
  },
  {
    // index 1
    name: 'Fran',
    nationality: 'Brazil',
    // key which holds an array
    skills: ['Javascript', 'React', 'Express', 'Redux'],
  },
];

console.log('I know this skill:', arrayOfStudents[1].equipment);
