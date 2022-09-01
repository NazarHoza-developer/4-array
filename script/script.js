const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students) {
    let result = [];
    const boys = students.filter(element => element.slice(-1) !== 'а');
    const girls = students.filter(element => element.slice(-1) === 'а');

    for (let i = 0; i <= 2; i++) {
        result.push([boys[i], girls[i]]);
    }
    return result;
}
console.log(getPairs(students));


// 2
function themesAdd (pairs, themes) {
 let a = pairs.map(element => [element.join(" i "), themes[pairs.indexOf(element)]]);
 return a;
}
console.log(themesAdd(getPairs(students), themes));

// 
function marksAdd (students, marks) {
    let marksArr = students.map((element, i) => [element, marks[i]]);

    return marksArr;
}
console.log(marksAdd(students, marks));


const pairsAndThemes = themesAdd(getPairs(students), themes);
let random = addScore(pairsAndThemes);
function addScore(pairs) {
    let randomNumber = [];
    for (let i = 0; i < pairs.length; i++) {
        let digit = Math.floor(Math.random() * (5 - 1) + 1);
        randomNumber.push([pairs[i], digit].flat());
    }
    return randomNumber;
}
console.log(random);
// addScore (pair, score);
