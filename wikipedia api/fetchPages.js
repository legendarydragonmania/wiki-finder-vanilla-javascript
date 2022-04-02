import { url } from "./urls.js";
import getElement from "./getElement.js";
import renderResults from "./render.js";

const resultsDOM = getElement(".results")

const fetchPages = async (searchValue) => {
    resultsDOM.innerHTML = `<div class="loading"></div>`;
    try {
        const response = await fetch(`${url}${searchValue}`);
        const data = await response.json();
        const results = data.query.search;
        if(results.length < 1) {
            resultsDOM.innerHTML = `<div class="error">no results match your search. please, try again later</div>`
        }
        renderResults(results)
    } catch (error) {
        console.log(error);
        resultsDOM.innerHTML = `<div class="error">there was an unexpected error...</div>`
    }
}

export default fetchPages;