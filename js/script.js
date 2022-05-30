AOS.init();

//typing
let text = "I'm a \n Web Publisher";
let viewText = "";
let i = 0;

const typingText =document.querySelector(".typing_text");

let autoTyping =setInterval (function(){

  typing(); //함수호출
},100);

function typing(){

  viewText = text[i++];
  if (viewText == "\n"){
    //줄바꿈 실행
    typingText.innerHTML += "<br>";
  }
  else {
    //한글자씩 타이핑 되게끔 실행
    typingText.innerHTML += viewText;
  }


  //텍스트가 다 작성됐을 때 조건식  (일단 멈춰야함)
  if (i > text.length-1) {
    
    clearInterval(autoTyping); 
    
    //title 과 sub_title 등장 효과
    // title.classList.add("on")
    
  }
}


//scroll_move
let secStart = [];
const sections = document.querySelectorAll(".sections");
const move_btn = document.querySelectorAll(".scroll_move > li");
const main4Start = document.querySelector(".main4");

const main1Start = document.querySelector(".main1");
const me_back = document.querySelector(".me_back_img"); //뒷모습 이미지 

window.addEventListener("scroll",function(){

  let scTop = window.scrollY; 
 
  for(let i=0; i<sections.length; i++){
    secStart[i] = sections[i].offsetTop ;
  }

  for (let i=0; i<move_btn.length; i++){
      if(scTop>=secStart[i] ){
         for(let j=0; j<move_btn.length; j++){
           move_btn[j].classList.remove("on")

           if (scTop >=secStart[0] && scTop < secStart[1] - 600) {
            me_back.classList.remove("disappear");
            }
          else {
            me_back.classList.add("disappear");
          }
             

         }
         move_btn[i].classList.add("on");
      }
  }
});

  let scMove; 
  let scTop = window.scrollY; 

  for (let i=0; i< move_btn.length; i++){
    move_btn[i].addEventListener("click",function(e){
      e.preventDefault();

      let scMove = sections[i].offsetTop;
         window.scrollTo({
          top:scMove,
          behavior:"smooth"
    });
  });


}


  //my works tab menu 
  let tabbtn = document.querySelectorAll(".tab_btn > li");
  let tablist = document .querySelectorAll (".tab_conts > .cont_wrap");

  for (let i=0; i <tabbtn.length ; i++){
    tabbtn[i].addEventListener("click", function () {
        for (let j = 0 ; j <tabbtn.length; j ++ ){
              tablist[j].style.display = "none";
              tabbtn[j].classList.remove("on");
        }
        tablist[i].style.display = "flex";
        tabbtn[i].classList.add("on");
    });
}