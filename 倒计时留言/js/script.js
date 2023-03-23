// 倒计时
const countDownTimer = () =>{
    // 设置目标时间
    const baseDate = new Date("December 31, 2022 00:00:00").getTime();  
    //获取目前时间  getTime()返回毫秒数
    const currentDate = new Date().getTime();
    //差值
    const timeDiff = baseDate-currentDate;
    
    // 格式转换 换成毫秒 
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //计算差值 先求余数 再求模
    const dayText = Math.floor(timeDiff / day);
    const hourText =  Math.floor((timeDiff % day)/hour);
    const minuteText = Math.floor((timeDiff % hour)/minute);
    const secondText = Math.floor((timeDiff % minute)/second);
    
    document.querySelector('.days').innerHTML = dayText;
    document.querySelector('.hours').innerHTML = hourText;
    document.querySelector('.minutes').innerHTML = minuteText;
    document.querySelector('.seconds').innerHTML = secondText;

};

//调用函数 隔1秒执行
setInterval(countDownTimer,1000);



