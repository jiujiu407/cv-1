let html = document.querySelector('#demo');
let style = document.querySelector("#style");
let string =`/*你好，我是一名前端新人
接下来展示一个div
我要加的样式是*/
#div1{
    border: 1px solid red;
    width:200px;
    height:200px;
}
/*好了朋友们，让我们把它变成八卦图
首先变成一个圆*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*接下来加上一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
#div1::before{
    width: 100px;
    height: 100px;
    position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    width: 100px;
    height: 100px;
    position: relative;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`;
let string2 = " ";
let n = 0;
let step = () =>{
    setTimeout(()=>{     
    if(string[n]=== "\n"){
        string2 +="<br>";
    }else if(string[n]=== " "){
    string2 +="&nbsp";
    }else{
        string2 += string[n]
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0,n);
    window.scrollTo(0,99999);
    demo.scrollTo(0,99999);
    if(n < string.length -1){
        n +=1;
        step();
    }else{
    }
  },50)
};
step();
