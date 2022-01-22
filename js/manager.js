isClicked = "false";

function loginSignup(){
    window.location = "http://127.0.0.1:5500/index.html"
}

function revealSearchBar(){
    if(isClicked == "false"){
        document.getElementById("searchInput").style.opacity = 1;
        document.getElementById("search").style.opacity = 0;
        document.getElementById("search2nd").style.opacity = 1;
        isClicked = "true";
    }else if(isClicked == "true"){
        document.getElementById("searchInput").style.opacity = 0;
        document.getElementById("search").style.opacity = 1;
        document.getElementById("search2nd").style.opacity = 0;
        isClicked = "false";
    }

}

function back(){
    window.location = "http://127.0.0.1:5500/main.html"
}


function goToMain()
{
    window.location = "http://127.0.0.1:5500/main.html"
}