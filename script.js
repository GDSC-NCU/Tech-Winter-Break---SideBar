
const menuToggle = document.querySelector(".menu-toggle");
const navbar= document.querySelector(".nav");

menuToggle.onclick= ()=>{
    navbar.classList.toggle('open');
}

const listItem= document.querySelectorAll(".list-item");

listItem.forEach( item =>{
        item.onclick=()=>{
            listItem.forEach(item=> item.classList.remove('active'));
            item.classList.add("active");
        }
    }
)