const merchItems = [
   
    {
        type: 'LivePhotos',
        imgUrl: 'pics/xscape1a.jpg',

    },
    {
        type: 'LivePhotos',
        imgUrl: 'pics/xscape2.jpg',

    },
    {
        type: 'LivePhotos',
      
        imgUrl: 'pics/xscape3.jpg',
    },
    {
        type: 'OfficialPhotos',
        imgUrl: 'pics/xscape4a.jpg',
    },
    {
        type: 'OfficialPhotos',
        imgUrl: 'pics/xscape5.jpg',
    },
    {
        type: 'OfficialPhotos',
        imgUrl: 'pics/xscape6.jpg',
    },
    {
        type: 'BehindTheScenesPhotos',
        imgUrl: 'pics/xscape7.jpg',
    },  
    {
        type: 'BehindTheScenesPhotos',
        imgUrl: 'pics/xscape8.jpg',
    },
  
    {
        type: 'BehindTheScenesPhotos',
         imgUrl: 'pics/xscape9.jpg',
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
                <img src="${merchItems[i].imgUrl}" class="card-img-top" alt="...">
        
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

const xLivePhotos = merchItems.filter(item => item.type === 'LivePhotos')
const xOfficialPhotos = merchItems.filter(item => item.type === 'OfficialPhotos')
const xBehindTheScenesPhotos = merchItems.filter(item => item.type === 'BehindTheScenesPhotos')
// const xHome = merchItems.filter(item => item.type === 'home')
// const xAccessory = merchItems.filter(item => item.type === 'accessory')
const xAllPhotos = merchItems.filter(item => item.type === 'LivePhotos' || 'OfficialPhotos' || 'BehindTheScenesPhotos')


const printLivePhotos = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = xLivePhotos.map(function (LivePhotos) {
        return `
        <div class="card margin_10" style="width: 18rem;">
                <img src="${LivePhotos.imgUrl}" class="card-img-top" alt="...">

            </div>
        `; 
    }).join('');
}

const printOfficialPhotos = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = xOfficialPhotos.map(function (OfficialPhotos) {
        return `
        <div class="card margin_10" style="width: 18rem;">
                <img src="${OfficialPhotos.imgUrl}" class="card-img-top" alt="...">

            </div>
        `;
    }).join('');
}

const printBehindTheScenesPhotos = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = xBehindTheScenesPhotos.map(function (BehindTheScenesPhotos) {
        return `
        <div class="card margin_10" style="width: 18rem;">
                <img src="${BehindTheScenesPhotos.imgUrl}" class="card-img-top" alt="...">

            </div>
        `;
    }).join('');
}

// const printHome = () => {
//     document.getElementById("merchCards").innerHTML = merchItems.innerHTML = xHome.map(function (home) {
//         return `
//         <div class="card" style="width: 18rem;">
//                 <img src="${home.imgUrl}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                      <h5 class="card-title">${home.title}</h5>
//                         <h5 class="card-price">${home.price}</h5>
//                         <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Add to Cart</button>                    </div>
//             </div>
//         `;
//     }).join('');
// }

// const printAssessories = () => {
//     document.getElementById("merchCards").innerHTML = merchItems.innerHTML = xAccessory.map(function (accessory) {
//         return `
//         <div class="card" style="width: 18rem;">
//                 <img src="${accessory.imgUrl}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                      <h5 class="card-title">${accessory.title}</h5>
//                         <h5 class="card-price">${accessory.price}</h5>
//                         <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Add to Cart</button>                    </div>
//             </div>
//         `;
//     }).join('');
// }

const printAllPhotos = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = xAllPhotos.map(function (allphotos) {
        return `
        <div class="card margin_10" style="width: 18rem;">
                <img src="${allphotos.imgUrl}" class="card-img-top" alt="...">

            </div>
        `;
    }).join('');
}
const purchaseAlert = () => {
    alert("Added to Cart")
}

document.getElementById('LivePhotos-btn').addEventListener('click', printLivePhotos);
document.getElementById('OfficialPhotos-btn').addEventListener('click', printOfficialPhotos);
document.getElementById('BehindTheScenesPhotos-btn').addEventListener('click', printBehindTheScenesPhotos);
// document.getElementById('home-btn').addEventListener('click', printHome)
// document.getElementById('accessories-btn').addEventListener('click', printAssessories)
document.getElementById('AllPhotos-btn').addEventListener('click', printAllPhotos)


console.log(xLivePhotos)