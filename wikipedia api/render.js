import getElement from "./getElement.js";

const resultsDOM = getElement(".results")

const renderResults = (list) => {
    const cardList = list.map(item => {
        const { title, snippet, pageid } = item;
        return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
        <h4>${title}</h4>
        <p>${snippet}</p>
    </a>`
    }).join("");
    resultsDOM.innerHTML = `<div class="articles">
        ${cardList}
    </div>`
}

export default renderResults;