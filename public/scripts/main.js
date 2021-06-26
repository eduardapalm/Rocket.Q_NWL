import Modal from './modal.js'

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal .buttons button');
const checkButtons = document.querySelectorAll(".actions a.check");

function handleClick(event, check = true){
  const text = check ? "Marcar como Lida" : "Excluir";
  const slug = check ? "check" : "delete";
  const roomId = document.querySelector("#room-id").dataset.id;
  const questionId = event.target.dataset.id;
  
  const form = document.querySelector(".modal form");
  form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`)
  
  modalTitle.innerHTML = `${text}`;
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`;
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}!`;
  check ? modalButton.classList.remove("red") : modalButton.classList.add("red");

  event.preventDefault();
  modal.open();
}

checkButtons.forEach(button => {
  button.addEventListener("click", handleClick);
});

const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach(button => {
  button.addEventListener("click", (event) => handleClick(event, false));
})