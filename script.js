'use sctrict';

let dropList = document.querySelector('.dropdown-box');
let inputSearch = document.querySelector('.input-search');

inputSearch.onclick = function () {
    dropList.classList.toggle('dropdown-box');
    dropList.classList.toggle('dropdown-box-visually');
}

