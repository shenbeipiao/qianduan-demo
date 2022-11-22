// js 点击按钮时用到 通过获取标签名 点击时切换样式

// id 前缀用#   class 用.
// 获取 .switch-panel 的标签
const switchPanel = document.querySelector('.switch-panel');
// 获取 .register-login-panel 的标签 切换之后需要调整距离
const register_login_Panel = document.querySelector('.register-login-panel');

const switchPanel_login = document.querySelector('#login');
const switchPanel_register = document.querySelector('#register');
const registerPanel = document.querySelector('.register');
const loginPanel = document.querySelector('.login');

// 监听切换按钮点击事件
const switchBtn1 = document.querySelector('#switch1');
switchBtn1.addEventListener('click', switchStyle);

const switchBtn2 = document.querySelector('#switch2');
switchBtn2.addEventListener('click', switchStyle);

/* 切换样式  JQuery事件 toggle方法
 通过 toggle 方法来 增加 / 移除 定义好的用来 移动 / 隐藏 元素的样式
 */
function switchStyle() {
    //点击 切换 需要改变6个样式 div和section， 里面各有两个需要改变
    switchPanel.classList.toggle('switch-panel-slide');
    register_login_Panel.classList.toggle('register-login-panel-slide');

    switchPanel_login.classList.toggle('switch-hidden');
    switchPanel_register.classList.toggle('switch-hidden');

    loginPanel.classList.toggle('switch-hidden-2');
    registerPanel.classList.toggle('switch-hidden-2');
 }
