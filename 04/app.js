const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, pass: 1995},
    {first: 'Isaac', last: 'Newton', year: 1643, pass: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, pass: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, pass: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, pass: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, pass: 1543},
    {first: 'Max', last: 'Planck', year: 1858, pass: 1947},
    {first: 'Katherine', last: 'Blodgett', year: 1898, pass: 1979},
    {first: 'Ada', last: 'Lovelace', year: 1815, pass: 1852},
    {first: 'Sarah', last: 'Goode', year: 1855, pass: 1905},
    {first: 'Lise', last: 'Meitner', year: 1878, pass: 1968},
    {first: 'Hanna', last: 'Hammarstrom', year: 1829, pass: 1909}
];

const people = [
    'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel',
    'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem',
    'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter',
    'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
    'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra',
    'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin',
    'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh',
    'Biondo, Frank', 'Birrell, Augustine',
    'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
];

// year 1500s
console.log('-------------Year 1500s------------');
inventors.filter(current => current['year'] >=1500 && current['year'] <1600).forEach(current => console.log(current['year']));


// first name , last name of inventors

let arrNameOfInventors = inventors.map(function (obj) {
   let newObj= {};
  newObj.first = obj.first;
  newObj.last = obj.last;
  return newObj ;
});
console.log('-------------array first name, last name------------');

arrNameOfInventors.forEach(current => console.log(current));

//sort inventors year, oldest to youngest

inventors.sort(function (firstEle, secondEle) {
   return secondEle.year - firstEle.year;
});
console.log('-------------sort by year oldest to youngest-----------');
console.log(inventors);


// calculate and sort year live
let ageOfInventors=[];
inventors.reduce(function (live ,current) {
    let obj ={};
    obj.first = current.first;
    obj.last= current.last;
    obj.age = current.pass - current.year;
    ageOfInventors.push(obj);

},0);
console.log('-------------age of inventors-----------');
console.log(ageOfInventors.sort((firstEle, secondEle) => secondEle.age - firstEle.age));

