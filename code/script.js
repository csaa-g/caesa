
/* nav bar event */
const navBar = document.querySelector("#navBar");
const navigasi = document.querySelector(".nav-info");

navBar.addEventListener("click", () => {
    navigasi.classList.toggle("active")
});

// event || navbar hilang ketika di klik

document.addEventListener("click", function(e) {
    if (!navBar.contains(e.target) && !navigasi.contains(e.target)) {
        navigasi.classList.remove("active")
    }
});


/* search bar */
const search = document.querySelector("#search");
const searchDisplay = document.querySelector(".nav-search");

// event toggle class active
search.addEventListener("click", (e) => {
    searchDisplay.classList.toggle("active")
    e.preventDefault()
});

// event || search hilang ketika di klik
document.addEventListener("click", (e) => {
    if(!search.contains(e.target) && !searchDisplay.contains(e.target)) {
    searchDisplay.classList.remove("active")
    }
});



/* Shopping Cart */
const shoppingCart = document.querySelector("#shopping-cart-button");
const cartInfo = document.querySelector(".shopping-cart");


// event toggle class active
shoppingCart.addEventListener("click", (e) => {
    cartInfo.classList.toggle("active");
    e.preventDefault();
});

// event hilang ketika diklik 
document.addEventListener("click", (e) => {
    if(!shoppingCart.contains(e.target) && !cartInfo.contains(e.target)) {
        cartInfo.classList.remove("active");
    }
});



/* Modal Detail Box */
const modalButton = document.querySelectorAll(".modal-detail-button");
const modalBox = document.querySelector(".modal");
const closeButton = document.querySelector(".close-icon");

// event saat detail button di click
modalButton.forEach(btn => {
    btn.addEventListener("click", (e) => {
        modalBox.style.display = "flex"
        e.preventDefault()
    })
})

// event saat tombol close di klik 
closeButton.addEventListener("click", (e) => {
    modalBox.style.display = "none"
        e.preventDefault()
});

// event saat wilayah selain modalBox di klik
window.addEventListener("click", (e) => {
    if(e.target === modalBox) {
        modalBox.style.display = "none";
    }
})
