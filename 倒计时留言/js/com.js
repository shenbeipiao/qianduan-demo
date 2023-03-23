// 发送留言
//获取信息 
var userName = document.getElementById('userName');
var comment = document.getElementById('content');
var showDate = formatDate();
var showing = document.getElementById('showing');

function showMessage() {
           //验证信息
           if (userName.value !=="" && comment.value !== "") {
                  // 展示信息
                  createDom();
            } else {
                  alert("请输入完整信息！");
            }
            // 清空输入框
            forBlank();
} 

//展示  创建新元素并添加到dom树
function createDom() {
      //创建元素
      var container = document.createElement("div");
      container.id = "person";
      var timeS =document.createElement("span");
      timeS.id = "write-date";
      timeS.innerHTML = showDate;
      var titleH = document.createElement("h2");
      titleH.id = "showName";
      titleH.innerHTML = userName.value;
      var a = document.createElement("a");
      a.href = "#";
      // a.innerHTML = userName.value;
      var messageS = document.createElement("p");
      messageS.id = "comments";
      messageS.innerHTML = comment.value;

      //添加元素
      showing.appendChild(container);
      container.appendChild(titleH);
      container.appendChild(timeS);
      timeS.appendChild(a);
      container.appendChild(messageS);
}     

// 清空输入框
function forBlank() {
      userName.value = "";
      comment.value = "";
      document.getElementById('userName').innerHTML = userName.value;
      document.getElementById('content').innerHTML = comment.value;
}
//格式化时间
function formatDate(){
      //获取系统当前时间
      var  date = new  Date();
      //获取年月日时分秒
      // var str = date.getFullYear()+"-"+(parseInt(date.getMonth())+1)+"-"+date.getDate();
      // str +" "+ date.getHours +":"+ date.getMinutes()+":"+date.getSeconds();
      //return str;

      return  date;
}