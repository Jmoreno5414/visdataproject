let randomBtn = document.getElementById("random_btn");
let addy = document.getElementById("Address")
let gender = document.getElementById("Gender");
let number = document.getElementById("Phone");
let email = document.getElementById("Email");


function changePerson() {
    let randomIndex = Math.floor(Math.random() * dataObj.results.length);


    let selectedPerson = dataObj.results[randomIndex];
    console.log(selectedPerson);

    let nameHeading = document.getElementById("Person_name");
    nameHeading.innerText = `${selectedPerson.name.title} - ${selectedPerson.name.first} - ${selectedPerson.name.last}`;
    
    let personImg = document.querySelector("#Person_img");
    personImg.src = selectedPerson.picture.large;
    
    addy.innerText = `Address: ${selectedPerson.location.street.number}, ${selectedPerson.location.street.name}`
    gender.innerText = `Gender: ${selectedPerson.gender}`;
    number.innerText = `Phone: ${selectedPerson.phone}`;
    email.innerText = `Email: ${selectedPerson.email}`;
    
}
randomBtn.addEventListener("click", changePerson);