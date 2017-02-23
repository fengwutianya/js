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
