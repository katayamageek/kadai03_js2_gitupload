let dropJudge = null;

const boxDOM = document.querySelector('#box');
const dropareaDOM = document.querySelector('#droparea');

boxDOM.onmousedown = function (event) {

    boxDOM.style.cursor = 'grabbing';

    let shiftX = event.clientX - boxDOM.getBoundingClientRect().left;
    let shiftY = event.clientY - boxDOM.getBoundingClientRect().top;

    boxDOM.style.position = 'absolute';
    boxDOM.style.zIndex = 1000;

    movePosition(event.pageX, event.pageY);

    // #box要素の位置を決める
    function movePosition(pageX, pageY) {
        boxDOM.style.left = pageX - shiftX + 'px';
        boxDOM.style.top = pageY - shiftY + 'px';
    }

    // マウスを動かした時の処理
    function mouseMove(event) {
        movePosition(event.pageX, event.pageY);

        boxDOM.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        boxDOM.hidden = false;

        let droppableBelow = elemBelow.closest('#droparea');
        if (dropJudge != droppableBelow) {
            if (dropJudge) {
                notDroppable(dropJudge);
            }
            dropJudge = droppableBelow;
            if (dropJudge) {
                onDroppable(dropJudge);
            }
        }
    }

    document.addEventListener('mousemove', mouseMove);

    // マウスを離した時にmousemoveイベントを解除する
    document.onmouseup = function () {
        document.removeEventListener('mousemove', mouseMove);
        boxDOM.style.cursor = 'grab';
    };
};

// ↓ドロップを離した場合の色変化
function onDroppable(element) {
    element.style.background = '#969696';
}
// ↓ドロップを離さなかった場合の色変化
function notDroppable(element) {
    // element.style.background = '#25be9d';
}

boxDOM.ondragstart = function () {
    return false;
};



