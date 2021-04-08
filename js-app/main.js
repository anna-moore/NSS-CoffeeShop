const url = "https://localhost:5001/api/beanvariety/";
const url2 = "https://localhost:5001/api/coffee/"
const outputTarget = document.querySelector('.output');


const button = document.querySelector("#run-button");
const formButton = document.querySelector("#form-button");
const formElement = document.querySelector(".bean-form");
const submitButton = document.querySelector("#submit-form");


button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            if (outputTarget.innerHTML === '') {
                beanVarieties.forEach(bv => {
                    outputTarget.innerHTML += `
                    <div class="bean-variety" id="bv-${bv.id}">
                        <h3 class="bean-title">
                            Name: ${bv.name}
                        </h3>
                        <h4 class="bean-region">
                            Region: ${bv.region}
                        </h4>
                        <p class="bean-notes">
                           ${bv.notes ? `<b>Notes:</b> ${bv.notes}` : ''}
                        </p>
                    </div>
                    <hr />
                    `;
                });
            } else {
                outputTarget.innerHTML = '';
            }
            console.log(beanVarieties);
        })
    getAllCoffees()
        .then(coffees => {
            console.log(coffees);
        })
});

formButton.addEventListener('click', () => {
    formElement.classList.toggle('isHidden');
})


submitButton.addEventListener('click', () => {
    let bv = {};
    bv.name = document.getElementById("name").value;
    bv.region = document.getElementById("region").value;
    bv.notes = document.getElementById("notes").value;
    addBeanVariety(bv).then(() => {
        document.getElementById("name").value = '';
        document.getElementById("region").value = '';
        document.getElementById("notes").value = '';
        formElement.classList.toggle('isHidden');
    })
})

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

function getAllCoffees() {
    return fetch(url2).then(resp => resp.json());
}

function addBeanVariety(bv) {
    return fetch((url), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bv)
    }).then(getAllBeanVarieties)
}