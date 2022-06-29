console.log("page loaded...");

var incomingRequestNum = document.querySelector("#incomingRequests");
var yourConnectionsNum = document.querySelector("#yourConnectionsBadge");

function acceptRequest(element){

    element.parentElement.parentElement.remove();

    var newCount = (parseInt(incomingRequestNum.innerText) - 1);
    incomingRequestNum.innerText = newCount;
    yourConnectionsNum.innerText++;
}

function denyRequest(element){
    element.parentElement.parentElement.remove();

    var newCount = (parseInt(incomingRequestNum.innerText) - 1);
    incomingRequestNum.innerText = newCount;

}

function editProfile(){
    var userName = document.querySelector(".card-body").firstElementChild;
    userName.innerText = "Jayne Dowe";
}