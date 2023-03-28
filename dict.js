function dict_get(item) {
    return dict[lang][item];
}

let lang = "eng";

function surpriseMe() {
    lang = "surprise";
    let ids = $('.translate').map(function () {
        return this.id;
    }).get().join().split(',')
    for (id in ids) {
        let item = ids[id];

        $("#" + item).text(dict_get(item));
    }
    $("#surprise").hide(4000);
}


function switchLang() {

    if (lang == "eng") {
        lang = "swe";
    } else if (lang == "swe") {
        lang = "eng";
    } else {
        lang = "eng"
    }
    updateView();
}
function updateView() {

    let ids = $('.translate').map(function () {
        return this.id;
    }).get().join().split(',')
    for (id in ids) {
        let item = ids[id];

        $("#" + item).text(dict_get(item));
    }
}

dict = {
    "eng": {
        "lang": "EN",
        "guest": "Guest",
        "vip": "VIP",
        "man": "Manager",
        "l": "Login",
        "manl": "Manager Login",
        "loginVIP": "Login",
        "login1": "Login",
        "lg": "Logout of Guest",
        "lgv": "Logout of Account",
        "order": "Order",
        "search": "Search",
        "checkout": "Check Out",
        "tot": "Total",
        "dis": "Discount",
        "finaltot": "Final Total",
        "checkOut": "Check Out",
        "payNow": "Pay Now",
        "oneBill": "One Bill",
        "splitBill": "Split Bill",
        "checkOut1": "Check Out",
        "oneBill1": "One Bill",
        "tot1": "Total",
        "dis1": "Discount",
        "finaltot1": "Final Total",
        "checkOut2": "Check Out",
        "splitBill1": "Split Bill",
        "tot2": "Total",
        "dis2": "Discount",
        "finaltot2": "Final Total",
        "payNow1": "Pay Now",
        "ftpp": "Final Total per Person",
        "waiter": "A waiter will be here shortly to take your card",
        "lgm": "Logout of Manager",
        "accounting-button": "Accounting",
        "productinformation": "Product Information",
        "prodType": "Product Name",
        "prodType3": "Product Name",
        "prodSupp": "Product Producer",
        "prodPric": "Product Price",
        "amountLeft": "Amount Left",
        "priceM": "Price Management",
        "removeI": "Remove Item",
        "current-pr": "Current Price",
        "new-price": "New Price",
        "cancel": "Cancel",
        "cancel1": "Cancel",
        "set-price": "Set New Price",
        "yes-button": "Yes",
        "areyousure": "Are you sure that you want to remove this item?",
        "accountInf": "Account information",
        "accountInfTitle": "Account information",
        "accountBalance": "Account balance:",
        "payWithBalance": "Pay with account Balance",
        "successfull": "Payment successfull",
        "codeTitle": "Unlock fridge",
        "generateCode": "Would you like to get a drink from the fridge?",
        "generateCodeTitle": "Your single use code",
        "lgb": "Logout of Bartender",
        "callsec": "Calling security now",
        "getPayment": "You just completed this order. Close this tab when payment is confirmed.",
        "orderOH": "This order is on the house. Close this tab once the customer has recieved the drink."
        "fridgeCode": "Fridge",
        "generateCode1": "Generate Code"
    },
    "swe": {
        "lang": "SV",
        "guest": "Gäst",
        "vip": "VIP",
        "man": "Manager",
        "l": "Login",
        "manl": "Manager Login",
        "loginVIP": "Login",
        "login1": "Login",
        "lg": "Logga ut från gäst",
        "lgv": "Logga ut från ditt konto",
        "order": "Order",
        "search": "Sök",
        "checkout": "Checka ut",
        "tot": "Total",
        "dis": "Rabatt",
        "finaltot": "Slutgiltig pris",
        "checkOut": "Checka ut",
        "payNow": "Betala nu",
        "oneBill": "En nota",
        "splitBill": "Delad nota",
        "checkOut1": "Checka ut",
        "oneBill1": "En nota",
        "tot1": "Total",
        "dis1": "Rabatt",
        "finaltot1": "Slutgiltigt pris",
        "checkOut2": "Checka ut",
        "splitBill1": "Delad nota",
        "tot2": "Total",
        "dis2": "Rabatt",
        "finaltot2": "Slutgiltigt pris",
        "payNow1": "Betala nu",
        "ftpp": "Slutgiltigt pris per person",
        "waiter": "En servitör kommer snart att komma och ta betalt",
        "lgm": "Logga ut från Manager",
        "accounting-button": "Revision",
        "productinformation": "Produkt Information",
        "prodType": "Produkt Typ",
        "prodSupp": "Produkt Leverantör",
        "prodPric": "Produkt Pris",
        "amountLeft": "Inventarie",
        "priceM": "Pris hantering",
        "removeI": "Ta bort produkt",
        "current-pr": "Nuvarande pris",
        "new-price": "Nytt pris",
        "cancel": "Avbryt",
        "cancel1": "Avbryt",
        "set-price": "Sätt nytt pris",
        "yes-button": "Ja",
        "areyousure": "Är du säker på att du vill ta bort den här produkten?",
        "accountInf": "Konto information",
        "accountInfTitle": "Konto information",
        "accountBalance": "Saldo:",
        "payWithBalance": "Betala med konto saldo",
        "successfull": "Tack för din betalning",
        "codeTitle": "Kylen",
        "generateCode": "Vill du låsa upp kylen?"

    }
};
