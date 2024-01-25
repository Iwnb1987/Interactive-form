  //Adding a name variable to manipulate later
  const nameInput = document.getElementById('name');
  const eField = document.querySelector('input[name=user-name]').focus();


//variable Ids targeting the drop down menu and the job roles
  const select = document.querySelector('#title');
  const jobRole = document.getElementById('other-job-role');
  jobRole.style.display = 'none';

// this listener will hide the text field 'other job role' if anything besides 'other' is selected
//in the job role drop down menu.
  select.addEventListener('change', (e) => {
        if(select.value === 'other') {
            jobRole.style.display = 'block';
            return;
            }
              jobRole.style.display = 'none';
            });

//DOM manipulation Variables for the t-shirts
  const bluePrint = document.querySelector('#design');
  const shade = document.getElementById('color');
  const hue = document.querySelectorAll('option[data-theme]');
  shade.style.display = 'none';

  bluePrint.addEventListener('change', (e) => { //When a design is selected the color block appears.
    for (let i = 0; i < hue.length; i++) {  //hue matches i heart JS and JS puns with their respective colors
             if (bluePrint.value !== hue[i].getAttribute('data-theme')) {
                hue[i].hidden = true; 
                shade.style.display = 'block'; 
             } else {
                 hue[i].hidden = false;
                 }
              }
          });       //I couldn't figure out set and removeAttribute, so I used style.display
          

//Dom Manipulation variables for the activities section
  const checkBox = document.querySelectorAll('input[type=checkbox]');
  const checker = document.querySelector('#activities');
  const total = document.getElementById('activities-cost');

   let totalCost = 0;   //should the cost change from zero to the cost of an activity, it will add it to the total
   checker.addEventListener('change',(e) => {     
   let updateCost = parseInt(e.target.getAttribute("data-cost"));   
           
    if(!e.target.checked) {      //if an activity is unselected, the price will be reduced by the initial cost
    updateCost = -1 * updateCost;
    } 
    if(e.target.type ==='checkbox') {
    totalCost += updateCost;
    }
    total.innerText = `Total Cost: $ ${totalCost}`;    //I added an extra $ here because it disappeared once the total cost updated
     });


//DOM manipulaton variables for payment options
const cC = document.querySelector('.credit-card');
const pay = document.getElementById('paypal').style.display = 'none';
const payment = document.querySelector('#payment');
const crypto = document.getElementById('bitcoin').style.display = 'none';

//again, I'm struggling with setAttribute
const collect = document.getElementById("payment").children[1].setAttribute = 'selected';

//this change will display effect the i'm going to pay with drop down menu
//and hide the credit card tet field if paypal or bitcoin are selected
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


//DOM variables to manipulate text fields
const email = document.querySelector('input[type=email]');
const cardNo = document.querySelector('input[id=cc-num]');
const zip = document.querySelector('input[id=zip]');
const cvv = document.querySelector('input[id=cvv]');
const form = document.getElementById('read');

//Before you can submit the form, these variables check for validation in the text fields
form.addEventListener('submit', (e) => {
 const isNameValid = () => /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameInput.value); 
 const isEmailValid = () => /^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value);
 const isCreditLegit = () => /^\d{13,16}$/.test(cardNo.value);
 const isZipValid = () => /^\d{5}$/.test(zip.value);
 const isCvvValid = () => /^\d{3}$/.test(cvv.value);

 //This awesome function checks for correct format in the text field 
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
  validator(nameInput, isNameValid);  //if nameInput.value matches isNameValid, a green checkmark will appear if you hit enter, etc.
  validator(email, isEmailValid);
  validator(cardNo, isCreditLegit);
  validator(zip, isZipValid);
  validator(cvv, isCvvValid);
  });


//focuses and blurs the activity checkboxes on click
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
