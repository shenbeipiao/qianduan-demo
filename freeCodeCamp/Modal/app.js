//获取元素
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

//事件监听器
//增加类名
modalBtn.addEventListener("click", function() {
    modal.classList.add("open-modal");
});
//移除类名
closeBtn.addEventListener("click", function() {
    modal.classList.remove("open-modal");
});
