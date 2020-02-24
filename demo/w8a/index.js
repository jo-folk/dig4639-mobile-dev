const simpleArray =[5, 3, 4, 5, 6];
const objLiteral = {a: 5, b: 6};
console.log(objLiteral.a);
console.log(objLiteral["a"]);
console.log(simpleArray);
console.log(simpleArray[0]);
    

    // to access elements
    let sum = 0 
    for (let index = 0; index < simpleArray.length; index++){
        sum = sum + simpleArray[index];
    }
    console.log(sum);
    sum = 0;
    for (const item of simpleArray){
        sum = sum+item;
    }
    console.log(sum);

    // to change elements
    for (let index = 0; index < simpleArray.length; index++){
        simpleArray[index] = simpleArray[index] + 2;
    }
    console.log('for loop', simpleArray);

    for(let item of simpleArray){
        item = item + 2;
    }
    console.log('for of', simpleArray);




    // to create new array
    const newArray = [];
    for (let index = 0; index < simpleArray.length; index++){
        newArray.push(simpleArray[index]+2);
    }
    console.log('for', newArray);

    const newArray2 = [];
    for (const item of simpleArray){
        newArray.push(item+2);
    }
    console.log('for of', newArray2);
    

   
    function addTwo (value){
        return value+2;
    }


    //create using map
    const newArray3 = newArray.map(addTwo);
    console.log('map' , newArray3);




    //create using map withut addTwo funtion
    const newArray4 = newArray.map((value) => value +2);
    console.log('map' , newArray4);




    // to seleect elements form array
    const filteredArray = [];
    for(let index = 0; index < simpleArray.length; index++){
        if (simpleArray[index]%2 === 0){
            filteredArray.push(simpleArray[index]);
        }
    }
    console.log(filteredArray);

    const filteredArray2 = [];



    // 2 to seleect elements form array
    for(const item of simpleArray){
        if (item%2 === 0){
            filteredArray2.push(item);
        }
    }
    console.log(filteredArray);

    
    //filter
function testElem(value){
    return value%2 === 0;
}
const filteredArray3 = simpleArray.filter(testElem);
console.log(filteredArray3);


//filter without funtion
const filteredArray4 = simpleArray.filter((value) => value %2 ===0);
console.log(filteredArray4);


//sort array
let toDoList1 = [
    {completed: true, priority: 1, content : "demo 1"},
    {completed: true, priority: 2, content : "demo 2"},
    {completed: false, priority: 3, content : "demo 3"}
];


console.log(toDoList1);
//turn into strings for html

function printToDoList(toDoList){
    const elements = toDoList.map((value)=> {
    return `<p class = "${value.completed ? 'done': null}" priority= "${value.priority}">
                ${value.content}
            </p>`
    });
    console.log(elements);
    return elements;
}

printToDoList(toDoList1);
const filteredToDoList = toDoList1.filter((value) => value.completed)
printToDoList(filteredToDoList);


const sortedToDoList = toDoList1.sort((a,b)  => a.priority - b.priority);

printToDoList(sortedToDoList);


