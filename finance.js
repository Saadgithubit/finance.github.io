var incomeAmount = 0
var expenseAmount = 0

function addIncome(){
    var discription = document.getElementById('discription')
    var amount = document.getElementById('amount')

    var table = document.getElementById('table')
    var tableRow = document.createElement('tr')
    var tableDiscription = document.createElement('td')
    var tableAmount = document.createElement('td')
    var tableType = document.createElement('td')
    tableDiscription.innerHTML = discription.value
    tableAmount.innerHTML =  amount.value
    incomeAmount = (+incomeAmount) + (+amount.value)
    tableType.innerHTML = 'Income'
    tableRow.append(tableDiscription)
    tableRow.append(tableAmount)
    tableRow.append(tableType)
    table.append(tableRow)
    discription.value = ''
    amount.value = ''
    table.className = ''
    var btn = document.getElementById('cal')
    btn.className = ''
}

function addExpense(){
    var discription = document.getElementById('discription')
    var amount = document.getElementById('amount')

    var table = document.getElementById('table')
    var tableRow = document.createElement('tr')
    var tableDiscription = document.createElement('td')
    var tableAmount = document.createElement('td')
    var tableType = document.createElement('td')
    tableDiscription.innerHTML = discription.value
    tableAmount.innerHTML =  amount.value
    expenseAmount = (+expenseAmount) + (+amount.value)
    tableType.innerHTML = 'Expense'
    tableRow.append(tableDiscription)
    tableRow.append(tableAmount)
    tableRow.append(tableType)
    table.append(tableRow)
    discription.value = ''
    amount.value = ''
    table.className = ''
    var btn = document.getElementById('cal')
    btn.className = ''
    
}

function calculate(){
    var table = document.getElementById('table')
    var tableRow = document.createElement('tr')
    var tableHeading = document.createElement('th')
    var tableData = document.createElement('td')
   tableHeading.innerHTML = 'Total'
    var total;
    if(incomeAmount < expenseAmount){
        total = expenseAmount - incomeAmount
        tableData.innerHTML = total
    }
    else{
        total = incomeAmount - expenseAmount
        tableData.innerHTML = total
    }
    tableRow.append(tableHeading)
    tableRow.append(tableData)
    table.append(tableRow)


}