
let second=59;
export let countdown=()=>{
    setInterval(()=>{
        document.getElementById('minute').textContent=0;
        if(second<10)
        {
            document.getElementById('second').textContent="0"+second;
        }
        else{
            document.getElementById('second').textContent=second;
        }
        second--;
        if(second<-1){
            alert("Time out");
            window.location.reload();
        }
    },1000);
}