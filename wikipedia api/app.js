import getElement from "./getElement.js";
import fetchPages from "./fetchPages.js";

const formDOM = getElement(".form")
const inputDOM = getElement(".form-input")
const resultsDOM = getElement(".results")

formDOM.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = inputDOM.value;
    if(!value) {
        resultsDOM.innerHTML = `<div class="error">please enter a valid search term</div>`;
        return;
    }
    fetchPages(value)
})