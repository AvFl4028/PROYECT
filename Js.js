const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

yesBtn.addEventListener('click',function(){
    alert('XD');
})
noBtn.addEventListener('mouseover',function(){
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform','translate(-$(randomX)%,-$(randomX)%)');
})