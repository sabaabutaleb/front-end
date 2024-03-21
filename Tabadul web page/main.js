const containersEL= document.querySelectorAll(".container");
const btnsEl=document.querySelectorAll(".btn");

btnsEl.forEach(btn=> btn.addEventListener("click",function(e){
  e.preventDefault;
  const clickedBtn=e.target;
  if(!clickedBtn)return;
  containersEL.forEach(container=> container.classList.add("container--hidden"));
  document.querySelector(`.container--${clickedBtn.dataset.btn}`).classList.remove("container--hidden");
}))


