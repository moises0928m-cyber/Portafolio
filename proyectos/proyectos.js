let proyecto=[
    {
        nombre:"Practica 1",
        info:"Una pagina desplegable sobre mi",
        metodo:"Html  Css",
        url:"https://moises0928m-cyber.github.io/Funval-2025/",
        img:"../img/Pratica1.png"
    },
    {
        nombre:"Practica 2",
        info:"Recreacion de la pagina EpicGame",
        metodo:"Html  Css",
        url:"https://moises0928m-cyber.github.io/Funval-2025-2/",
        img:"../img/Practica2.png"
    },
     {
        nombre:"Practica 3",
        info:"Hero section sobre el oso de anteojos",
        metodo:"Html  TailwindCss",
        url:"https://moises0928m-cyber.github.io/Tarea4-/",
        img:"../img/Pratica3.png"
    },
     {
        nombre:"Practica 4",
        info:"Maqueta de una página responsive",
        metodo:"Html  TailwindCss",
        url:"https://moises0928m-cyber.github.io/funval//dia-8/tarde/index.html",
        img:"../img/Tailwind.png"
    },
     {
        nombre:"Proyecto final",
        info:"Desarrollar una aplicación web responsive ",
        metodo:"Html Js TailwindCss",
        url:"https://moises0928m-cyber.github.io/Proyecto-final/",
        img:"../img/final.png"
    },
]

let contenedor=document.querySelector("#cards")
proyecto.forEach((proyect)=>{
contenedor.innerHTML += `
<div class="flex  justify-center relative group cursor-pointer overflow-hidden text-gray-50 h-[100%] rounded-2xl hover:duration-700 duration-700 ">
  <div class="w-56 h-72 bg-cover bg-center text-gray-800 rounded-2xl " 
       style="background-image: url('${proyect.img}')">
   
  </div>
  <div class="absolute bg-slate-500 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500 rounded-xl ">
    <span class="text-amber-50 font-bold text-xs">
      ${proyect.metodo} 
      <a href="${proyect.url}" target="_blank" class="text-black">ver más..</a>
    </span>
    <span class="text-shadow-amber-50 font-bold text-3xl">${proyect.nombre}</span>
    <p class="text-shadow-amber-50">${proyect.info}</p>
  </div>
</div>
`;


})


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