const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const menu=document.querySelector('.menu');const nav=document.querySelector('.header nav');if(menu){menu.addEventListener('click',()=>{nav.classList.toggle('open')});} 
