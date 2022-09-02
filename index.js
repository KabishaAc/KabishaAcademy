let navbutton = document.getElementById('shrinknav')
let navbar = document.getElementById('navbar')
let closenav = document.getElementById('closenav')
let span1 = document.getElementById('span1')
let span2 = document.getElementById('span2')
let span3 = document.getElementById('span3')
let shrink = true
const navhandler = ()=>{
if (shrink == true){
    span1.classList.add('rotate-[-45deg]')
    span1.classList.add('translate-y-5')
    span1.classList.add('animate-crossmaker')
    span2.classList.add('invisible')
    span3.classList.add('rotate-[45deg]')
    navbar.classList.add('bg-white')
    closenav.classList.remove('hidden')

    shrink = false
    
}

else{
    span1.classList.remove('rotate-[-45deg]')
    span1.classList.remove('translate-y-5')
    span2.classList.remove('invisible')
    span3.classList.remove('rotate-[45deg]')
    navbar.classList.remove('bg-white')
    closenav.classList.add('hidden')
    span1.classList.remove('animate-crossmaker')



    shrink = true

    
    
}

}
navbutton.addEventListener('click' , navhandler)