var numOrders = 0; //global variable for number of orders in the 'cart'
var totalPrice = 0;
var discount = 0;
var changePrice = 0;

$(document).ready(function () {
        updateView(); // insert all texts in the right place...
        numOrders = 0;
        $(".modal").hide(); // Hide all modal dialogues on loading the page.

        $("#vip").click(function () { //clicking on the vip button opens the vip modal
                showVIP();
            }
        );

        $("#man").click(function () { //clicking on the manager button opens the vip modal
                showMan();
            }
        );

        $("#checkOut").click(function () { //clicking on the checkout button opens the checkout modal
                showCheckOut();
            }
        );

        $("#oneBill").click(function () { //clicking on the one bill button opens the one bill modal
                showOneBill();
                showPrice1(totalPrice);
                showDiscount1();
                showFinalPrice1(totalPrice);
            }
        );

        $("#splitBill").click(function () { //clicking on the split bill button opens the split bill modal
                showSplitBill();
                showPrice2(totalPrice);
                showDiscount2();
                showFinalPrice2(totalPrice);
            }
        );

        $("#payNow").click(function () { //clicking on the pay now button opens the pay now modal
                showPayNow();
            }
        );

        $("#payNow1").click(function () { //clicking on the pay now button opens the pay now modal
                showPayNow();
            }
        );

        $("#manageP").click(function () { //clicking on the manage p button opens the price management modal
                showPriceMgmt();
            }
        );

        $("#removeItem1").click(function () { //clicking on the remove item button opens the remove item modal
                showRemoveItem();
            }
        );

        $(".close").click(function () { //clicking on the "x" button in the vip modal closes it
                hideVIP();
            }
        );
        
        $(".close1").click(function () { //clicking on the "x" button in the manager modal closes it
                hideMan();
            }
        );
        
         $(".close2").click(function () {
                hideProd();
            }
         );

        $(".close6").click(function () { //clicking on the "x" button in the checkout modal closes it
                hideCheckOut();
            }
        );

        $(".close3").click(function () { //clicking on the "x" button in the one bill modal closes it
                hideOneBill();
            }
        );

        $(".close4").click(function () { //clicking on the "x" button in the split bill modal closes it
                hideSplitBill();
            }
        );

        $(".close5").click(function () { //clicking on the "x" button in the payNow modal closes it
                hidePayNow();
            }
        );

        $(".close7").click(function () { //clicking on the "x" button in the price management modal closes it
                hidePriceMgmt();
            }
        );

        $(".close8").click(function () { //clicking on the "x" button in the remove item modal closes it
                hideRemoveItem();
            }
        );

        $("#cancel").click(function () { //clicking on the cancel button in the price mgmt modal closes it and goes back to the prod info modal
                hidePriceMgmt();
                showProd();
            }
        );

        $("#cancel1").click(function () { //clicking on the cancel button in the remove item modal closes it and goes back to the prod info modal
                hideRemoveItem();
                showProd();
            }
        );

        $("#remorderitem").click(function(){ //clicking on the "x" button in the order information removes the drink from the orders
                removeOrderItem();
            }
        );

        $("#menu").html( //on page load up, the menu is loaded for the customer
            makeMenuCustomer()
        );

        $("#totalprice").html( //on page load up, the order price is loaded for the customer
                showPrice(0)
        );

        $("#finalprice").html( //on page load up, the order final price is loaded for the customer
                showPrice(0)
        );

        $("#discount").html( //on page load up, the discount is loaded for the customer
                showDiscount()
        );
        
        $("#menu1").html(
            makeMenuManager()
        );

        $("#manageP").click(function () {
                showPriceMgmt();
            }
        );

        $("#removeItem1").click(function () {
                showRemoveItem();
            }
        );

        $("#refillInv").click(function () {
                hideProd();
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

function getItembyName(name){
    for(var i = 0; i < DB2.length; i++){
        item = DB2[i];
        if(item.name === name){
            return item;
        }
    }
}

function makeMenuItemCustomer(key){ //makes each individual drink card in the menu
    let item = getItem(key); //gets the drink information from the drink database
    let name = item.name; //stores the drink name in a variable
    let price = item.priceinclvat; //stores drink price in a variable
    let tempcall = "addOrder('" + key +"','" + name + "','" + price + "')"; //creating a function call here so there are less quotation marks below
    return makeDiv("i"+ key, "menuitem", [makeSpan("n"+key, "menuname", name), '<br>', //makes div with drink menu information and button to add drink to order
            makeSpan("p"+key, "menuprice", price), '<br>',
            makeSpan("pr"+key, "menuproducer", item.producer), '<br>',
            makeSpan("a"+key, "menualcpercentage", item.alcoholstrength), '<br>',
            makeButton("o"+ key, "addorder", tempcall , "Add to Order")]);
}

function makeMenuCustomer(){ //making menu for guest and vip page
    let tempmenu = "";
    for(var i=0; i < DB2.length; i++){ //for loop to go through the entire drinks database
        tempmenu += makeMenuItemCustomer(DB2[i].nr); //calls makeMenuItem function with the key for each drink in database
    }
    return tempmenu;
}

function makeMenuItemManager(key){
    let item = getItem(key);
    return makeDiv("i"+ key, "menuitem1", [makeSpan("n"+key, "menuname", item.name), '<br>',
        makeButton("pi"+key, "productInfo", "showProd("+key+")", "Product Information")]);
}

function makeMenuManager(){
    let tempmenu = "";
    for(var i=0; i < DB2.length; i++){
        tempmenu += makeMenuItemManager(DB2[i].nr);
    }
    return tempmenu;
}

function addOrder(key, name, price){ //adds the drink order to the orders column after pressing the "add to order" button
    if(numOrders < 10){ //checks if there are already 10 orders in their 'cart'
        let tempcall = "removeOrderItem('" + key + "')"; //creating a function call here so there are less quotation marks below
        let tempOrderList = $("#orders").html() + makeDiv("or"+ key, "orderitem", //adding a new order item to the #orders.html list
            [makeDiv("c4"+key, "col4", //first column that holds the name and price of the order item
                [makeSpan("on"+key, "ordername", name), '<br>',
                makeSpan("op" +key, "orderprice", price)]),
            makeDiv("c5"+key, "col5", //second column that holds the remove button
                [makeButton("rem"+key, "remorderitem", tempcall, "&times;")]) 
            ])+ "<br>";
        $("#orders").html(tempOrderList); //changing the html of the #orders object to the updated list with the new order item
        numOrders++; //updating the number of orders in the system
        totalPrice += parseFloat(price);
        showPrice(totalPrice.toFixed(2)); //call showPrice function to update the total price
        showFinalPrice(totalPrice.toFixed(2));
        return tempOrderList; //ending the function
    }
    else{ //if there are 10 orders, a user cannot add another order to their 'cart'
        alert("You already have 10 drinks in your order which is the max.");
    }
}

function removeOrderItem(key){ //removes a specific drink order from the orders column when the "X" is pressed
    let tempOrderList = $("#orders").html(); //gets the list of orders in the #orders object
    let position = tempOrderList.search("or"+key); //finds the specific order id of the drink the user wants to remove
    let start = tempOrderList.slice(0,position-9); //creates a substring of all the html before the <div> with the drink order to remove
    let end = "";
    let total = "";
    let count = 0; //created so that the first <br> tag won't be detected, but the second one will
    for(var i = position; i < tempOrderList.length; i++){ //goes through the list of orders after the specific order id div is found to find the end of it
        if(tempOrderList.substring(i,i+4) === '<br>' && count === 1){ //the end of the <div> for the drink order is found
            end = tempOrderList.substring(i+4); //creates another substring with all the html after the <div> with the drink order to remove
            total = start + end; //adds the two substrings together to make a string without the removed drink order in it
            break; //gets out of the loop
        }
        else if(tempOrderList.substring(i,i+4) === '<br>'){ //checks for the first <br> tag within the drink div (don't want to cut the string here because then the html wouldn't work)
            count++;
        }
    }
    $("#orders").html(total); //update the #orders html with the new substring
    numOrders--; //update number of orders
    totalPrice -= parseFloat(getItem(key).priceinclvat); //update total price (round the price to the 3rd decimal place to reduce errors due to very specific prices with lots of decimal places)
    showPrice(totalPrice.toFixed(2)); //call showPrice function to update the total price
    showFinalPrice(totalPrice.toFixed(2));
    return total;
}

function showPrice(totalPrice){ //updates the total price of the orders when an order is added or removed
    $("#totalprice").html(totalPrice); //update the html in the 'totalprice' id to the new price
}

function showFinalPrice(totalPrice){ //updates the total price of the orders when an order is added or removed
    $("#finalprice").html(totalPrice-(totalPrice*discount)); //update the html in the 'totalprice' id to the new price
}

function showDiscount(){
    if(location.href.split("/").slice(-1) == 'guest.html'){
        discount = 0;
        dis = "0%"
        $("#discount").html(dis);
    }
    if(location.href.split("/").slice(-1) == 'vip.html'){
        discount = 0.15;
        dis = "15%"
        $("#discount").html(dis);
    }
}

function showPrice1(totalPrice){ //shows the total price on the One Bill modal
    $("#totalprice1").html(totalPrice.toFixed(2)); //update the html in the 'totalprice' id to the new price
}

function showFinalPrice1(totalPrice){ //updates the total final price in One Bill modal
    $("#finalprice1").html((totalPrice-(totalPrice*discount)).toFixed(2)); //update the html in the 'totalprice' id to the new price
}

function showDiscount1(){
    if(location.href.split("/").slice(-1) == 'guest.html'){
        discount = 0;
        dis = "0%"
        $("#discount1").html(dis);
    }
    if(location.href.split("/").slice(-1) == 'vip.html'){
        discount = 0.15;
        dis = "15%"
        $("#discount1").html(dis);
    }
}

function showPrice2(totalPrice){ //shows the total price on the Split Bill modal
    $("#totalprice2").html(totalPrice.toFixed(2)); //update the html in the 'totalprice' id to the new price
}

function showFinalPrice2(totalPrice){ //updates the total final price in Split Bill modal
    $("#finalprice2").html((totalPrice-(totalPrice*discount)).toFixed(2)); //update the html in the 'totalprice' id to the new price
}

function showDiscount2(){
    if(location.href.split("/").slice(-1) == 'guest.html'){
        discount = 0;
        dis = "0%"
        $("#discount2").html(dis);
    }
    if(location.href.split("/").slice(-1) == 'vip.html'){
        discount = 0.15;
        dis = "15%"
        $("#discount2").html(dis);
    }
}

function splitCheck(num){
    if(num==""){
        num = 1;
    }
    $("#finaltotalperperson").html(((totalPrice-(totalPrice*discount))/num).toFixed(2));
}

function payTasks(){
    totalPrice = 0;
    numOrders = 0;
    $("#totalprice").html(totalPrice);
    $("#finalprice").html(totalPrice-(totalPrice*discount));
    var empty = "";
    $("#orders").html(empty);
}

function searchDrinks(name) {
    if(name === ""){
        $("#menu").html(makeMenuCustomer());
        return;
    }
    var item = getItembyName(name);
    if(item == null){
        var statement = "Nothing came up in our drink database with this name.";
        $("#menu").html(makeMenuCustomer());
        alert(statement);
    }
    else{
        var div1 = makeMenuItemCustomer(item.nr);
        $("#menu").html(div1);
    }
}

function searchDrinks2(name) {
    if(name === ""){
        $("#menu1").html(makeMenuManager());
        return;
    }
    var item = getItembyName(name);
    if(item == null){
        var statement = "Nothing came up in our drink database with this name.";
        $("#menu1").html(makeMenuManager());
        alert(statement);
    }
    else{
        var div1 = makeMenuItemManager(item.nr);
        $("#menu1").html(div1);
    }
}

function hideVIP() { //hides the login modal for the Manager user
    $("#vipModal").hide();
}

function showVIP() { //opens the login modal for the VIP user
    $("#vipModal").show();
}

function hideMan() { //hides the login modal for the Manager user
    $("#manModal").hide();
}

function showMan() { //opens the login modal for the Manager user
    $("#manModal").show();
}



//can't figure this out yet, need to think about it more. why is get item undefinded??
function showProd(key) { 
     var item = getItem(key);
    // var type = item.name;
    // $("#prodType1").html(item.name);
   $("#prodInf").show();
}




function hideProd() {
    $("#prodInf").hide();
}

function showPriceMgmt() {
    $("#manage-price").show();
    $("#prodInf").hide();
}

function hidePriceMgmt() {
    $("#manage-price").hide();
}

function showRemoveItem(){
    $("#remove-item").show();
    $("#prodInf").hide();
}

function hideRemoveItem(){
    $("#remove-item").hide();
}

function hideCheckOut() { //hides the checkout modal
    $("#checkOutModal").hide();
}

function showCheckOut() { //opens the checkout modal
    $("#checkOutModal").show();
}

function hideOneBill() { //hides the one bill modal
    $("#oneBillModal").hide();
}

function showOneBill() { //opens the one bill modal while hiding the checkout modal
    $("#oneBillModal").show();
    $("#checkOutModal").hide();
}

function hideSplitBill() { //hides the split bill modal
    $("#splitBillModal").hide();
}

function showSplitBill() { //opens the split bill modal while hiding the checkout modal
    $("#splitBillModal").show();
    $("#checkOutModal").hide();
}

function hidePayNow() { //hides the one bill modal
    $("#payNowModal").hide();
}

function showPayNow() { //opens the one bill modal while hiding the checkout modal
    $("#oneBillModal").hide();
    $("#splitBillModal").hide();
    $("#payNowModal").show();
}

function openIndex(){ //opens index.html page
    location.href = './index.html';
}

function openGuest(){ //opens guest.html page
    location.href = './guest.html';
}

function openVIP(){ //opens VIP.html page
    location.href = './vip.html';
}

function openMan(){ //opens manager.html page
    location.href = './manager.html';
}
