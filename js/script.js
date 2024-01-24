const nameInput = document.querySelector('input[id=name]');
const eField = document.querySelector('input[name=user-name]').focus();


// this listener will hide the text field 'other job role' if anything besides 'other' is selected
const select = document.querySelector('#title');
const jobRole = document.getElementById('other-job-role');
jobRole.style.display = 'none';
select.addEventListener('change', (e) => {
        if(select.value === 'other') {
            jobRole.style.display = 'block';
            return;
            }
              jobRole.style.display = 'none';
            });


  const bluePrint = document.querySelector('#design');
  const shade = document.querySelector('#color');
  const hue = document.querySelectorAll('option[data-theme]');
shade.style.display = 'none';

  bluePrint.addEventListener('change', (e) => {
    for (let i = 0; i < hue.length; i++) {
             if (bluePrint.value !== hue[i].getAttribute('data-theme')) {
                hue[i].hidden = true; 
                shade.style.display = 'block';
             } else {
                 hue[i].hidden = false;
                 }
              }
          });


          const checkBox = document.querySelectorAll('input[type=checkbox]');
          const checker = document.querySelector('#activities');
          const total = document.getElementById('activities-cost');

          let totalCost = 0;
          checker.addEventListener('change',(e) => {
            let updateCost = parseInt(e.target.getAttribute("data-cost"));
           
               if(!e.target.checked) {
                 updateCost = -1 * updateCost;
               } 
               if(e.target.type ==='checkbox') {
                totalCost += updateCost;
              }

              total.innerText = `Total Cost: $ ${totalCost}`;
                    });



const cC = document.querySelector('.credit-card');
const pay = document.getElementById('paypal').style.display = 'none';
const payment = document.querySelector('#payment');
const crypto = document.getElementById('bitcoin').style.display = 'none';


const collect = document.getElementById("payment").children[1].setAttribute = 'selected';

payment.addEventListener('change', (e) => {
const divElement = e.target.value;
if (divElement === 'credit-card') {
  document.getElementById('credit-card').style.display = 'block';
  document.getElementById('paypal').style.display = 'none';
  document.getElementById('bitcoin').style.display = 'none';
} else if (divElement === 'paypal') {
  document.getElementById('credit-card').style.display = 'none';
  document.getElementById('paypal').style.display = 'block';
  document.getElementById('bitcoin').style.display = 'none';
} else if (divElement === 'bitcoin') {
  document.getElementById('credit-card').style.display = 'none';
  document.getElementById('paypal').style.display = 'none';
  document.getElementById('bitcoin').style.display = 'block';
}

 });



const email = document.querySelector('input[type=email]');
const cardNo = document.querySelector('input[id=cc-num]');
const zip = document.querySelector('input[id=zip]');
const cvv = document.querySelector('input[id=cvv]');
const form = document.getElementById('read');
console.log(form);



form.addEventListener('submit', (e) => {
 const isNameValid = () => /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameInput.value); // Tests that there is at least a first name, and allows for a middle and last name.
 const isEmailValid = () => /^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value);
 const isCreditLegit = () => /^\d{13,16}$/.test(cardNo.value);
 const isZipValid = () => /^\d{5}$/.test(zip.value);
 const isCvvValid = () => /^\d{3}$/.test(cvv.value);

 
const validator = (inputElement, validationFunction) => {
if(validationFunction()) {
  inputElement.closest('label').className = 'valid';
  inputElement.nextElementSibling.style.display = 'none';
} else {
  e.preventDefault();
  inputElement.closest('label').className = 'error';
  inputElement.nextElementSibling.style.display = 'block';
}
};
validator(nameInput, isNameValid);
validator(email, isEmailValid);
validator(cardNo, isCreditLegit);
validator(zip, isZipValid);
validator(cvv, isCvvValid);
});



 const forBox = checkBox;
for(let i = 0; i < forBox.length; i++) {
forBox[i].addEventListener('focus', (e) => {
forBox[i].classList.add('focus');
forBox[i].parentElement.classList.add('focus');
});

forBox[i].addEventListener('blur', (e) => {
  forBox[i].classList.remove('focus');
  forBox[i].parentElement.classList.remove('focus');
  });
};
