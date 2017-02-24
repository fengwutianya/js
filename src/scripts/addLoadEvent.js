/**
 * Created by xuan on 2017/2/23 0023.
 */

function addLoadEvent(func) {
    //暂存
    var oldOnLoad = window.onload;
    if((typeof window.onload) != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldOnLoad();
            func();
        }
    }
}
