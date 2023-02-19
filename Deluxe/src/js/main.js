var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


let flatList = document.querySelector('.flats__row');
let flatBtns = document.querySelectorAll('.flats__btn');

let allBtn = document.querySelector('.flats__filter-all');
let homeBtn = document.querySelector('.flats__filter-home');
let commercBtn = document.querySelector('.flats__filter-commercial');


console.log(flatBtns);
flatBtns.forEach((btn, idx)=>{
    btn.addEventListener(('click', ()=>{
        flatBtns.forEach((btn2, index)=>{
            idx === index ? btn.classList.add('flats__btn_active') : btn.classList.remove('flats__btn_active');
        })
    }))
})


let url = 'http://localhost:3030/flats';


const getFlats = ()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((res)=> {
        res.forEach(item => {
            flatList.innerHTML += `
            <div class="flats__card">
                    <img class="flats__card-img" src="${item.image}" alt="dizayn-interera-astana">
                    <h3 class="flats__card-title">${item.title}</h3>
                    <p class="flats__card-desc">${item.subtitle}</p>
            </div>
            `
        });
    })
    .catch((err)=>console.log(err))
}


getFlats();