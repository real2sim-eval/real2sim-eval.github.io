var currentSceneList = [
    "sloth",
    "rope",
    "T",
];
var currentScene = "sloth";
var currentSceneId = 0;

function ChangeScene(idx){
    var li_list_row1 = document.getElementById("scene-view-ul-row1").children;
    var li_list_row2 = document.getElementById("scene-view-ul-row2").children;
    
    for(i = 0; i < li_list_row1.length; i++){
        li_list_row1[i].className = "";
    }
    for(i = 0; i < li_list_row2.length; i++){
        li_list_row2[i].className = "";
    }

    if(idx < li_list_row1.length) {
        li_list_row1[idx].className = "active";
    } else {
        li_list_row2[idx - li_list_row1.length].className = "active";
    }

    currentScene = currentSceneList[idx];
    currentSceneId = idx;

    document.getElementById("demo_video").src = "files/combine_rendering/" + currentScene + '/0_combine.mp4';    
}