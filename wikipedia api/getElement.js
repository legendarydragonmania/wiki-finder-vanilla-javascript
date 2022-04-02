export default (selection) => {
    const element = document.querySelector(selection);
    if(element) return element;
    throw new Error(`Please, check your ${selection}, there is no such element exist.`)
}
