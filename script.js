const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', e=>{
  e.stopPropagation();
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', ()=>{
  menu.style.display = 'none';
});
