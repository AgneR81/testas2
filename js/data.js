const account = [
    { month: 10, income: 150 },
    { month: 1, income: 200, expense: 50 },
    { month: 3, income: 450, expense: 200 },
    { month: 7, expense: 50 },
    { month: 2, income: 50 },
    { month: 5, income: 150, expense: 50 },
    { month: 9, income: 700, expense: 400 },
    { month: 4, income: 10, expense: 300 },
    { month: 6, expense: 50 },
    { month: 11, income: 150, expense: 30 },
    { month: 8, income: 450, expense: 120 },
    { month: 12, expense: 200 }
];
console.log(account[3].expense);


const months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjutis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];

let table = document.querySelector('.table-content');

console.log(document.querySelector('.table-content'));
let revenue = document.getElementById('revenue');
let cost = document.getElementById('cost');
let balance = document.getElementById('balance');

let HTML = '';

function buildTable(month, data) {

    const info = [];
    for(let i = 0; i < data.length; i++) {
        for(let x = 0; x < data.length; x++) {
            if(data[x].month === i+1) {
                info.push(data[x]);
            }
        }
    }
    
    data = info;
    

    for (let i = 0; i < data.lenght; i++) {
        
         HTML += `<div class="table-row">
                    <div class="cell">${i + 1}</div>
                    <div class="cell">${month[i]}</div>
                    <div class="cell">${data[i].income} Eur</div>
                    <div class="cell">${data[i].expense} Eur</div>
                    <div class="cell">${data[i].income - data[i].expense} Eur</div>
                </div>`;
        
    }

    table.innerHTML += HTML;
}

buildTable(months, account);

