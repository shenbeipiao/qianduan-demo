//获取元素
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
//点击之后切换类名
toggleBtn.addEventListener("click", function() {
    sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", function() {
    sidebar.classList.toggle("show-sidebar");
});