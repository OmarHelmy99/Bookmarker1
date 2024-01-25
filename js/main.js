

var SiteNameInput = document.getElementById('SiteNameInput');
var SiteURLInput = document.getElementById('SiteURLInput');
var tableBody = document.getElementById('tableBody');


var siteContainer = [];
// if (localStorage.getItem("siteContainer")==null){
//     siteContainer=[];
// }else{
//     siteContainer= JSON.parse( localStorage.getItem("siteContainer"));
//     displaySites();
// }

function addSite() {
    var Sites = {
        SiteName: SiteNameInput.value,
        SiteURL: SiteURLInput.value,

    }
    siteContainer.push(Sites);
    console.log(siteContainer);
    cleanSite();
    localStorage.setItem("siteContainer", JSON.stringify(siteContainer))
    displaySites(siteContainer)
}

function displaySites(siteContainer) {
    var cartoona = '';
    for (var i = 0; i < siteContainer.length; i++) {
        cartoona += `<tr>
        <td>`+ [i + 1] + `</td>
        <td>`+ siteContainer[i].SiteName + `</td>
        <td><button onclick="visitWebsite(${i})" class="btn btn-warning">Visit</button></td>
        <td><button onclick="deleteSite(${i})" class="btn btn-danger">delete</button></td>
        </tr>`
    }
    tableBody.innerHTML = cartoona;
}

function cleanSite() {
    SiteNameInput.value = '';
    SiteURLInput.value = '';
}

function deleteSite(index) {
    siteContainer.splice(index, 1);
    localStorage.setItem("siteContainer", JSON.stringify(siteContainer));
    displaySites(siteContainer);
}
// function visitWebsite(e) {
//     var websiteIndex = e.value;
//     var httpsRegex = /^https?:\/\//;
//     if (httpsRegex.test(siteContainer[websiteIndex].SiteURLInput)) {
//       open(siteContainer[websiteIndex].SiteURLInput);
//     } else {
//       open(`https://${siteContainer[websiteIndex].SiteURLInput}`);
//     }
//   }

// var Regexname = /^[A-za-z]$/
// function isNameValid() {
//     if (Regexname.test(SiteNameInput.value)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// var urlName = /^(https:\/\/)(www\.)?[A-za-z0-9_\.]{1,}\.[a-z]{3}$/
// function isURLValid() {
//     if (urlName.test(SiteURLInput.value)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// SiteNameInput.onkeyup - function () {
//     if (isNameValid() && isURLValid()){
//         addSite(true);
//     }else{
//         addSite(false);
//     }
// }
// SiteURLInput.onkeyup - function () {
//     if (isNameValid() && isURLValid()){
//         addSite(true);
//     }else{
//         addSite(false);
//     }
// }
