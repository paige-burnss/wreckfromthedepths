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
        "vipl": "VIP Login",
        "manl": "Manager Login",
        "loginVIP": "Login",
        "login1": "Login",
        "lg": "Logout of Guest",
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
        "pop": "Popular",
        "beer": "Beer",
        "wine": "Wine",
        "spir": "Spirits",
        "snack": "Snacks",
    },
    "swe": {
        "lang": "SV",
    }
};
