const url = "https://localhost:5001/api/beanvariety/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
    getAllCoffees()
        .then(coffees => {
            console.log(coffees);
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

function getAllCoffees() {
    return fetch(url2).then(resp => resp.json());
}