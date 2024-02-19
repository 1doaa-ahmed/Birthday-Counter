var start = document.getElementById("Start")
start.addEventListener("click" , function(){
    bdDate = document.getElementById("Bd").value ;
    birthday = new Date(bdDate).getTime()
    count();
})
function count(){
    var countDown = document.getElementsByClassName("count");
    var currentDate = new Date().getTime();
    var timeDif = birthday - currentDate ;

    const days = Math.floor(timeDif / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDif % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDif % (1000 * 60)) / 1000);


    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    setTimeout(count , 1000); 
}