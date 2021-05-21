document.getElementById("nav__itemssign").addEventListener("click",function(){
    document.querySelector(".modal").style.display = "flex"
});
document.getElementById("btn-out").addEventListener("click",function(){
    document.querySelector(".modal").style.display = 'none'
});

document.getElementById("nav__itemslogin").addEventListener("click",function(){
    document.querySelector(".modal1").style.display = "flex"
});
document.getElementById("btn-out1").addEventListener("click",function(){
    document.querySelector(".modal1").style.display = "none"
});
document.getElementById("btn-sign").addEventListener("click",function(){
    document.querySelector(".modal1").style.display = "none"
    document.querySelector(".modal").style.display = "flex"
});
document.getElementById("btn-login").addEventListener("click",function(){
    document.querySelector(".modal").style.display = "none"
    document.querySelector(".modal1").style.display = "flex"
});
document.querySelector('.btn--cart').addEventListener("click",function(){
    window.location='cart.html'
});
document.querySelector('.search__list-history').onmousedown=function(e){
    e.preventDefault();
};
document.querySelector('.heading__main').addEventListener('click',function(){
    window.location='index.html'
})
// document.querySelector('.heading__main').addEventListener("click",function(){
//     window.location='index.html'
// });