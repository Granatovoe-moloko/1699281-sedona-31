const search = document.querySelector(".search");
const form = document.querySelector(".form");
const dateIn = form.querySelector(".date-check-in");
const dateOut = form.querySelector(".date-check-out");
const adult = form.querySelector(".adult-visitor");
const children = form.querySelector(".children-visitor");

let isStorageSupport = true;
let storageAdult = "";
let storageChildren = "";

try {
    storageAdult = localStorage.getItem("adultCount");
    storageChildren = localStorage.getItem("childrenCount");
} catch (err) {
  isStorageSupport = false;
}

search.addEventListener("click", function(evt) {
    evt.preventDefault();
    form.classList.toggle("form-show");

    if (storageAdult) {
        adult.value = storageAdult;
    }
    if (storageChildren) {
        children.value = storageChildren;
    }

    dateIn.focus();
});

form.addEventListener("submit", function (evt) {
    if (!dateIn.value || !dateOut.value || !adult.value || !children.value){
        evt.preventDefault();
    }
    else {
        if (isStorageSupport) {
            localStorage.setItem ("adultCount", adult.value);
            localStorage.setItem ("childrenCount", children.value);
        }
    }
});

