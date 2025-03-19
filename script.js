function showtime(){
    let n=new Date();
    let h=n.getHours();
    let m=n.getMinutes();
    let s=n.getSeconds();
    let session="AM";
    if(h>=12){
        session="PM";
        if(h>=12){
            h=h-12;
        }
    }
    if(h==0){
        h=12;
    }
    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }
    let time=h+":"+m+":"+s+" "+session;
    document.querySelector(".time").innerText=time;
}
setInterval(showtime,1000);
showtime();





//stop watch

let timer;
function stopwatch(){
let hour=parseInt(document.querySelector(".hour input").value)||0;
let minute=parseInt(document.querySelector(".minute input").value)||0;
let second=parseInt(document.querySelector(".second input").value)||0;
    if(second==0){
        if(minute==0){
            if(hour==0){
               showalert();
                clearInterval(timer);
                return;
            }
            hour--;
            minute=59;
            second=59;
        }else{
           minute--;
           second=59;  
        }
    }else{
        second--;
    }

   
    document.querySelector(".second input").value=second;
    document.querySelector(".minute input").value=minute;
    document.querySelector(".hour input").value=hour;
 }
 function start() {
    clearInterval(timer);
    timer = setInterval(stopwatch, 1000);
    
}

function stop() {
    document.querySelector(".alert").style.display = "none";
    setTimeout(function() {  //for refresh the full page
        location.reload();
    }, 500); 
}
function showalert(){
    let p=document.querySelector(".alert");
    p.classList.add("alert-show");
    p.classList.add("uptime");
}
