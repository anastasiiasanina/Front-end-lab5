const fullName = document.getElementById('name').value;
const cardNumber = document.getElementById('card').value;
const faculty = document.getElementById('faculty').value;
const birthDate = document.getElementById('birth').value;
const address = document.getElementById('address').value;
const submitBtn = document.getElementById('submit');

/*const regName = /F/;
const regCard = /F/;
const regFaculty = /F/;
const regDate = /F/;
const regAddress = /F/;*/

const changeBorder = (el, color) => {
  el.style.border = `1px solid ${color}`;
}

const validate = () => {

}

submitBtn.addEventListener('click', (e) => validate());