let superresult = document.querySelector(".superresult");
let submitbttn = document.querySelector(".bttn");
let rollnumber = document.querySelector(".roll");
let naam = document.querySelector(".naam");
let studentname = document.querySelector(".studentname");
let RegistrationNo = document.querySelector(".RegistrationNo");
let answersheet = document.querySelector(".answersheet");
let popup = document.querySelector(".popup");
let main = document.querySelector(".main");





submitbttn.addEventListener('click', () => {
    if(naam.value===""){
        let newelement = document.createElement("ul");
        newelement.innerHTML ='Enter Your Name';
        popup.appendChild(newelement);
        
        

    }
    else{

       
   rollnumber.innerHTML=RegistrationNo.value;
    studentname.innerHTML=naam.value;
    superresult.style.display='unset';
    main.style.display='none';
    answersheet.style.display='unset';


  
    
    
}
})



const tabs = { value: [] };

function getRandomValue() {
  return Math.floor(Math.random() * 30) + 51; // 51 to 80
}

document.querySelector('.bttn').addEventListener('click', () => {
  const cells = document.querySelectorAll('.tabs');
  cells.forEach((cell, index) => {
    const randomVal = getRandomValue();
    tabs.value[index] = randomVal;
    cell.textContent = randomVal;
  });

  let GEresult1 = parseFloat(document.getElementById('GEresult1').textContent) || 0;
  let GEresult2 = parseFloat(document.getElementById('GEresult2').textContent) || 0;
  const GEresultsum = GEresult1 + GEresult2;
  document.getElementById('GEresultTotal').textContent = GEresultsum;




  let PYresult1 = parseFloat(document.getElementById('PYresult1').textContent) || 0;
  let PYresult2 = parseFloat(document.getElementById('PYresult2').textContent) || 0;
  let PYresult3 = parseFloat(document.getElementById('PYresult3').textContent) || 0;
  const PYresultsum = PYresult1 + PYresult2 + PYresult3;
  document.getElementById('PYresultTotal').textContent = PYresultsum;




  let CHresult1 = parseFloat(document.getElementById('CHresult1').textContent) || 0;
  let CHresult2 = parseFloat(document.getElementById('CHresult2').textContent) || 0;
  let CHresult3 = parseFloat(document.getElementById('CHresult3').textContent) || 0;
  const CHresultsum = CHresult1 + CHresult2 + CHresult3;
  document.getElementById('CHresultTotal').textContent = CHresultsum;



  let BIresult1 = parseFloat(document.getElementById('BIresult1').textContent) || 0;
  let BIresult2 = parseFloat(document.getElementById('BIresult2').textContent) || 0;
  let BIresult3 = parseFloat(document.getElementById('BIresult3').textContent) || 0;
  const BIresultsum = BIresult1 + BIresult2 + BIresult3;
  document.getElementById('BIresultTotal').textContent = BIresultsum;



  let HCresult1 = parseFloat(document.getElementById('HCresult1').textContent) || 0;
  let HCresult2 = parseFloat(document.getElementById('HCresult2').textContent) || 0;
  let HCresult3 = parseFloat(document.getElementById('HCresult3').textContent) || 0;
  const HCresultsum = HCresult1 + HCresult2 + HCresult3;
  document.getElementById('HCresultTotal').textContent = HCresultsum;


  
  document.getElementById('totalmarks').textContent = HCresultsum + GEresultsum + PYresultsum + CHresultsum + BIresultsum;
});





document.querySelector('.print').addEventListener('click', () => {
  window.print();
});

// document.addEventListener("DOMContentLoaded", () => {
//   let printLink = document.getElementById("print");
//   let container = document.getElementById("container");

//   printLink.addEventListener("click", event => {
//       event.preventDefault();
//       printLink.style.display = "unset";
//       window.print();
//   }, false);

//   container.addEventListener("click", event => {
//       printLink.style.display = "unset";
//   }, false);

// }, false);