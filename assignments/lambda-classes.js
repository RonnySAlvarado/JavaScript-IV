// CODE here for your Lambda Classes

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props


//base class
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak (){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo (subject){
        return `Today we are learning about ${subject}`;
    }
    grade (student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
    graduate (student){
        let min = -100;
        let max = 100;
        let randomNum = Math.round(Math.random() * (max - min) + min);
        student.grade = randomNum + student.grade;
        if (student.grade >= 70){
            return `Congratulations, you have a grade of ${student.grade}, which is enough to graduate from Lambda School!`;
        }
        else return `You'll need to study a bit more and get a much higher score than ${student.grade} if you want to graduate from Lambda School!`;
    }
}


// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listsSubjects (){
        return this.favSubjects;
    }
    PRAssignment (subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge (subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

// #### Project Mananger

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManagers extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp (slackChannel){
        return `${this.name} announces to ${slackChannel}, @channel standy times!`;
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});
const cameron = new Instructor({
    name: 'Cameron',
    location: 'Phoenix',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `JavaScript is best Script Amirite`
});

const ronny = new Student ({
      name: 'Ronny',
      location: 'Houston',
      age: 28,
      gender: 'male',
      previousBackground: 'Geologist',
      className: 'WEBPT4',
      favSubjects: 'Computer Science',
      grade: Math.round(Math.random() * 100)
});

const brandon = new Student ({
    name: 'Brandon',
    location: 'Houston',
    age: 25,
    gender: 'male',
    previousBackground: 'Tech Specialist',
    className: 'WEBFT17',
    favSubjects: ['Computer Science', 'Math'],
    grade: Math.round(Math.random() * 100)
});

const chance = new ProjectManagers ({
    name: 'Chance',
    location: 'Kansas City',
    age: 25,
    gender: 'male',
    specialty: 'Back-end',
    favLanguage: 'React',
    catchPhrase: 'This is it! I can feel it!',
    gradClassName: 'CS1',
    favInstructor: 'Josh Knell'
});

const carlos = new ProjectManagers ({
    name: 'Carlos',
    location: 'New York City',
    age: 25,
    gender: 'male',
    specialty: 'Front-end',
    favLanguage: 'HTML/CSS',
    catchPhrase: 'You are doing great!',
    gradClassName: 'CS2',
    favInstructor: 'Ryan Hamblin'
});



// //instructors
// console.log(fred.demo('Closures and Callbacks'));
// console.log(fred.grade(ronny, 'Computer Science'));
// console.log(fred.catchPhrase);
// console.log(cameron.demo('Array methods'));
// console.log(cameron.grade(ronny, 'JS-IV assignment'));
// console.log(cameron.catchPhrase);

// //students
// console.log(ronny.listsSubjects());
// console.log(ronny.PRAssignment('JS-IV'));
// console.log(ronny.sprintChallenge('JavaScript'));
// console.log(brandon.listsSubjects());
// console.log(brandon.PRAssignment('JS-III'));
// console.log(brandon.sprintChallenge('CSS'));

// //PMs
// console.log(chance.standUp('webpt4_chance'));
// console.log(chance.debugsCode(ronny, 'JavaScript'));
// console.log(carlos.standUp('webpt4_carlos'));
// console.log(carlos.debugsCode(brandon, 'React'));


//stretch
console.log(chance.graduate(ronny));
console.log(cameron.graduate(brandon));
console.log(fred.graduate(ronny));
console.log(carlos.graduate(brandon));
