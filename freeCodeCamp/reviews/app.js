//小demo 人物直接数组对象
const personList =[
    {name: "李嘉图", job: "屠龙少年", life: "路明非只有四分之一"},
    {name: "楚子航", job: "永远的师兄", life: "永不熄灭的黄金瞳"},
    {name: "芬格尔", job: "留级废材", life: "斩龙者，废材师兄"},
    {name: "凯撒", job: "高傲贵公子", life: "加图索家族的领袖"}
];
//获取人物名字以及人物描述,顺序
const person = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
let cur = 0;
//按钮
const preBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
//展示函数
function show(current) {
    // 图片素材不够，与轮播图逻辑类似，省略
    const persons = personList[current];
    person.textContent = persons.name;
    job.textContent = persons.job;
    info.textContent = persons.life;
}
//两个功能 第一个：顺序切换
preBtn.addEventListener('click', function () {
    cur--;
    if (cur < 0) {//回到最后一个人
        cur = personList.length - 1;
    }
    show(cur);
});
nextBtn.addEventListener('click', function () {
    cur++;
    if (cur > personList.length) {//回到第一个人
        cur = 0;
    }
    show(cur);
});
//两个功能 第一个：随机切换
randomBtn.addEventListener('click', function () {
    cur = Math.floor(Math.random() * personList.length);
    show(cur);
});