var timer = null,
    timerInv = null,
    window_width = 720,
    index = 0,
    img_count = 4,
    locatArr = [0,-720,-1440,-2160];

var box = document.getElementsByClassName('imgs')[0],
    dot = document.getElementsByClassName('yuandian')[0];

// 获取DOM元素
const li =dot.getElementsByTagName('li');
const pre = document.getElementsByClassName('pre');
const next = document.getElementsByClassName('next');

// 轮播图展示
function disPlay() {
    var initLeft = parseInt(window.getComputedStyle(box).left);
    if(index == img_count-1) {
        moveTo(0);
        index = 0;
    } else {
        moveTo(++index);
    }   
}

// 切换图片 上一张
function prePlay() {
    // 是第一张则切换到最后一张
    if(index == 0) {
        moveTo(3);
        index = 3;
    } else {
        // 不是则是上一张
        moveTo(--index);
    }
}
// 下一张
function nextPlay() {
    if(index == 3) { //是最后一张则
        moveTo(0);
        index = 0;
    } else {
        moveTo(++index);
    }
}

// DOM事件   注意：getElementsByClassName得到的是一个集合
function bindEvent() {
    var li = dot.getElementsByTagName('li');
    var pre = document.getElementsByClassName('pre')[0];
    var next = document.getElementsByClassName('next')[0];
    // 按钮点击切换
    pre.addEventListener('click', function() {
        clearInterval(timer);
        nextPlay();
        timer = setInterval(disPlay, 2000);
    });
    next.addEventListener('click', function() {
        clearInterval(timer);
        prePlay();
        timer = setInterval(disPlay, 2000);
    });

    // 小圆点点击切换
    for (var i = 0; i < 4;i++) {
        (function(j) {
            li[j].addEventListener('click', function() {
                clearInterval(timer);
                index = j;
                moveTo(index);
                timer = setInterval(disPlay, 2000);
            })
        }(i))
    }
}

// 跳转到某张图片
function moveTo(location) {
    var target_position = parseInt(window.getComputedStyle(box).left) - locatArr[location];
    box.style.left = locatArr[location] + 'px';
}

function start() {
    timer = setInterval(disPlay,2000);
    var timeDot = setInterval(function() {
        var dots = document.getElementsByClassName('yuandian')[0];
        var singledot = dots.getElementsByTagName('li');
        for (var i = 0; i < 4; i++) {
            singledot[i].className='';
        } 
        singledot[index].className='act';  
    },20)
    bindEvent();
}

start();