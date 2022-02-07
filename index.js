console.log("JS Loaded");
/*
function standardCallback(){
    console.log("I have been run in the future")
}

console.log ("Time now is" + new Date());
setTimeout ( standardCallback, 3*1000);
console.log("Time after one line is" + new Date()); //all lines are run at the same time, independently

const magicButton = document.getElementById("magic-button")

magicButton.onclick = standardCallback;

*/
const directions = [
    "Starting point:Ironhack Miami",
    "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
    "➔ Turn right onto S Miami Ave",
    "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
]
/*
const directionList = []
function getDirections(step, returningCallback, errorCallback) {
     setTimeout(() => {
    console.log(directions[step]);
    directionList.push(directions[step]);
    if (!directions[step]) errorCallback("Instructions not found.");
    else returningCallback();
     }, 2000);
  }

console.log("First leg of the journey", 
getDirections(
    0, 
    ()=> getDirections(
        1, 
        () => getDirections(
            2,
            getDirections(3,
                ()=>{
                    console.log("You arrived")
                },
            ()=>{}
            ),
           ()=>{}
          ),
        () =>{}
        ),
    ()=>{
        console.log("There are no more steps")
      }
    )
);


// the promise is an 
//Promise is a class that creates an object. It exists for free in JS
//new Promise invokes the resolvedCb and rejectedCb,
function obtainDirections(step){
    return new Promise((resolvedCb, rejectedCb) =>{
        
      setTimeout(()=> {
        console.log(directions[step]);
        if (!directions[step]) rejectedCb(`Directions not found for step ${step}.`);
        else resolvedCb(`Directions GIVEN for step ${step}.`);
      }, 3 *1000);
       })
}

//we could write de function definition that's inside the promise outside first, for it to be clearer like in the example below
function returningCallback(resolvedCb, rejectedCb){
    if (!directions[step]) rejectedCb("Instructions not found.");
    else resolvedCb();
}

console.log(obtainDirections(1))//Just to see it in the console

obtainDirections(0)
    .then(()=>obtainDirections(1))
    .then(()=>obtainDirections(1000))
    .catch((error)=> {
        console.log("There was an error " + error)
    })
    .then(()=> obtainDirections(2))
    .then (()=>obtainDirections(3))


    const magicButton = document.getElementById("magic-button");

    magicButton.onclick = handleMagicClick;

    function handleMagicClick(event) {
        return obtainDirections(0)
        .then(()=>obtainDirections(1))
        .then(()=> obtainDirections(2))
        .then (()=>obtainDirections(3));
    }
*/

function onclickHandler(){
    return new Promise((resolveCb, rejectCb)=>{
            /**
           * Equivalent to:
           * let randomeResult
           * if( Math.random() > 0.5 ) randomResult = true
           * else randomResult = false
           * 
           */
            const randomResult = Math.random() > 0.5; //? true

            if(randomResult){
              resolveCb("Yoy have another to do!")
            } else{
              rejectCb ("You ran out of todos")
            }
          })
            .then((newTodo)=>{
                const todoList = document.getElementById("todo-list")
                todoList.innerHTML += `<div> ${newTodo}`;
            })
            .catch((err) =>{
                const todoList = document.getElementById("todo-list");
                todoList.innerHTML = `<h3> ${err} </h3>`; 
            })
       }
    
    





const magicButton = document.getElementById("magic-button");

magicButton.onclick = onclickHandler;
