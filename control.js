$(document).ready(function () {
        updateView();                    // insert all texts in the right place...
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

        $("menu").load("Beverages_eng.js", function(){
                for(i=0; i < DB3.spirits.length(); i++){
                    makeMenuItem(DB2.spirits[i].nr);
                }
            }
        );
    }
);

function makeSpan(ids, classes, content){
    let temp = "<span";
    if(ids != ""){
        temp += ' id="' + ids +'"';
    }
    if(classes != ""){
        tempo += ' class="' + classes + '"';
    }
    temp += ">";
    for(i in content){
        temp += content[i];
    }
    temp += "</span>";
    return temp;
}

function makeDiv(ids, classes, content){
    let temp = "<div";
    if(ids != ""){
        temp += ' id="' + ids +'"';
    }
    if(classes != ""){
        tempo += ' class="' + classes + '"';
    }
    temp += ">";
    for(i in content){
        temp += content[i];
    }
    temp += "</div>";
    return temp;
}

function getItem(key){
    for(i = 0; i < DB3.spirits.length(); i++){
        item = DB3.spirits[i];
        if(item.nr = key){
            return item;
        }
    }
}

function makeMenuItem(key){
    let item = getItem(key);
    return makeDiv("i"+ key, "menuitem", [makeSpan("n"+key, "menuname", item.name), '<br>',
            makeSpan("p"+key, "menuprice", item.priceinclvat), '<br>',
            makeSpan("pr"+key, "menuproducer", item.producer), '&#x2022',
            makeSpan("a"+key, "menualcpercentage", item.alcoholstrength)]);

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

function addOrder(key){
    let item = getItem(key);
    let div1 = makeDiv("i1"+ key, "menuitem", [makeSpan("n"+key, "menuname", item.name), '<br>',
        makeSpan("p1"+key, "menuprice", item.priceinclvat)]);
    document.getElementById('#orderdetails').appendChild(div1);
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
