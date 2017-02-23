/**
 * Created by xuan on 2017/2/23 0023.
 */

function showPic(whichPic) {
    var source = whichPic.getAttribute("href");
    var placeHolder = document.getElementById("placeHolder");
    placeHolder.setAttribute("src", source);

    var titleText = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = titleText

}

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;

    var imagegallery = document.getElementById("imagegallery");
    var links = imagegallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            showPic(this);
            return false;
        }
    }

}
window.onload = prepareGallery;