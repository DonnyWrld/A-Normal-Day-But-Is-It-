let optionone = document.querySelector('.option-one');
let optiononescreen = document.querySelector('.option-one-screen');
let optiononeend = document.querySelector('.option-one-end');
let optiontwo = document.querySelector('.option-two');
let optiontwoscreen = document.querySelector('.option-two-screen');
let optiontwoend = document.querySelector('.option-two-end');
let storyopening = document.querySelector('.story-opening');
let optiononenext = document.querySelector('.option-one-next');
let optiontwonext = document.querySelector('.option-two-next');
optionone.onclick = function(){
optiononescreen.style.display = 'block';
  storyopening.style.display= 'none'
  optionone.style.display='none'
  optiontwo.style.display='none'
}

optiontwo.onclick = function(){
  optiontwoscreen.style.display = 'block'
  storyopening.style.display= 'none'
   optionone.style.display='none'
  optiontwo.style.display='none'
}

optiononenext.onclick = function(){
  optiononeend.style.display = 'block'
  optiontwonext.style.display = 'none'
  optiononenext.style.display = 'none'
}

optiontwonext.onclick = function(){
  optiontwoend.style.display = 'block'
  optiontwonext.style.display = 'none'
}