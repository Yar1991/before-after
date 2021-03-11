// *** variables *** //

const wrapper = document.querySelector('.wrapper');
const beforeImg = document.querySelector('.img-box-before');
const afterImg = document.querySelector('.img-box-after');
const grab = document.querySelector('.grab')
const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');
const leftImg = document.querySelector('.slide-img-before');
const rightImg = document.querySelector('.slide-img-after');
let slideCounter = 0;

const images = [
  ['./img/before.jpg', './img/after.jpg'],
  ['./img/before2.jpg', './img/after2.jpg'],
  ['./img/before3.jpg', './img/after3.jpg'],
  ['./img/before4.jpg', './img/after4.jpg'],
  ['./img/before5.jpg', './img/after5.jpg'],
  ['./img/before6.jpg', './img/after6.jpg'],
  ['./img/before7.jpg', './img/after7.jpg']
];

//  *** events *** //

grab.addEventListener('mousedown', ()=>{
  wrapper.addEventListener('mousemove', move);
  grab.addEventListener('mouseup', remove);
})

leftBtn.addEventListener('click', leftSlide);
rightBtn.addEventListener('click', rightSlide);



// *** functions *** //

// --- drag line --- //

function move(e){
  e.preventDefault();
  let layerWidth = e.layerX;
  grab.style.transform = `translateX(${layerWidth}px)`;
  beforeImg.style.width = `${layerWidth}px`; 
  if(layerWidth < 30){
    grab.style.transform = `translateX(0)`;
    beforeImg.style.width = `0`;
  }
  if(layerWidth > wrapper.offsetWidth - 30){
    grab.style.transform = `translateX(${wrapper.offsetWidth}px)`;
    beforeImg.style.width = `${wrapper.offsetWidth}px`;
  }
  return layerWidth;
}

function remove(){
  wrapper.removeEventListener('mousemove', move);
  grab.style.transform = `${move()}px`;
  beforeImg.style.width = `${move()}px`; 
}

// --- arrow buttons --- //


function leftSlide(){
  slideCounter--;
  if(slideCounter < 0){
    slideCounter = images.length - 1;
  }
  anime({
    targets: wrapper,
    translateX: [5, 0],
    opacity: [0.8, 1],
    duration: 500,
    easing: 'easeInOutQuad'
  })
  leftImg.src = images[slideCounter][0];
  rightImg.src = images[slideCounter][1];
}

function rightSlide(){
  slideCounter++;
  if(slideCounter === images.length){
    slideCounter = 0;
  }
  anime({
    targets: wrapper,
    translateX: [-5, 0],
    opacity: [0.8, 1],
    duration: 500,
    easing: 'easeInOutQuad'
  })
  leftImg.src = images[slideCounter][0];
  rightImg.src = images[slideCounter][1];
}
