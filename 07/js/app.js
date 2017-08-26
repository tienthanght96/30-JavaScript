const  people =[
    {name: 'Wes', year:1988},
    {name: 'Kait', year:1986},
    {name: 'Irv', year:1970},
    {name: 'Lux', year:2015}
];

const  comments = [
    {text : 'Love this!', id : 523423},
    {text : 'Supper good', id : 823423},
    {text : 'You are the best', id : 2039842},
    {text : 'Ramen is my fav food ever', id : 123523},
    {text : 'Nice Nide  Nice !', id : 54328}
];

let isAdult =  people.some(current => ((new Date()).getFullYear() - current['year']) >= 19 );

console.log(`Have least one person 19  or older : ${isAdult}`);

//check every people > 19
let everyAdult = people.every(current  => ((new Date()).getFullYear()-current['year']) >= 19) ;

console.log(`Have every one person 19  or older : ${everyAdult}`);

//find comment with ID
let  comment= comments.find(current => (current.id === 823423) );
console.log(comment);

let indexOfComment = comments.findIndex(current => (current.id ===823423));

//find index of comment
console.log(indexOfComment);

//delete comment have id = 823423


comments.splice(indexOfComment , 1);
console.log(comments);
