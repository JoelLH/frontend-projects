
const inputBill = document.getElementById('bill__input');
const radiosDiv =  document.getElementById('split__radios');
const tipDiv = document.getElementById('tip-div');
const inputTip = document.getElementById('tip__input');
const inputPeople = document.getElementById('people-input');
const resetBtn = document.getElementById('reset-btn')
let bill = 0;
let tip = 0;
let people = 0;

inputBill.addEventListener('change', function(e){
    bill = Number(e.target.value)  
    if(tip, bill, people){
        total(tip, bill, people)
    }
})

radiosDiv.addEventListener('change', function(){
    if(inputTip.value > 0){
        if(radiosDiv.querySelector(':checked')){
            radiosDiv.querySelector(':checked').checked = false;
        }
        tip = inputTip.value;
        if(tip && bill && people){
            total(tip, bill, people)
        }
    }else if(radiosDiv.querySelector(':checked')){
        tip = radiosDiv.querySelector(':checked').value
        if(tip && bill && people){
            total(tip, bill, people)
        }
    }
})

inputPeople.addEventListener('input', function(e){
    people = e.target.value;
        if(Number(people) <= 0){
            e.target.parentElement.classList.add('invalid');
        }else{
            e.target.parentElement.classList.remove('invalid');
        } 
        
        if(tip && bill && people > 0){
            total(tip, bill, people)
        }
    
})
resetBtn.addEventListener('click', function(){
    document.getElementById('tip-person').textContent = '$0.00';
    document.getElementById('total-person').textContent = '$0.00';
    if(radiosDiv.querySelector(':checked')){
        radiosDiv.querySelector(':checked').checked = false;
    }
    inputBill.value = '';
    inputTip.value = '';
    inputPeople.value = '';
    tip = 0;
    bill = 0;
    people = 0
})

function total(tip, bill, people){
        const percentage = (Number(tip) / 100);
        let total = (Number(bill) * percentage) + bill;
        let tipPerson = Number(bill) * (percentage) / people; 
        let totalPerson = total / people;
        document.getElementById('tip-person').textContent = '$' + tipPerson.toFixed(2);
        document.getElementById('total-person').textContent = '$' + totalPerson.toFixed(2);
}