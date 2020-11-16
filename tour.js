const tourDates = [
   
  {
    type: 'studio',
    date: '11-11-2020',
    city: 'New York City',
    venue: 'Madison Square Garden',
    price: '$160',
},

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint
};

const tourPrinter = (tourDates) => {
  let domString = '';
  for (i=0; i < tourDates.length; i++) {
      domString += `
          <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">${tourDates[i].date}</h5>
                    <h5 class="card-price">${tourDates[i].price}</h5>
                    <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Purchase</button>
                  </div>
          </div>
      `
  }
  console.log(merchPrinter)
  printToDom('merchCards', domString)
}

const init = () => { 
    merchPrinter(merchItems);
}
init()