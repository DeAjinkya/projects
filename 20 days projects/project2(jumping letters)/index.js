const letters = document.querySelectorAll(".letters span");

letters.forEach((letter)=>{
    letter.addEventListener('click',(event)=>{
        event.target.classList.add("active");
    });
});