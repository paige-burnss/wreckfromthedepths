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
        "login": "Login",
        "lg": "Logout of Guest",
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