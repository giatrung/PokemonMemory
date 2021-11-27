import {name} from "./player.js";
let score =0;
export let displayScore=()=>{
    score++;
    let memoryScore= localStorage.getItem('bestScore')?localStorage.getItem('bestScore'):0;
    if(memoryScore<score)
    {
        localStorage.setItem('bestScore',score);
    } 
    document.getElementById('yourScore').textContent=score;
    if(score==12){
        alert("Good job! You have flipped all Pokemon Cards ^_^");
        window.location.reload();
        topScore(name,score)
    }
}
function topScore(name,score){
    let arr=localStorage.getItem('player')?JSON.parse(localStorage.getItem('player')):[];
    let list= new Map;
    list.set(`${name}`,{'name':`${name}`,'score':`${score}`});
    for(let x of list ){
    console.log(x);
    arr=[...arr,list.get(`${name}`)];
    }
    // arr=[list[1],...arr];
    localStorage.setItem('player',JSON.stringify(arr));
}
export let onload=()=>{
    let memoryScore= localStorage.getItem('bestScore')?localStorage.getItem('bestScore'):0;
    document.getElementById('bestScore').textContent=memoryScore;
    let arr=localStorage.getItem('player')?JSON.parse(localStorage.getItem('player')):[];
    arr.forEach((element,index) => {
        document.getElementById("list").innerHTML+=`<p>${index+1} . ${element.name} </p>`
    });
}