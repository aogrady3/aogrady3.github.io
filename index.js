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


function Open() {
    document.getElementById("side-navbar").style.width = "200px";
};

function Close() {
    document.getElementById("side-navbar").style.width = "0";
};

// Timeline Mousover

function openTimeline(num){
   document.getElementById(`timeline-${num}`).style.height='150px';

}

function closeAllTimeline(){
    let items = document.getElementsByClassName('dropdown')

    for (let i = 0; i < items.length; i++) {
        let item = items[i]
        item.style.height="0"
    }
}
