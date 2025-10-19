

let array=[
    {
nombre:"html",
imagen:"../img/html.PNG",
info:"En proceso de mejorar constantemente "
},
    {
nombre:"css",
imagen:"../img/css.png",
info:"En proceso de mejorar constantemente "
},
    {
nombre:"Tailwind.css",
imagen:"../img/tailwinds.png",
info:"En proceso de mejorar constantemente "
},
    {
nombre:"Js",
imagen:"../img/jas.png",
info:"En proceso de mejorar constantemente "
},
    {
nombre:"githud",
imagen:"../img/githuds.PNG",
info:"En proceso de mejorar constantemente "
},
]









let habilidades=document.querySelector("#habi")
array.forEach((name)=>{
habilidades.innerHTML+=`<!-- From Uiverse.io by Uncannypotato69 --> 
<div
  class="relative sm:flex h-[12em] w-[18em] sm:items-center sm:justify-center rounded-[1.5em]  p-[1.5em]"
  style="background-image: url('${name.imagen}'); background-size: cover; background-position: center;"
> 
  <div
    class="group absolute left-1/2 top-1/2 flex h-[3em] w-[3em] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[1.5em] border-[1px] border-[#ffffffaa] bg-[#8988885c] backdrop-blur-[6px] duration-[500ms] hover:h-[10em] hover:w-[16em] hover:rounded-[1.5em]"
  >
    <svg
      class="h-[1.5em] w-[1.5em] duration-300 group-hover:opacity-0"
      viewBox="0 0 48 48"
      fill="none"
      height="48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#a)">
        <path
          clip-rule="evenodd"
          d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z"
          fill-rule="evenodd"
          fill="#fff"
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h48v48H0z" fill="#fff"></path>
        </clipPath>
      </defs>
    </svg>
    <div
      class="items-left duration-600 absolute left-0 top-0 flex h-[10em] w-[16em] translate-y-[100%] flex-col justify-between p-[1.5em] font-nunito text-[hsl(0,0%,85%)] group-hover:translate-y-0"
    >
      <div class="items-left flex flex-col justify-center">
        <h1 class="text-[1.5em] font-bold text-black leading-[0.8em] mb-5">${name.nombre}</h1>
        <p class="text-[0.9em] font-light text-black">
          ${name.info}
        </p>
      </div>

     
    </div>
  </div>
 
</div>
`
})


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