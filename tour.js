const tourDates = [
   
{
  type: 'ticket',
  date: '11/7/2020',
  city: 'Miami Florida',
  venue: 'Marlin Park',
  price: '$160',
},
{
  type: 'ticket',
  date: '11/11/2020',
  city: 'Atlanta, Georgia',
  venue: 'Mercedes Benz Superdome',
  price: '$160',
  },  
{
  type: 'presale',
  date: '11/13/2020',
  city: 'Atlanta, Georgia',
  venue: 'Georgia Dome',
  price: '$160',
},
{
type: 'appearances',
date: '11/15/2020',
city: 'Houston, Texas',
venue: 'NRG Stadium',
price: '$160',
},
{
  type: 'ticket',
  date: '11/18/2020',
  city: 'Dallas, Texas',
  venue: 'AT & T Stadium',
  price: '$160',
},
{
type: 'ticket',
date: '11/20/2020',
city: 'Los Angeles, California',
venue: 'Rose Bowl',
price: '$160',
},
{
  type: 'appearances',
  date: '11/21/2020',
  city: 'Los Angeles, California',
  venue: 'Staple Center',
  price: '$160',
  },
{
type: 'ticket',
date: '12/3/2020',
city: 'Seattle, Washington',
venue: 'Centurylink Field',
price: '$160',
},
{
type: 'ticket',
date: '12/5/2020',
city: 'Toronto,Ontario',
venue: 'Rogers Centre',
price: '$160',
},
{
  type: 'ticket',
  date: '12/9/2020',
  city: 'Chicago, Illinois',
  venue: 'Soldier Field',
  price: '$160',
},
{
  type: 'presale',
  date: '12/10/2020',
  city: 'Chicago, Illinois',
  venue: 'Soldier Field',
  price: '$160',
},
{
type: 'appearances',
date: '12/12/2020',
city: 'Flushing, New York',
venue: 'Citi Field',
price: '$160',
}, 
{
  type: 'ticket',
  date: '12/13/2020',
  city: 'New York City, New York',
  venue: 'Madison Square Garden',
  price: '$160',
},
{
type: 'ticket',
date: '12/16/2020',
city: 'Detroit, Michigan',
venue: 'Ford Field',
price: '$160',
},
{
type: 'ticket',
date: '12/19/2020',
city: 'Nashville, Tennessee',
venue: 'Nissan Stadium',
price: '$160',
}, 
]
// PrintToDom coding
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint
};
//  Declaring varibles
let xPast = []
let xUpcoming = []
let currentDate = new Date();
let currentMsec = Date.parse(currentDate);

// initial printer
const tourPrinter = (tourDates) => {
  let domString = '';
  for (i=0; i < tourDates.length; i++) {
    domString += `
    <div class="col-2 ">${tourDates[i].date}</div>
    <div class="col-3 ">${tourDates[i].city}</div>
    <div class="col-3 ">${tourDates[i].venue}</div>
    <div class="col-2 ">${tourDates[i].price}</div>
    `
    // set button for past events
    let tourTime = Date.parse(tourDates[i].date)
    if (currentMsec >= tourTime) {
      xPast.push(tourDates[i])
      domString += `
      <button  id="btn-5" class="btn btn-dark purchase-btn-group button--5">Past event</button>  
      `
    } else {
      if (currentMsec <= tourTime) {
        xUpcoming.push(tourDates[i])
        domString += `
        <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Purchase</button>  
      `
      };
    };
  }

  printToDom('tourCards', domString)
}
// initialize the start of functions
const init = () => { 
    tourPrinter(tourDates);
}
init()

// filter for buttons
const xTicket = tourDates.filter(item => item.type === 'ticket')
const xPresale = tourDates.filter(item => item.type === 'presale')
const xAppearances = tourDates.filter(item => item.type === 'appearances')
const xall = tourDates.filter(item => item.type === 'ticket' || 'presale' || 'appearances')

// printer for upcoming
const printUpcoming = () => {
  document.getElementById("tourCards").innerHTML = tourDates.innerHTML = xUpcoming.map(function (upcoming) {
      return `
        <div class="col-2 ">${upcoming.date}</div>
        <div class="col-3 ">${upcoming.city}</div>
        <div class="col-3 ">${upcoming.venue}</div>
        <div class="col-2 ">${upcoming.price}</div>
        <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Purchase</button>
      ` 
  }).join('');
}

// printer for past button
const printPast = () => {
  document.getElementById("tourCards").innerHTML = tourDates.innerHTML = xPast.map(function (past) {
    return `
      <div class="col-2 ">${past.date}</div>
      <div class="col-3 ">${past.city}</div>
      <div class="col-3 ">${past.venue}</div>
      <div class="col-2 ">${past.price}</div>
      <button  id="btn-5" class="btn btn-dark purchase-btn-group button--5">Past event</button> 
    `; 
  }).join('');
}

// printer for presale button
const printPresale = () => {
  document.getElementById("tourCards").innerHTML = tourDates.innerHTML = xPresale.map(function (presale) {
    let presaleTime = Date.parse(presale.date)
    if (currentMsec >= presaleTime) {
      return `
      <div class="col-2 ">${presale.date}</div>
      <div class="col-3 ">${presale.city}</div>
      <div class="col-3 ">${presale.venue}</div>
      <div class="col-2 ">${presale.price}</div>
      <button  id="btn-5" class="btn btn-dark purchase-btn-group button--5">Past event</button>
    `;
    }
      return `
        <div class="col-2 ">${presale.date}</div>
        <div class="col-3 ">${presale.city}</div>
        <div class="col-3 ">${presale.venue}</div>
        <div class="col-2 ">${presale.price}</div>
        <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Purchase</button>
      `;
  }).join('');
}
// printer for appearance button
const printAppearances = () => {
 document.getElementById("tourCards").innerHTML = tourDates.innerHTML = xAppearances.map(function (appearances) {
  let appearancesTime = Date.parse(appearances.date)
  if (currentMsec >= appearancesTime) {
    return `
    <div class="col-2 ">${appearances.date}</div>
    <div class="col-3 ">${appearances.city}</div>
    <div class="col-3 ">${appearances.venue}</div>
    <div class="col-2 ">${appearances.price}</div>
    <button  id="btn-5" class="btn btn-dark purchase-btn-group button--5">Past event</button>
    `;
  }
    return `
      <div class="col-2 ">${appearances.date}</div>
      <div class="col-3 ">${appearances.city}</div>
      <div class="col-3 ">${appearances.venue}</div>
      <div class="col-2 ">${appearances.price}</div>
      <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Purchase</button>
    `;
  }).join('');
}

// printer for all button

const printAll = () => {
  document.getElementById("tourCards").innerHTML = tourDates.innerHTML = xall.map(function (all) {
    let allTime = Date.parse(all.date)
    if (currentMsec >= allTime) {
      return `
      <div class="col-2 ">${all.date}</div>
      <div class="col-3 ">${all.city}</div>
      <div class="col-3 ">${all.venue}</div>
      <div class="col-2 ">${all.price}</div>
      <button  id="btn-5" class="btn btn-dark purchase-btn-group button--5">Past event</button>
      `;
    }
      return `
        <div class="col-2 ">${all.date}</div>
        <div class="col-3 ">${all.city}</div>
        <div class="col-3 ">${all.venue}</div>
        <div class="col-2 ">${all.price}</div>
        <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Purchase</button>
      `;
    }).join('');
  }

// purchase alert function
const purchaseAlert = () => {
alert("Your ticket has been purchased! See you there!")
}

// button click listener
document.getElementById('upcoming-btn').addEventListener('click', printUpcoming);
document.getElementById('past-btn').addEventListener('click', printPast);
 document.getElementById('presale-btn').addEventListener('click', printPresale);
document.getElementById('appearances-btn').addEventListener('click', printAppearances)
document.getElementById('all-btn').addEventListener('click', printAll)
