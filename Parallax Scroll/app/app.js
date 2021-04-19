let moon = document.getElementById('moon')
let stars = document.getElementById('stars')
let front = document.getElementById('f-mountains')
let back = document.getElementById('b-mountains')
let btn = document.getElementById('btn')


window.addEventListener('scroll',()=>{
    let value = window.scrollY
    stars.style.left = value*0.25 + 'px'
    moon.style.top = value * 1.05 + 'px'
    back.style.top = value * 0.25 + 'px'
    btn.style.marginTop = value * 1.25 + 'px'
})