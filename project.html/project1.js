
// //https://api.fastforex.io/fetch-one?from=usd&to=aed&api_key=7f5bacd069-5af4bcffed-sesmcu
// //https://api.fastforex.io/fetch-one?from=usd&to=inr&amount=2.00&api_key=7f5bacd069-5af4bcffed-sesmcu these urls works only for 7 days as free trial

// // const BASE_URL = "https://api.fastforex.io/fetch-one?from=usd&to=inr&amount=2.00&api_key=7f5bacd069-5af4bcffed-sesmcu"

const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button");

 // Get the values of amount, fromCurrency, and toCurrency
 const amount = document.querySelector('.amount input');
 const fromCurrency = document.querySelector('.from select');
 const toCurrency = document.querySelector('.to select');
 const msg = document.querySelector(".msg");

// for (const key in countryList) { // to see weather the data is fetching or not
//     // if (Object.hasOwnProperty.call(countryList, key)) {
//         const element = key;
//         console.log(element);
//     // }
// }

for (const select of dropdowns) {
    // Iterate over each dropdown element in the dropdowns array
    for (const currCode in countryList) {
        // Iterate over each currency code (currCode) in the countryList object

        // Create a new <option> element
        let newOption = document.createElement("option");

        // Set the inner text of the <option> element to the currency code
        newOption.innerText = currCode;

        // Set the value attribute of the <option> element to the currency code
        newOption.value = currCode;// here value is nothing but value="inr"etc
        
        if(select.name === "from" && currCode ==="USD"){
            newOption.selected="selected";
        }else if(select.name === "to" && currCode ==="INR"){
            newOption.selected="selected";

        }
        // Append the new <option> element to the current dropdown
        select.append(newOption);
    }

    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag =(element)=>{
console.log(element);

let currCode = element.value;
console.log(currCode);

let countryCode = countryList[currCode];//IN, EU

let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;

let img = element.parentElement.querySelector("img");

img.src = newSrc;

};


btn.addEventListener("click",async (evt)=>{
evt.preventDefault();
let amtVal = amount.value;
console.log(amtVal);
if(amtVal ===""||amtVal<1){
    amtVal =1;
}

// Now you can use these values for further processing
console.log("Amount:", amtVal);
console.log("From Currency:", fromCurrency.value);
console.log("To Currency:", toCurrency.value);

const B_URL = "https://api.fastforex.io/fetch-one";
const api_key = "7f5bacd069-5af4bcffed-sesmcu";
const url = `${B_URL}?from=${fromCurrency.value.toLowerCase()}&to=${toCurrency.value.toLowerCase()}&amount=${amtVal}&api_key=${api_key}`;
// Now you can proceed with making the API call using the constructed URL
// For simplicity, I'm just logging the URL here
console.log("API URL:", url);

let response = await fetch(url);
console.log(response);
// console.log(response.json());

let data = await response.json();
let rate = parseFloat(data.result[toCurrency.value.toUpperCase()]);
console.log("Exchange Rate:", rate);

let final_amount = parseFloat(amtVal) * rate;
console.log("Final Amount:", final_amount);
msg.innerText = `${amtVal} ${fromCurrency.value} = ${final_amount} ${toCurrency.value}`;

});
