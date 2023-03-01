$(document).ready(function () {
        updateView();                            // insert all texts in the right place...
        $(".modal").hide();
        // Hide all modal dialogues on loading the page.

        $("#vipModal").click(function () {  // Clicking on the VIP modal dialogue closes it.
                hideVIP();
            }
        );

        $("#manModal").click(function () {  // Clicking on the VIP modal dialogue closes it.
                hideMan();
            }
        );

        $("#vip").click(function () {
                showVIP();
            }
        );

        $("#man").click(function () {
                showMan();
            }
        );

        $("#close").click(function () {
                hideVIP();
            }
        );

        $("#close1").click(function () {
                hideMan();
            }
        );

        $("#menu").html(
                makeMenuCustomer()
        );
    }
);

function makeSpan(ids, classes, content){
    let temp = "<span";
    if(ids != ""){
        temp += ' id="' + ids +'"';
    }
    if(classes != ""){
        temp += ' class="' + classes + '"';
    }
    temp += ">";
    for(i in content){
        temp += content[i];
    }
    temp += "</span>";
    return temp;
}

function makeButton(ids, classes, onclick, content){
    let temp = "<button";
    if(ids != ""){
        temp += ' id="' + ids +'"';
    }
    if(classes != ""){
        temp += ' class="' + classes + '"';
    }
    if(onclick != ""){
        temp+= ' onclick="' + onclick + '"';
    }
    temp += ">";
    for(i in content){
        temp += content[i];
    }
    temp += "</button>";
    return temp;
}

function makeDiv(ids, classes, content){
    let temp = "<div";
    if(ids != ""){
        temp += ' id="' + ids +'"';
    }
    if(classes != ""){
        temp += ' class="' + classes + '"';
    }
    temp += ">";
    for(i in content){
        temp += content[i];
    }
    temp += "</div>";
    return temp;
}

function getItem(key){
    for(var i = 0; i < DB2.length; i++){
        item = DB2[i];
        if(item.nr === key){
            return item;
        }
    }
}

function makeMenuItemCustomer(key){
    let item = getItem(key);
    let name = item.name;
    let price = item.priceinclvat;
    return makeDiv("i"+ key, "menuitem", [makeSpan("n"+key, "menuname", name), '<br>',
            makeSpan("p"+key, "menuprice", price), '<br>',
            makeSpan("pr"+key, "menuproducer", item.producer), '<br>',
            makeSpan("a"+key, "menualcpercentage", item.alcoholstrength), '<br>',
            makeButton("o"+ key, "addorder", 'addOrder(' + name + ', ' + price + ')', "Add to Order")]);
}

function makeMenuCustomer(){
    let tempmenu = "";
    for(var i=0; i < DB2.length; i++){
        tempmenu += makeMenuItemCustomer(DB2[i].nr);
    }
    return tempmenu;
}

function addOrder(name, price){
    let tempOrderList = document.getElementById("#orders");
    tempOrderList.innerhtml += makeDiv("o"+ key, "orderitem", [makeSpan("on"+key, "ordername", name), '<br>',
        makeSpan("op"+key, "orderprice", price)]);
    return tempOrderList;
}

//hides the login modal for the Manager user
function hideVIP() {
    $("#vipModal").hide();
}

//opens the login modal for the VIP user
function showVIP() {
    $("#vipModal").show();
}

//hides the login modal for the Manager user
function hideMan() {
    $("#manModal").hide();
}

//opens the login modal for the Manager user
function showMan() {
    $("#manModal").show();
}

//opens index.html page
function openIndex(){
    location.href = './index.html';
}

//opens guest.html page
function openGuest(){
    location.href = './guest.html';
}

//opens VIP.html page
function openVIP(){
    location.href = './vip.html';
}

//opens manager.html page
function openMan(){
    location.href = './manager.html';
}

// function searchDrinks() {
//     let input = document.getElementById('searchbar').value
//     input=input.toLowerCase();
      
//     for (i = 0; i < x.length; i++) { 
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display="none";
//         }
//         else {
//             x[i].style.display="list-item";                 
//         }
//     }
// }
