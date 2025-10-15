const menuButton = document.querySelector('#menu-b');
const menuItems  = document.querySelector('#menu');
const menuButtonSpan = document.querySelectorAll('#menu-b span')
const links = document.querySelectorAll('#menu a')
 /* abrir menu */

menuButton.addEventListener('click', ()=> {
  menuItems.classList.toggle('hidden');
});
links.forEach((link)=>{
  link.addEventListener('click', ()=>{     
    menuItems.classList.add('hidden');
    menuButtonSpan.forEach((span)=>{
      span.classList.remove('animado');   
    });
  });
});

window.onresize = function (){
  let w = window.outerWidth;
  if(w > 768){ 
    menuItems.classList.add('hidden');
    menuButtonSpan.forEach((span)=>{
      span.classList.remove('animado');
    });
  }
};

 /* modo black */
 const darkButton= document.querySelector('#darkButton')
darkButton.addEventListener('click', function() {
 
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});