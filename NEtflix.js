let forWard= document.querySelector('#forWard')
let backWard= document.querySelector('#backWard')
let slide= document.querySelector('#low-img')
let slide_2= document.querySelector('#low-img-1')
let slide_3= document.querySelector('#low-img-2')
let slide_4= document.querySelector('#low-img-3')
let forWard_1 = document.getElementById("forWard-2")
let backWard_1 = document.getElementById("backWard-1")
let search = document.getElementById("srch")
let icon = document.getElementById("icon")
let close = document.getElementById("close")
let close1 = document.getElementById("cls")
let anya = document.getElementById("anya")
let anyaImage = document.getElementById("anyaImage")
let anyaVideo= document.querySelector('#anya video')
let platBTN = document.getElementById("play")
let ep1= document.getElementById("ep1")
let Video= document.querySelector('.vd')


forWard.addEventListener("click",()=>{
  slide.style.left = "-111%";
});
backWard.addEventListener("click",()=>{
    slide.style.left = "0px";
})
function slideForward()
{
  slide_2.style.transform = "translate(-187%)"
}
function slideBackward()
{
  slide_2.style.transform = "translate(0%)"
}
function slideForward_1()
{
  slide_3.style.transform = "translate(-187%)"
}
function slideBackward_1()
{
  slide_3.style.transform = "translate(0%)"
}
function slideForward_2()
{
  slide_4.style.transform = "translate(-187%)"
}
function slideBackward_2()
{
  slide_4.style.transform = "translate(0%)"
}
icon.addEventListener("click",()=>{

   if(search.classList.contains("hide"))
   {
       search.classList.remove("hide");
   }
   else
   {
       search.classList.add("hide");
   }
})
close.addEventListener("click",()=>{
  if(anya.classList.contains("hide"))
    {
      anya.classList.remove("hide")
    }
    else
    {
      anya.classList.add("hide")
    }
})
anyaImage.addEventListener("click",()=>{
    if(anya.classList.contains("hide"))
    {
      anya.classList.remove("hide")
    }
    else
    {
      anya.classList.add("hide")
    }
})
close1.addEventListener("click",()=>{
  if(Video.classList.contains("hide"))
    {
      Video.classList.remove("hide")
      close1.style.display = "none"
      Video.pause();
    }
    else
    {
      Video.classList.add("hide")
      close1.style.display = "block"
    }
})
ep1.addEventListener("click",()=>{
  if(Video.classList.contains("hide"))
    {
      close1.style.display = "none"
      Video.classList.remove("hide")
    }
    else
    {
      Video.classList.add("hide")
      close1.style.display = "block"
    }
})