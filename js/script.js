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
    element.style.background = '#25be9d';
}
// ↓ドロップを離さなかった場合の色変化
function notDroppable(element) {
    element.style.background = '#e3e3e3';
}

boxDOM.ondragstart = function () {
    return false;
};


// ドラッグアンドドロップで並び替える
$(function () {
    Sortable.create(list1, {
        sort: 1,
        group: {
            name: 'common_lists',
            pull: true,
            put: true
        },
        animation: 300,
    });
    Sortable.create(list2, {
        sort: 1,
        group: {
            name: 'common_lists',
            pull: true,
            put: true
        },
        animation: 300
    });
    Sortable.create(list3, {
        sort: 1,
        group: {
            name: 'common_lists',
            pull: true,
            put: true
        },
        animation: 300
    }); Sortable.create(list4, {
        sort: 1,
        group: {
            name: 'common_lists',
            pull: true,
            put: true
        },
        animation: 300
    }); Sortable.create(list5, {
        sort: 1,
        group: {
            name: 'common_lists',
            pull: true,
            put: true
        },
        animation: 300
    });
    Sortable.create(list0, {
        sort: 1,
        group: {
            name: 'common_lists',
            pull: 'clone',
            put: true
        },
        animation: 130
    });
});

// $("#save1").on("click",function(){
//     $(".box-a").css("background","#0c5460");
//     $(".box-a").css("color","#ffffff");
//     $(".box-a").append("プレイリスト1");
// });

$("#save2").on("click", function () {
    $(".box-b").css("background", "#0c5460");
    $(".box-b").css("color", "#ffffff");
    $(".box-b").append("プレイリスト2");
});

$("#save3").on("click", function () {
    $(".box-c").css("background", "#0c5460");
    $(".box-c").css("color", "#ffffff");
    $(".box-c").append("プレイリスト3");
});

$("#save4").on("click", function () {
    $(".box-d").css("background", "#0c5460");
    $(".box-d").css("color", "#ffffff");
    $(".box-d").append("プレイリスト4");
});

$("#save5").on("click", function () {
    $(".box-e").css("background", "#0c5460");
    $(".box-e").css("color", "#ffffff");
    $(".box-e").append("プレイリスト5");
});


var value = "";
$(function () {
    // ボタンが押されたら入力内容を表示する
    $(".button1").on("click", function () {
        var getval = $(".text1").val();
        $(".box-a").text(getval);
        $(".box-a").css("background", "#25be9d");
        $(".box-a").css("color", "#ffffff");
        $(".box-a").css("border-color", "transparent");
        $(".box-a").css("text-align", "center");
        
    });
});

$(function () {
    // ボタンが押されたら入力内容を表示する
    $(".button2").on("click", function () {
        var getval = $(".text2").val();
        $(".box-b").text(getval);
        $(".box-b").css("background", "#25be9d");
        $(".box-b").css("color", "#ffffff");
        $(".box-b").css("border-color", "transparent");
        $(".box-b").css("text-align", "center");
    });
});

$(function () {
    // ボタンが押されたら入力内容を表示する
    $(".button3").on("click", function () {
        var getval = $(".text3").val();
        $(".box-c").text(getval);
        $(".box-c").css("background", "#25be9d");
        $(".box-c").css("color", "#ffffff");
        $(".box-c").css("border-color", "transparent");
        $(".box-c").css("text-align", "center");  
    });
});

$(function () {
    // ボタンが押されたら入力内容を表示する
    $(".button4").on("click", function () {
        var getval = $(".text4").val();
        $(".box-d").text(getval);
        $(".box-d").css("background", "#25be9d");
        $(".box-d").css("color", "#ffffff");
        $(".box-d").css("border-color", "transparent");
        $(".box-d").css("text-align", "center");
    });
});

$(function () {
    // ボタンが押されたら入力内容を表示する
    $(".button5").on("click", function () {
        var getval = $(".text5").val();
        $(".box-e").text(getval);
        $(".box-e").css("background", "#25be9d");
        $(".box-e").css("color", "#ffffff");
        $(".box-e").css("border-color", "transparent");
        $(".box-e").css("text-align", "center");
    });
});