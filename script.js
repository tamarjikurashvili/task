const initSlider = () => {
    const imgList = document.querySelector(".sponsor-menu__wrapper  .image-list ");
    const slideButtons = document.querySelectorAll(".sponsor-menu__wrapper .slide-button ");


    slideButtons.forEach (button => {
        button.addEventListener("click", () =>{
            const direction = button.id === "arrow-button__first" ? -1 : 1;
            const scrollAmount = imgList.clientWidth * direction;
            imgList.scrollBy({left: scrollAmount, behavior: "smooth" }) ;
        })
    })

    
}
window.addEventListener("load", initSlider);



const dropdown = document.querySelector(".question-box");

const list = document.querySelector(".question-box__list");

const selected = document.querySelector(".question-content__selected");

dropdown.addEventListener("click" , () =>{
    list.classList.toggle("show")
})


const dropdown1 = document.querySelector(".question-bo");

const list1 = document.querySelector(".question-box__lis");

const selected1 = document.querySelector(".question-content__selecte");

dropdown1
.addEventListener("click" , () =>{
    list1.classList.toggle("sho")
})



const dropdowni = document.querySelector(".question-boxi");

const listi = document.querySelector(".question-box__listi");

const selectedi = document.querySelector(".question-content__selectedi");

dropdowni.addEventListener("click" , () =>{
    listi.classList.toggle("showi")
})
