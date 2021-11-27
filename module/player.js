import {start} from "./welcome.js";
export let name;
export let playername=()=>{
    name = document.getElementById('name').value;
    if(name!='')
    {
        document.getElementById('start').disabled=false;
        document.getElementById('start').addEventListener("click",()=>start());
    }
    else{
        document.getElementById('start').disabled=true;
    }
}