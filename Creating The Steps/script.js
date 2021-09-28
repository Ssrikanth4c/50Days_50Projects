const progress=document.querySelector('.progress');
const prev= document.querySelector('.prev');
const next= document.querySelector('.next');
const circle= document.querySelectorAll('.circle');
const active= document.querySelectorAll('.active');
let step=1;
const updateProgress=()=>{
    let progressPercentage=(step-1)/(circle.length-1)
    progress.style.width=`${progressPercentage*100}%`
}
const handleNext=()=>{
    if(step === circle.length){
        step= circle.length
    }else{
        circle[step].classList.add('active')
        step++;
    }
    // console.log(step, circle.length);
    /**
     *  enable or disable buttons
     *   
     * */
    if(step>1){
        prev.disabled=false;
    } 
    if(step==1){
        prev.disabled=true
    }
    if(step<circle.length){
        next.disabled=false
    }else{
        next.disabled=true;
    }
    updateProgress();
}
const handlePrev=()=>{
    console.log({step})
    if(step===1){
         prev.disabled=true;
    }else{
        next.disabled=false;
        step--
        circle[step].classList.remove('active')
    }
    updateProgress()
}
next.addEventListener('click', handleNext);
prev.addEventListener('click', handlePrev)