const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
const modal = document.querySelector("#modal");

openModal.addEventListener('click', ()=>{
	modal.show();
})

closeModal.addEventListener('click', ()=>{
	modal.close();
})