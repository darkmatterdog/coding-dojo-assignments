


function likeStatus(element){
    var thisMessage = element.parentNode;
    var currentLikes = thisMessage.firstChild.innerText;
    currentLikes = parseInt(currentLikes.slice(0,-7));
    currentLikes++;
    currentLikes = currentLikes + " like(s)";
    thisMessage.firstChild.innerText = currentLikes;
    console.log(thisMessage);
    console.log(currentLikes);
}