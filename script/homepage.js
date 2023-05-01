// TODO: Add autoplay in htmml file


var promoarray=[
    "DISNEY PREMIER ACCESS & 1-DAY TICKET COMBO, STARTING FROM HK $798",
    "DISNEY PREMIER ACCESS & 8-ATTRACTIONS WITH 1 SHOW, STARTING FROM HK $379",
    "DISNEY PREMIER ACCESS - 1-ATTRACTION, STARTING FROM HK $79"
]
function randommsg(){
    var rand_num = Math.floor(Math.random()*3);
    document.getElementById("contentheading").innerHTML=promoarray[rand_num]
}

var vid_array=[
    "https://personal.cs.cityu.edu.hk/~cs2204/video/Castle.mp4",
    "https://personal.cs.cityu.edu.hk/~cs2204/video/Musical_Journey.mp4"
]
var vid_count = 1;
var vid=document.getElementById('internalvid');
vid.removeAttribute("loop");
vid.addEventListener('ended',loop_vid,false);


function loop_vid(e) {
    if (vid_count % 2 ==1){
        vid.setAttribute("src",vid_array[0]);
    }
    else{
        vid.setAttribute("src",vid_array[1]);
    }
    vid_count++
}

var forms = document.getElementById("bookform");

var errormsg = document.getElementById("error_message")

function check_form(){
    var nam = document.forms["bookform"]["ddate"].value;
    var tim = document.forms["bookform"]["time"].value;
    var numb = document.forms["bookform"]["nnumber"].value;



    if (nam == "" ||tim==null||numb==""){
        errormsg.innerHTML = "Data not completed, please re-enter";
    }
    else{
        errormsg.innerHTML = "";
        var res = reserve(nam,tim,numb);
        if (res == true){
            alert("Reservation Done. Thank you.");
        }
        else{
            alert("Disneyland has reached the maximum number of visitors for the day.");
        }
        setTimeout(resetform(),1000);
    }


}

function resetform() {
    errormsg.innerHTML = "";
    document.forms["bookform"]['time'].value = null
    document.forms["bookform"]['ddate'].value = null
    document.forms["bookform"]['nnumber'].value = null
}






setInterval(randommsg,3000);

loop_vid();


