import React from 'react';

const CreateEmployee = () => {
    return (
        <>
            <h2>Create Employee</h2>
            <form id="formulaire">
                    <label>First Name</label>
					<input class= "text-control" aria-label = "First Name" type="text" id="first" name="first" />
                <div className='formData'>
					<label >Last Name</label>
					<input class= "text-control" aria-label = "Last Name" type="text" id="last" name="last" />
				</div>
				<div className='formData'>
					<label >Date of Birth</label>
					<input class= "text-control" aria-label = "Date of Birth" type="number" id="birth" name="birth" />
				</div>
				<div className='formData'>
					<label >Start Date</label>
					<input class= "text-control" aria-label = "Start date" type="number" id="start" name="start" />
				</div>
                <div className='formData'>
                    <label >Street</label>
					<input class= "text-control" aria-label = "street" type="text" id="street" name="street" />
					</div>
				<div className='formData'>
					<label >City</label>
					<input class= "text-control" aria-label = "city" type="text" id="city" name="city" />
				</div>
                <div className='formData'>
                    <label >State</label>
					<input class= "text-control" aria-label = "state" type="text" id="state" name="state" />
					</div>
				<div className='formData'>
					<label >Zip Code</label>
					<input class= "text-control" aria-label = "code" type="text" id="code" name="code" />
				</div>
                <div className='formData'>
					<label >Department</label>
					<input class= "text-control" aria-label = "department" type="number" id="department" name="department" />
				</div>


          <button class="contact_button"  aria-label = "envoyer le formulaire" id="envoyer">Save</button>
				</form>
        </>
    );
};

export default CreateEmployee;


// validation des champs de formulaire..........

// VERIFICATION NOM

/*let prenom = document.getElementById("first");
prenom.addEventListener("change", validPrenom);

function validPrenom(inputFirst) {                           
    let prenomV = new RegExp('^[a-zA-Z-\s]+$');                
    let testPrenom = prenomV.test(first.value);

    if (!testPrenom) { 
        prenom.parentElement.setAttribute("data-error-visible", "true");
        prenom.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
        return false;
    } else {
        prenom.parentElement.setAttribute("data-error-visible", "false");
        prenom.parentElement.setAttribute("data-error", "");                                        
        return true;
    }
}
// VERIFICATION NOM

let nom = document.getElementById("last");
nom.addEventListener("change", validNom);
nom.focus();

function validNom(inputLast) {
    let nomV = new RegExp('^[a-zA-Z-\s]+$');
    let testNom = nomV.test(last.value);

    if (!testNom) {
        nom.parentElement.setAttribute("data-error-visible", "true");
        nom.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    return false;
    } else {
        nom.parentElement.setAttribute("data-error-visible", "false");
        nom.parentElement.setAttribute("data-error", "");
    return true;
    }
}

// VERIFICATION EMAIL

let email = document.getElementById("email");
email.addEventListener("change", validEmail);

function validEmail(inputEmail) {
    let emailV = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
    let testEmail = emailV.test(email.value);

    if (!testEmail) {
        email.parentElement.setAttribute("data-error-visible", "true");
        email.parentElement.setAttribute("data-error", "Veuillez vérifier votre adresse éléctronique.");
    return false;
    } else {
        email.parentElement.setAttribute("data-error-visible", "false");
        email.parentElement.setAttribute("data-error", "");
    return true;
    }
}
// VERIFICATION MESSAGE

let message = document.getElementById("message");
message.addEventListener("change", validMessage);

function validMessage (){
    if (!message.value){
        message.parentElement.setAttribute("data-error-visible", "true");
        message.parentElement.setAttribute("data-error", "Veuillez nous laisser un message svp.");
        message.style.marginBottom= "18px";
    return false;
    } else {
        message.parentElement.setAttribute("data-error-visible", "false");
        message.parentElement.setAttribute("data-error", "");
    return true;
    }
}
// OUVERTURE ET FERMETURE FORMULAIRE
let modal = document.getElementById("contact_modal");

function displayModal() {
	modal.style.display = "block";
    prenom.focus();
}
function closeModal() {
    modal.style.display = "none";
}

//VALIDATION FORMULAIRE GLOBAL

let btnEnvoyer = document.getElementById("envoyer");
btnEnvoyer.addEventListener("click", validFormulaire);


function validFormulaire(e) {                                    
    if (validPrenom() & validNom() & validEmail() & validMessage()) {
        closeModal();
        document.getElementById("formulaire").reset();              //Remise à zéro des champs du formulaire
    }else{
        e.preventDefault();
    }
}
// Fermeture de la Modal avec Escape
window.addEventListener('keyup', (e) => {
    closeModalClavier(e);
})

function closeModalClavier(e) {
    if (modal.style.display = "block" && e.key === 'Escape') {
        closeModal();
    }
}*/


