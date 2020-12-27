import {randomDiscount} from "./01hw";
import {calcSum} from "./02hw";
import {getMaxDigit} from "./03hw";
import {rateStudent} from "./04hw";
import {getAverage} from "./05hw";
import {getBestStudent} from "./06hw";
import {getMySalary} from "./07hw";
import {Student} from "./08hw";
import {createSquares} from "./09hw";
import {createDrumMachine} from "./10hw";
import {makeChinaChar} from "./11hw"
import {drawInfo} from "./12hw"
import {createIdGenerator} from "./13hw"
import './10hw.css';
import './12hw.css';
import {Howl, Howler} from 'howler';

console.log(randomDiscount());

console.log(calcSum(1,5,false));

console.log(getMaxDigit(487123));

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const marks = [4, 5, 5, 3, 4, 5];
console.log(rateStudent(students,marks));

console.log(getAverage(5,4,7,6));

const studentsObj = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];
console.log(getBestStudent(studentsObj));

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
getMySalary.call(ukraine);

const roman = new Student('КІтУ НАУ',7,'Грицаєнко Роман Ігорович');
roman.getInfo();

setInterval(()=>createSquares(),1000)

const kickSound = new Howl({
  src:['./808_drumkit/kick.wav']
});
const clapSound = new Howl({
  src:['./808_drumkit/clap.wav']
});
const snareSound = new Howl({
  src:['./808_drumkit/snare.wav']
});
const hihatSound = new Howl({
  src:['./808_drumkit/hihat.wav']
});
const openSound = new Howl({
  src:['./808_drumkit/openhat.wav']
});
const bassSound = new Howl({
  src:['./808_drumkit/bass.wav']
});


createDrumMachine(kickSound,clapSound,snareSound,hihatSound,openSound,bassSound);

makeChinaChar()
  .then(res=>console.log(res));

document.querySelector('#show-people').addEventListener('submit',(e)=>{
  e.preventDefault();
  drawInfo(document.querySelector('#film').value);
})

const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);