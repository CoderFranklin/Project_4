//Declared state of form
let state = {
  //Input fields from index.html and it's like a memory card.
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
  monthlyTotal,
  labels = ["Principal & Interest", "Property Tax", "Home Insurance", "HOA"], // Will show in the pie chart.
  backgroundColor = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 205, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)"
  ];
borderColor = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 205, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
];
//Removes characters and returns only numbers
function getNumber(str) {
  return Number(str.replace(/[^0-9\.-]+/g, ""));
}
//Initialize chart js instance
let ctx = document.getElementById("myChart").getContext("2d");
let myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: [
          monthlyPrincipalInterest,
          monthlyPropertyTaxes,
          monthlyHomeInsurance,
          monthlyHOA,
        ],
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  },
});
//Turning off the animations
myChart.options.animation = false;

//Add event lister to inputs
/*let i,
inputTexts = document.getElementsByClassName("form-group__textInput");
for (i = 0; i < inputTexts.length; i++) {
  //This loop is for multiple forms.
  //console.log(inputTexts[i])
  inputTexts[i].addEventListener("input", updateInputsState);
} // Try to merge the for loops into one loop.*/

/*inputSlides = document.getElementsByClassName("form-group__range-slide");
for (i = 0; i < inputSlides.length; i++) {
  //This loop is for multiple forms.
  //console.log(inputSlides[i])
  inputSlides[i].addEventListener("input", updateInputsState); //Trigger the updateInputState
}*/

let inputSlides = document.getElementsByClassName("form-group__range-slide"),
  inputTexts = document.getElementsByClassName("form-group__textInput");

for (let inputText of inputTexts) {
  inputText.addEventListener("input", updateInputsState);
}
for (let inputSlide of inputSlides) {
  inputSlide.addEventListener("input", updateInputsState);
}

function updateInputsState(event) {
  let name = event.target.name;
  let value = event.target.value;
  if (name == "price") {
    value = getNumber(value);
  }
  //total__down_payment
  if (event.target.type == "range") {
    let total = (document.getElementsByClassName(
      `total__${name}`
    )[0].innerHTML = `${value}`); //only one element in index.html
  }
  state = {
    //Taking all the properties from state.
    ...state,
    [name]: value,
  };
  calculateDate();
}

//Target the form
document.getElementsByTagName("form")[0].addEventListener("submit", (event) => {
  event.preventDefault(); //It's doing like a pluse request to a url, but will not with the preventDefault in play.
  document
    .getElementsByClassName("mg-page__right")[0]
    .classList.add("mg-page__right--animate");
  calculateDate();
});

function calculateDate() {
  totalLoan = state.price - state.price * (state.down_payment / 100); //Pemdas
  totalMonths = state.loan_years * 12;
  monthlyInterest = state.interest_rate / 100 / 12;
  monthlyPrincipalInterest = (
    totalLoan *
    ((monthlyInterest * (1 + monthlyInterest) ** totalMonths) /
      ((1 + monthlyInterest) ** totalMonths - 1))
  ).toFixed(2); //Return a string
  monthlyPropertyTaxes = (
    (state.price * (state.property_tax / 100)) /
    12
  ).toFixed(2);
  monthlyHomeInsurance = state.home_insurance / 12;
  monthlyHOA = state.hoa / 12;
  monthlyTotal =
    //Convert a string into a number
    parseFloat(monthlyPrincipalInterest) +
    parseFloat(monthlyPropertyTaxes) +
    parseFloat(monthlyHomeInsurance) +
    parseFloat(monthlyHOA);
  document.getElementsByClassName("info__numbers--principal")[0].innerHTML =
    parseFloat(monthlyPrincipalInterest).toFixed(2);
  document.getElementsByClassName(
    "info__numbers--property_taxes"
  )[0].innerHTML = parseFloat(monthlyPropertyTaxes).toFixed(2);
  document.getElementsByClassName(
    "info__numbers--home_insurance"
  )[0].innerHTML = parseFloat(monthlyHomeInsurance).toFixed(2);
  document.getElementsByClassName("info__numbers--hoa")[0].innerHTML =
    parseFloat(monthlyHOA).toFixed(2);
  document.getElementsByClassName("info__numbers--total")[0].innerHTML =
    monthlyTotal.toFixed(2);
  updateChart(myChart, labels, backgroundColor);
}

//Update Chart
function updateChart(chart, label, color) {
  chart.data.datasets.pop();
  chart.data.datasets.push({
    labels: labels,
    backgroundColor: color,
    data: [
      monthlyPrincipalInterest,
      monthlyPropertyTaxes,   
      monthlyHomeInsurance,
      monthlyHOA,
      monthlyInterest,
    ],
  });
  chart.options.transitions.active.animation.duration = 0;
  chart.update();
}
calculateDate;
