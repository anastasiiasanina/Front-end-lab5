const fullName = document.getElementById('name');
const cardNumber = document.getElementById('card');
const faculty = document.getElementById('faculty');
const birthDate = document.getElementById('birth');
const address = document.getElementById('address');
const submitBtn = document.getElementById('submit');
const outputInfo = document.querySelector('.output');

const regName = /^[А-ЯҐЄІЇ]{1}[а-яґєії]+\s{1}([А-ЯҐЄІЇ]{1}\.){2}$/;
const regCard = /^[А-ЯҐЄІЇ]{2}\s\№[0-9]{6}$/;
const regFaculty = /^[А-ЯҐЄІЇ]{4}$/;
const regDate = /^([0-9]{2}\.){2}[0-9]{4}$/;
const regAddress = /^м\.\s[А-ЯҐЄІЇ]{1}[а-яґєії]+$/;

const changeBorder = (el, color) => {
  el.style.border = `1px solid ${color}`;
}

const checkData = (el, regExp, errorName, errors) => {
  if(!regExp.test(el.value)) {
    changeBorder(el, 'red');
    errors.push({el: errorName});
    alert(errorName);
  } else {
    changeBorder(el, 'green');
  }
}

const validate = () => {
  let errors = [];
  outputInfo.style.display = 'none';

  checkData(fullName, regName, "Введіть ПІБ у форматі ТТТТТТ Т.Т.", errors);
  checkData(faculty, regFaculty, "Введіть назву факультету у форматі ТТТТ", errors);
  checkData(cardNumber, regCard, "Введіть номер карти у форматі ТТ №ЧЧЧЧЧЧ", errors);
  checkData(birthDate, regDate, "Введіть ДН у форматі ЧЧ.ЧЧ.ЧЧЧЧ", errors);
  checkData(address, regAddress, "Введіть місто у форматі м. ЧЧЧЧЧЧ", errors);

  let output = `
    <p><span>ПІБ:</span>${fullName.value}</p>
    <p><span>Факультет:</span>${faculty.value}</p>
    <p><span>ID-card:</span>${cardNumber.value}</p>
    <p><span>Дата народження:</span>${birthDate.value}</p>
    <p><span>Адреса:</span>${address.value}</p>
  `;

  if(errors.length == 0) {
    outputInfo.style.display = 'block';
    outputInfo.insertAdjacentHTML('beforeend', output);
  }
}

submitBtn.addEventListener('click', (e) => validate());