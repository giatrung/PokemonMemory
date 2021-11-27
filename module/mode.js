export function mode(){
    let choose= document.getElementsByClassName('mode');
    for(let i=0;i<choose.length;i++){
        choose[i].addEventListener('click',()=>{
            localStorage.setItem('mode',choose[i].value);
        })
    }
}