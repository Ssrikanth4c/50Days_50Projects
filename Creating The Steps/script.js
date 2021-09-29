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
    circle[step].classList.add('active');
    step++;
    if(step===circle.length){
        next.disabled=true;
    }else{
        prev.disabled=false;
    }
    updateProgress();
}
const handlePrev=()=>{
   step--;
   if(step===1){
       prev.disabled=true;
       circle[step].classList.remove('active');
   }else{
       circle[step].classList.remove('active');
       next.disabled=false;
   }
    updateProgress()
}
next.addEventListener('click', handleNext);
prev.addEventListener('click', handlePrev)