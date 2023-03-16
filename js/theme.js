let i = parseInt(getCookie("darkmode"));
window.onload = function(){
    i--;
    theme();
};

console.log(i);
let css = document.getElementById('css');
function theme() {
    i++;
    if(i==2){
        i=0;
        css.href = "css/style.css";
    } else if(i==1){
        css.href = "css/style-dark.css";
    } 
    setCookie("darkmode", i, 99);
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return 0;
  }