//计数
let count = 0;

//获取元素 
const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

btns.forEach(function(btn) {
    //注册事件处理器
    btn.addEventListener("click", function (e) {
        const btnName = e.currentTarget.classList;
        //判断哪个按钮被点击 进行操作
        if (btnName.contains("decrease")) {//减一
            count--;
        } else if(btnName.contains("increase")) {//加一
            count++;
        } else { //归零
            count = 0;
        } 
        // value.innerHTML = count;
        value.textContent = count;
        // Node 接口的 textContent 属性表示一个节点及其后代的文本内容

        //设置数值颜色
        if(count < 0) {
            value.style.color = "green";
        }
        if(count === 0) {
            value.style.color = "#222";
        }
        if(count > 0) {
            value.style.color = "blue";
        }
    });
});

