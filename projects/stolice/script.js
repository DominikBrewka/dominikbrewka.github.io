/*
====================
🗿 Dominik Brewka 8c
====================
*/


let url = "";
const bodyID = document.body.id;
switch (bodyID) {
    case 'index':
        url = "https://marmo.dbrewka.pl/admin/index.txt";
        console.log('Index');
        break;

    case 'dublin':
        url = "https://marmo.dbrewka.pl/admin/dublin.txt";
        console.log('Dublin');
        break;

    case 'budapeszt':
        url = "https://marmo.dbrewka.pl/admin/budapeszt.txt"
        console.log('Budapeszt');
        break;

    case 'warszawa':
        url = "https://marmo.dbrewka.pl/admin/warszawa.txt"
        console.log('Warszawa');
        break;

    case 'wieden':
        url = "https://marmo.dbrewka.pl/admin/wieden.txt"
        console.log('Wieden');
        break;

    default:
        console.warn('An error occured.');
        document.stop();
        break;
}
        
// https://stackoverflow.com/a/65192395/18033003
fetch(url)
    .then( r => r.text() )
    .then( t =>  setContent(t))
        
function setContent(text) {
    document.getElementById('description').innerHTML = text;
    console.log(text);
}

/*
https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
*/


window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    let btn = document.getElementById('scroll-btn');
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.opacity = 1;
        btn.style.visibility = "visible";
    }
    
    else {
        btn.style.opacity = 0;
        // set visibility after 250ms
        setTimeout(function() {
            if (!(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)){ 
                btn.style.visibility = "hidden";
            }
        }, 250);
    }
}

/*
https://stackoverflow.com/questions/47391462/how-to-do-transition-effects-between-two-html-pages
*/

window.transitionTo = function(href) {
    var rbline = document.getElementById('rainbow-line');
    rbline.style.animationDuration = '0.5s';
    var list = document.querySelectorAll(".main, #navbar");
    for (var i = 0; i < list.length; i++) {
        list[i].style.opacity = 0;
    }
    console.log('Transition to ' + href);

    setTimeout(function() { 
        window.location.href = href;
    }, 250)
}

document.addEventListener('DOMContentLoaded', function(event) {
    var list = document.querySelectorAll(".main, #navbar");
    for (var i = 0; i < list.length; i++) {
        list[i].style.opacity = 1;
    }
    console.log('Loaded!');
})
