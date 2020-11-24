const merchItems = [
   
  {
    type: 'studio',
    title: 'Off the Hook',
    price: '$16',
    imgUrl: '/pics/Off_the_Hook_album.jpg',
},
{
    type: 'studio',
    title: 'Hummin Comin’ at Cha ', 
    price: '$19',
    imgUrl: '/pics/Hummin_Comin_at_Cha_Album.jpg',
},
{
    type: 'studio',
    title: 'Traces of My Lipstick',
    price: '$16',
    imgUrl: 'pics/TracesOfMyLipstick.jpg',
},
{
    type: 'compilation',
    title: 'Understanding',
    price: '$18',
    imgUrl: 'pics/Understanding_Album.jpg',
},
{
    type: 'compilation',
    title: 'Super Hits',
    price: '$20',
    imgUrl: 'pics/Super_Hits_Album.jpg',
},
{
    type: 'singles',
    title: 'Just Kickin It',
    price: '$10',
    imgUrl: 'pics/Just_Kickin_It_single.jpg',
},
{
    type: 'singles',
    title: 'Can`t Hang/Do You Want To',
    price: '$10',
    imgUrl: 'pics/DoYouWantTo_single.jpg',
},
{
    type: 'singles',
    title: 'Feel So Good',
    price: '$10',
    imgUrl: 'pics/FeelSoGood_Single.jpg',
},
{
    type: 'singles',
    title: 'Arms Of The One Who Loves You',
    price: '$10',
    imgUrl: 'pics/ArmsOfTheOneWhoLovesYou.jpg',
},
{
    type: 'singles',
    title: 'My Little Secret',
    price: '$10',
    imgUrl: 'pics/MyLittleSecret_Single.jpg',
},
]

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint
};

const merchPrinter = (merchItems) => {
    let domString = '';
    for (i=0; i < merchItems.length; i++) {
        domString += `
            <div class="card margin_10" style="width: 18rem;">
                <img src="${merchItems[i].imgUrl}" class="card-img-top" >
                <div class="card-body font_txt">
                    <h5 class="card-title">${merchItems[i].title}</h5>
                    <h5 class="card-price">${merchItems[i].price}</h5>
                    <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Purchase</button>
                </div>
            </div>
        `
  }

  printToDom('merchCards', domString)
}

const init = () => { 
    merchPrinter(merchItems);
}
init()

const xStudio = merchItems.filter(item => item.type === 'studio')
const xCompilation = merchItems.filter(item => item.type === 'compilation')
const xSingles = merchItems.filter(item => item.type === 'singles')
const all = merchItems.filter(item => item.type === 'studio' || 'compilation' || 'singles')


const printStudio = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = xStudio.map(function (studio) {
        return `
            <div class="card margin_10" style="width: 18rem;">
                <img src="${studio.imgUrl}" class="card-img-top" alt="...">
                <div class="card-body font_txt">
                    <h5 class="card-title">${studio.title}</h5>
                    <h5 class="card-price">${studio.price}</h5>
                    <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Purchase</button>
                </div>
            </div>
      `; 
    }).join('');
}

const printCompilation = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = xCompilation.map(function (compilation) {
        return `
            <div class="card margin_10" style="width: 18rem;">
                <img src="${compilation.imgUrl}" class="card-img-top" alt="...">
                <div class="card-body font_txt">
                    <h5 class="card-title">${compilation.title}</h5>
                    <h5 class="card-price">${compilation.price}</h5>
                    <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Purchase</button>
                </div>
            </div>`;
    }).join('');
}

const printSingles = () => {
   document.getElementById("merchCards").innerHTML = merchItems.innerHTML = xSingles.map(function (singles) {
        return `
            <div class="card margin_10" style="width: 18rem;">
                <img src="${singles.imgUrl}" class="card-img-top" alt="...">
                <div class="card-body font_txt">
                    <h5 class="card-title">${singles.title}</h5>
                    <h5 class="card-price">${singles.price}</h5>
                    <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Purchase</button>                    
                </div>
            </div>
        `;
    }).join('');
}

const printAll = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = all.map(function (all) {
        return `
            <div class="card margin_10" style="width: 18rem;">
                <img src="${all.imgUrl}" class="card-img-top" alt="...">
                <div class="card-body font_txt">
                    <h5 class="card-title">${all.title}</h5>
                    <h5 class="card-price">${all.price}</h5>
                    <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Purchase</button>
                </div>
            </div>
        `;
    }).join('');
}
const purchaseAlert = () => {
  alert("Your music is on the way!")
}

document.getElementById('studio-btn').addEventListener('click', printStudio);
document.getElementById('compilation-btn').addEventListener('click', printCompilation);
document.getElementById('singles-btn').addEventListener('click', printSingles)
document.getElementById('all-btn').addEventListener('click', printAll)
