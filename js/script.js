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


          const checkBox = document.getElementById('activities');
          const total = document.getElementById('activities-cost');

          let totalCost = 0;
          checkBox.addEventListener('change',(e) => {
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
const form = document.getElementsByTagName('form');


form.addEventListener('submit', () => {
const nameOutput = nameInput.value;

});

//Create another variable to store the results of testing the name value variable that was just created. Regex will be helpful, 
//and the regex course from this unit will demonstrate how to do this. 
//This variable will equal true if the test passes, and false otherwise.

//3. inside the event listener, use the name variable, dot notation, and the value property 
//to create a new variable that references the value of the “Name” field.
//I'm at the end of my rope with this one...can't find the answer anywhere.
//I tried targeting the name variable emptyField and adding .value with many different attempts, it's been more than 8 hours
//and still no results. what am I doing wrong???
