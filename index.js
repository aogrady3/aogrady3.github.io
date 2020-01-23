function Open() {
    document.getElementById("side-navbar").style.width = "200px";
};

function Close() {
    document.getElementById("side-navbar").style.width = "0";
};

function closeProject(){
    document.getElementsByClassName("project-dropdown")[0].style.height = "0"
    document.getElementsByClassName("project-dropdown")[1].style.height = "0"
    document.getElementsByClassName("project-dropdown")[2].style.height = "0"
    document.getElementsByClassName("project-dropdown")[3].style.height = "0"
    document.getElementsByClassName("project-dropdown")[4].style.height = "0"

}

function openProject(num) {
    closeProject()
    document.getElementsByClassName(`${num}`)[0].style.height = "250px"
    
};