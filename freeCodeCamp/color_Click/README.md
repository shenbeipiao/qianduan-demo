
## 思路<br>
1.通过两个不同的模式切换点击效果，展示不同的颜色背景.<br>
2.页面布局  html:  导航栏  （ color flipper    simple  hex）<br>
                  背景颜色 ( background color:   )<br>
                  点击按钮 ( click me )<br>
            css:  通过  :root 这个 CSS 伪类匹配文档树的根元素。声明全局 CSS 变量很有用。<br>
                  对于 HTML 来说，:root 表示 <html> 元素，除了优先级更高之外，与 html 选择器相同.<br>
                  var()函数，函数第一个参数是要替换的自定义属性（--nav-color），函数的第二个参数是可选的，用作回退值。<br>
                  calc() 此 CSS 函数允许在声明 CSS 属性值时执行一些计算，一个表达式作为它的参数，用这个表达式的结果作为值。<br>
3.js逻辑：index页面常规取元素，然后数组存放颜色，通过随机函数直接取数组值<br>
          hex页面规取元素，但是此时数组里面存放的是十六进制的数，通过随机函数取得数值之后拼接成字符串，表示颜色<br>


## 相关知识参考文档
参考文档：原生css变量连用技巧 https://w3c.hexschool.com/blog/21985acb <br>
          MDN --- var() css函数  https://developer.mozilla.org/zh-CN/docs/Web/CSS/var <br>
          MDN --- root  https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root <br>
