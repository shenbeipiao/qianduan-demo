//点击菜单图标,切换类名 显示链接
const links = document.querySelector(".links");
const btn = document.querySelector(".nav-toggle");
btn.addEventListener("click", () => {
    links.classList.toggle("show-links");
});