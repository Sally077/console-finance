const array =  [200, 867884]
// [600, 984655],
// [500, 322013]
;


const initialValue = 0;
//setting initial costings to 0
const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
    
);

console.log(sumWithInitial);


//using reduce command on single data array set