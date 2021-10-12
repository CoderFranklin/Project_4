//Declared state of form
let state = { //Input fields from index.html.
  price: getNumber(document.querySelectorAll('[name="price"]')[0].value),
  loan_years: document.querySelectorAll('[name="loan_years"]')[0].value,
  down_payment: document.querySelectorAll('[name="down_payment"]')[0].value,
  interest_rate: document.querySelectorAll('[name="interest_rate"]')[0].value,
  property_tax: document.querySelectorAll('[name="property_tax"]')[0].value,
  home_insurance: document.querySelectorAll('[name="home_insurance"]')[0].value,
  hoa: document.querySelectorAll('[name="hoa"]')[0].value,
};
//Declared variables
let totalLoan,
  totalMonths,
  monthlyInterest,
  monthlyPrincipalInterest,
  monthlyPropertyTaxes,
  monthlyHomeInsurance,
  monthlyHOA,
  labels = ["Principal & Interest", "Property Tax", "Home Insurance", "HOA"], // Will show in the pie chart.
  backgroundColor = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 159, 64, 0.2)",
    "rgba(255, 205, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(201, 203, 207, 0.2)"
  ];
borderColor = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 159, 64, 0.2)",
    "rgba(255, 205, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(201, 203, 207, 0.2)"
];
//Removes characters and returns only numbers
function getNumber(str) {
  return Number(str.replace(/[^0-9\.-]+/g, ""));
}
//Initialize chart js instance
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: [
                monthlyPrincipalInterest,
                monthlyPropertyTaxes,
                monthlyHomeInsurance,
                monthlyHOA,
            ],
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1
        }]
    },
});
//Turning off the animations
myChart.options.animation = false;

//Add event lister to inputs
let i,
inputTexts = document.getElementsByClassName('form-group__textInput');

for (i = 0; i < inputTexts.length; i++){ //This loop is for multiple forms.
    //console.log(inputTexts[i])
    inputTexts[i].addEventListener('input', updateInputsState)
}

function updateInputsState(event){
    let name = event.target.name;
    let value = event.target.value;
    console.log(event)
}


console.log(inputTexts);
