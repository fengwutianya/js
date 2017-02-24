/**
 * Created by xuan on 2017/2/23 0023.
 */
function positionMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "10px";
    elem.style.top = "10px";
    moveElement("message", 200, 200, 10);
}
addLoadEvent(positionMessage);
