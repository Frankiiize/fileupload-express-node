const submitBtn = document.querySelector('button');
const inputPhoto = document.querySelector('input[type=file]');
const container = document.querySelector('.form-container ')
let span = document.createElement('span');
let img = document.createElement('img');

const disableBtn = () => {
  
  if(inputPhoto.files.length === 0){
    submitBtn.disabled = true;
    span.innerHTML = 'no hay archivos'
    container.append(span)
  }
  inputPhoto.addEventListener('change', () => {
    submitBtn.disabled = false
    span.innerHTML = 'archivo cargado'
    img.src = '../images/check.png';
    img.alt = 'ok icon'
    img.className = 'done-icon'
    container.append(span)
    container.append(img)
  })
}

window.addEventListener('load', () =>{
  disableBtn();
})