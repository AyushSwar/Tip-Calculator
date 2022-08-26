const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById("tipInput")
const numberOfPeopleDiv = document.getElementById("numberOfPeople")
const perPersonTotalDiv = document.getElementById("perPersonTotal")

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// Calculate the total bill per person 

const calculateBill = ()=> {
    const bill = Number(billInput.value)
    const tipPercentage = Number((tipInput.value)/100)
    const tipAmount = bill * tipPercentage
    const total = tipAmount + bill
    const perPersonTotal = total / numberOfPeople
    perPersonTotalDiv.innerText =  `rs.${perPersonTotal.toFixed(2)}`
}


// Split the bill between more people  +

const increasePeople = () => {
    numberOfPeople  += 1 
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}

// Split the bill between fewer people -

const decreasePeople = () => {
    if (numberOfPeople <= 1){
       throw 'Hey ! You cannot have less than 1 person !'
        return 
    }
    numberOfPeople -= 1
    numberOfPeopleDiv.innerHTML = numberOfPeople
    calculateBill()
}