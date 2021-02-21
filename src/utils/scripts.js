function onOff(){
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")
    
    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
};

function loadingOnOff(){
    document
        .querySelector("#loading")
        .classList
        .toggle("hide-loading")

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")
};

export { onOff, loadingOnOff };
