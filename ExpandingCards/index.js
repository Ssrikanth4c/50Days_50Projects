const panels= document.getElementsByClassName('panel');
console.log(panels)
Object.values(panels).forEach(panel => {
    panel.addEventListener('click',()=>{
        handleRemoveClassName();
        panel.classList.add('active');
    })
});
const handleRemoveClassName=()=>{
    Object.values(panels).forEach(panel=>{
        panel.classList.remove('active');
    })
}