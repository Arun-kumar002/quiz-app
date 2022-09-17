// variables
let start_quiz=document.querySelector(".start_quiz");
let exitQuiz=document.querySelector(".quit");
let continue_quiz=document.querySelector(".restart");
let info_box=document.querySelector(".info_box");
let quiz_box=document.querySelector(".quiz_box");
let timecount=document.querySelector('.timer_sec')



// start btn
start_quiz.onclick=function(){
    info_box.classList.add("activeInfo")
}
// exit
exitQuiz.onclick=function(){
    info_box.classList.remove("activeInfo")
}
// continue
continue_quiz.onclick=function(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuiz(0)
    
if(timecount.innerHTML!=0){
    setInterval(()=>{
         if(timecount.innerHTML!=0){
            timecount.innerHTML=timecount.innerHTML-1
         }
        else{
            
    // quiz_box.classList.remove("activeQuiz")
    result_box.classList.add("activeResult")
    scoretext.innerHTML=`<p>your score<span style='color:red'>${score}</span>out of 5</p>`;
        }
    },1000)
    
}


}

// quiz box question part
let questions=[
    {
        Number:1,
        question:'1.What is HTML stands for?',
        answer:'Hyper Text Markup Language',
        options:[
            'Hyper Text Markup Language','Hot Mail','How to Make Lasagna','Markup Language'
        ]

    },
    {
        Number:2,
        question:'2.What is css stands for?',
        answer:'Cascading Style Sheet',
        options:[
            'Cascading Style Sheet','Style Sheet','Awasome Style Sheet','Markup Language'
        ]

    },
    {
        Number:3,
        question:'What is js stands for?',
        answer:'JavaScript',
        options:[
            'JavaScript','Java','Scripting Java','Script'
        ]

    },
    {
        Number:4,
        question:'What is HTTP stands for?',
        answer:'Hyper Text Transfer Protocol',
        options:[
            'Hyper Text Markup Language','Hyper Text Transfer Protocol','Hyper Text Transfer Protocol Security','Markup Language'
        ]

    },
    {
        Number:5,
        question:'What is URL stands for?',
        answer:'Uniform Resourse Locator',
        options:[
            'Uniform Resourse Locator','Uniform Research Locator','Uniform Resourse Location','Universal Resourse Locator'
        ]

    }
]

// questions end

let Quiz_count=0;
function showQuiz(i){

    let que_text=document.querySelector(".que_text");
    let option_list=document.querySelector(".option_list");
    let question_tag=`<span>${questions[i].question}</span>`
    que_text.innerHTML=question_tag;
    option_tag=`<div class='option'>${questions[i].options[0]}
    <span></span>
    </div>
    <div class='option'>${questions[i].options[1]}
    <span></span>
    </div>
    <div class='option'>${questions[i].options[2]}
    <span></span>
    </div>
    <div class='option'>${questions[i].options[3]}
    <span></span>
    </div>
                    
    `
    option_list.innerHTML=option_tag;
    let optn=document.querySelectorAll(".option");
    for(i=0;i<optn.length;i++){
        optn[i].setAttribute("onclick",'optionselected(this)');
    }
}
// selected options
let score=0
function optionselected(ans){
    let userAns=ans.innerText;
    let correctAns=questions[Quiz_count].answer;
    let dis=document.querySelector('.dis');
    dis.style.display='block';
    if(correctAns==userAns){
        ans.classList.add('correct')
        score+=1
    }else{
        ans.classList.add('incorrect')
    }
    let option_list=document.querySelector(".option_list");
    let alloptn=option_list.children.length;
    for(i=0;i<alloptn;i++){
        option_list.children[i].classList.add('disabled');

    }
}

//next question section
let Next_que=document.querySelector(".next_btn");

console.log(questions.length);
Next_que.onclick=function(){
    let dis=document.querySelector('.dis');
    dis.style.display='none';
    if(Quiz_count < questions.length-1){
        Quiz_count++;
        showQuiz(Quiz_count);
        // clearInterval(counter)
        
        
    }
   
    else{
        showResult()
    }
    let total_que=document.querySelector('.total_que');
    let total_tag=`<p>${Quiz_count+1} of ${questions.length}`
     total_que.innerHTML=total_tag;
     

}

// bottom section 
let total_que=document.querySelector('.total_que');
let total_tag=`<p>${Quiz_count+1} of ${questions.length}`
total_que.innerHTML=total_tag;




//result page
let scoretext=document.querySelector('.score_text_update');
    console.log(scoretext);
function  showResult(){
    info_box.classList.remove("activeInfo")
    quiz_box.classList.remove("activeQuiz")
    result_box.classList.add("activeResult")
    

      scoretext.innerHTML=`<p>your score<span style='color:red; padding:10px'>${score}</span>out of 5</p>`;
}




//score page
let result_box=document.querySelector('.result_box');
let restart1=document.querySelector('.restart1')
let quit1=document.querySelector('.quit1')
quit1.onclick=function(){
    window.location.reload();
};
restart1.onclick=function(){
    window.location.reload();
};