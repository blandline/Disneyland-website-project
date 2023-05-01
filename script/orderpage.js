var poscounter = 1
total_sum = 0;
var table = document.getElementById("orderitemtable");
var total_arr = [];

var tickethead = document.getElementById("ticketheading");
var dininghead = document.getElementById("diningheading");
var hotelhead = document.getElementById("hotelheading");

var tickets_div = document.getElementById("ticket");
var dinings_div = document.getElementById("dining");
var hotels_div = document.getElementById("hotel");

tickethead.addEventListener(onload,tickbloc())

function headcolor(c1,c2,c3){
    tickethead.style.backgroundColor = c1;
    dininghead.style.backgroundColor = c2;
    hotelhead.style.backgroundColor = c3;
}
function tickbloc(){
    headcolor("white", "grey", "grey")
    tickets_div.style.display = "block";
    dinings_div.style.display = "none";
    hotels_div.style.display = "none";
}
function dinbloc(){
    headcolor("grey", "white", "grey")
    tickets_div.style.display = "none";
    dinings_div.style.display = "block";
    hotels_div.style.display = "none";
}
function hotbloc(){
    headcolor("grey", "grey", "white")
    tickets_div.style.display = "none";
    dinings_div.style.display = "none";
    hotels_div.style.display = "block";
}

function add_row1(){
    
    var row = table.insertRow(poscounter);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "1-Day Ticket";
    cell2.innerHTML = getnum1();
    total_sum += Number(getnum1());
    poscounter++;
    total_arr.push(Number(getnum1()));
    recal();
}
function add_row2(){
    
    var row = table.insertRow(poscounter);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "1-Day Ticket(child)";
    cell2.innerHTML = getnum2();
    total_sum += Number(getnum2());
    poscounter++;
    total_arr.push(Number(getnum2()));
    recal();
}
function add_row3(){
    
    var row = table.insertRow(poscounter);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "2-Day Ticket";
    cell2.innerHTML = getnum3();
    total_sum += Number(getnum3());
    poscounter++;
    total_arr.push(Number(getnum3()));
    recal();
}
function add_row4(){
    
    var row = table.insertRow(poscounter);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "Explorer's Semi Buffet";
    cell2.innerHTML = getnum4();
    total_sum += Number(getnum4());
    poscounter++;
    total_arr.push(Number(getnum4()));
    recal();
}
function add_row5(){
    
    var row = table.insertRow(poscounter);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "3-in-1 Park Meal Voucher";
    cell2.innerHTML = getnum5();
    total_sum += Number(getnum5());
    poscounter++;
    total_arr.push(Number(getnum5()));
    recal();
}
function add_row6(){
    
    var row = table.insertRow(poscounter);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "Standard room";
    cell2.innerHTML = getnum6();
    total_sum += Number(getnum6());
    poscounter++;
    total_arr.push(Number(getnum6()));
    recal();
}
function add_row7(){
    
    var row = table.insertRow(poscounter);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "Deluxe room";
    cell2.innerHTML = getnum7();
    total_sum += Number(getnum7());
    poscounter++;
    total_arr.push(Number(getnum7()));
    recal();
}
function add_row8(){
    
    var row = table.insertRow(poscounter);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "Sea view room";
    cell2.innerHTML = getnum8();
    total_sum += Number(getnum8());
    poscounter++;
    total_arr.push(Number(getnum8()));
    recal();
}
function add_row9(){
    
    var row = table.insertRow(poscounter);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "Kingdom Club room";
    cell2.innerHTML = getnum9();
    total_sum += Number(getnum9());
    poscounter++;
    total_arr.push(Number(getnum9()));
    recal();
}


function getText() {
    var labeltext = document.getElementsByTagName("label"); // Select the adjacent element
    var text = labeltext.textContent;// Get the text content from the adjacent element
    return text;  // Output the text content to the console or perform any desired action with the text
}

function delete_row(){
    
    if (poscounter>1){

        var last_qty = total_arr[poscounter-2];
        total_arr.pop();
        total_sum -= Number(last_qty);
        poscounter--;
        table.deleteRow(poscounter);
        recal();
        // is_zero();

    }
    else{
        poscounter = 1;
        document.getElementById("tableamount").innerHTML = 0;
        // is_zero();
    }
}
function getnum1() { 
    var ids = "1_day_ticket"
    var qty = document.getElementById(ids).value;
    return qty;
}
function getnum2() { 
    var ids = "1_day_ticketc"
    var qty = document.getElementById(ids).value;
    return qty;
}
function getnum3() { 
    var ids = "2_Day_Ticket"
    var qty = document.getElementById(ids).value;
    return qty;
}
function getnum4() { 
    var ids = "explorerbuffet"
    var qty = document.getElementById(ids).value;
    return qty;
}
function getnum5() { 
    var ids = "3in1park"
    var qty = document.getElementById(ids).value;
    return qty;
}
function getnum6() { 
    var ids = "Standard_room"
    var qty = document.getElementById(ids).value;
    return qty;
}

function getnum7() { 
    var ids = "deluxe_room"
    var qty = document.getElementById(ids).value;
    return qty;
}

function getnum8() { 
    var ids = "Sea_view"
    var qty = document.getElementById(ids).value;
    return qty;
}
function getnum9() { 
    var ids = "kingdom"
    var qty = document.getElementById(ids).value;
    return qty;
}


function recal(){
    document.getElementById("tableamount").innerHTML = total_sum;
}

function is_zero(){
    if (isNaN(document.getElementById("tableamount").innerHTML)){
        document.getElementById("tableamount").innerHTML = 0;
    }
}