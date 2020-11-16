const merchItems = [
   
    {
        type: 'clothes',
        title: 'Xscape T-shirt',
        price: '$36',
        imgUrl: '/pics/iMbqr0u.jpg',
    },
    {
        type: 'hat',
        title: 'Xscape Beanie', 
        price: '$26',
        imgUrl: '/pics/nqTTDJ3.jpg',
    },
    {
        type: 'hat',
        title: 'Xscape Trucker Hat',
        price: '$30',
        imgUrl: 'pics/TiPGP1J.jpeg',
    },
    {
        type: 'bag',
        title: 'Xscape Pouch',
        price: '$16',
        imgUrl: 'pics/gkQlgGc.jpg',
    },
    {
        type: 'bag',
        title: 'Xscape Tote Bag',
        price: '$20',
        imgUrl: 'pics/rd9ZlTW.jpeg',
    },
    {
        type: 'home',
        title: 'Xscape Coffee Mug',
        price: '$12',
        imgUrl: 'pics/lVzDmsC.jpg',
    },
    {
        type: 'home',
        title: 'Xscape Throw Pillow',
        price: '$30',
        imgUrl: 'pics/R97JhCW.jpeg',
    },
    {
        type: 'clothes',
        title: 'Xscape Hoodie',
        price: '$40',
        imgUrl: 'pics/PAj6Xlm.jpg',
    },
    {
        type: 'accessory',
        title: 'Xscape Phone Case',
        price: '$26',
        imgUrl: 'pics/6pMfcc1.jpeg',
    },
    {
        type: 'accessory',
        title: 'Xscape Mask',
        price: '$16',
        imgUrl: 'pics/8dpIe9B.jpeg',
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
            <div class="card" style="width: 18rem;">
                <img src="${merchItems[i].imgUrl}" class="card-img-top" >
                    <div class="card-body">
                     <h5 class="card-title">${merchItems[i].title}</h5>
                        <h5 class="card-price">${merchItems[i].price}</h5>
                        <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Add to Cart</button>
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

const xClothes = merchItems.filter(item => item.type === 'clothes')
const xHat = merchItems.filter(item => item.type === 'hat')
const xBag = merchItems.filter(item => item.type === 'bag')
const xHome = merchItems.filter(item => item.type === 'home')
const xAccessory = merchItems.filter(item => item.type === 'accessory')
const all = merchItems.filter(item => item.type === 'clothes' || 'hat' || 'bag' || 'home' || 'accessory')


const printClothes = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = xClothes.map(function (clothes) {
        return `
        <div class="card" style="width: 18rem;">
                <img src="${clothes.imgUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                     <h5 class="card-title">${clothes.title}</h5>
                        <h5 class="card-price">${clothes.price}</h5>
                        <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Add to Cart</button>                    </div>
            </div>
        `; 
    }).join('');
}

const printHat = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = xHat.map(function (hat) {
        return `
        <div class="card" style="width: 18rem;">
                <img src="${hat.imgUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                     <h5 class="card-title">${hat.title}</h5>
                        <h5 class="card-price">${hat.price}</h5>
                        <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Add to Cart</button>                    </div>
            </div>
        `;
    }).join('');
}

const printBag = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = xBag.map(function (bag) {
        return `
        <div class="card" style="width: 18rem;">
                <img src="${bag.imgUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                     <h5 class="card-title">${bag.title}</h5>
                        <h5 class="card-price">${bag.price}</h5>
                        <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Add to Cart</button>                    </div>
            </div>
        `;
    }).join('');
}

const printHome = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = xHome.map(function (home) {
        return `
        <div class="card" style="width: 18rem;">
                <img src="${home.imgUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                     <h5 class="card-title">${home.title}</h5>
                        <h5 class="card-price">${home.price}</h5>
                        <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Add to Cart</button>                    </div>
            </div>
        `;
    }).join('');
}

const printAssessories = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = xAccessory.map(function (accessory) {
        return `
        <div class="card" style="width: 18rem;">
                <img src="${accessory.imgUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                     <h5 class="card-title">${accessory.title}</h5>
                        <h5 class="card-price">${accessory.price}</h5>
                        <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Add to Cart</button>                    </div>
            </div>
        `;
    }).join('');
}

const printAll = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = all.map(function (all) {
        return `
        <div class="card" style="width: 18rem;">
                <img src="${all.imgUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                     <h5 class="card-title">${all.title}</h5>
                        <h5 class="card-price">${all.price}</h5>
                        <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Add to Cart</button>                    </div>
            </div>
        `;
    }).join('');
}
const purchaseAlert = () => {
    alert("Added to Cart")
}

document.getElementById('clothes-btn').addEventListener('click', printClothes);
document.getElementById('hat-btn').addEventListener('click', printHat);
document.getElementById('bag-btn').addEventListener('click', printBag);
document.getElementById('home-btn').addEventListener('click', printHome)
document.getElementById('accessories-btn').addEventListener('click', printAssessories)
document.getElementById('all-btn').addEventListener('click', printAll)


console.log(xClothes)