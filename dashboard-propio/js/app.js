const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const toggleOpen = document.querySelector(".toogle-open");
const toggleTheme = document.querySelector(".toggle-theme");


toggleTheme.addEventListener(('click'), () =>{
    body.classList.toggle('dark');
})

toggleOpen.addEventListener(('click'), () =>{    
    sidebar.classList.toggle("sidebar--close");
});