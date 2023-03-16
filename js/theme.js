let i = 0;
let css = document.getElementById('css');
function theme() {
    i++;
    if(i==2){
        i=0;
        css.href = "css/style.css";
    } else if(i==1) css.href = "css/style-dark.css";
}