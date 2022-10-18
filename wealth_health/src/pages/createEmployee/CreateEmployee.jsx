import React from 'react';
import "./CreateEmployee.css"
import FormCreate from "../../components/create/FormCreate"

const CreateEmployee = () => {
    return (
        <main>
            <h2 className='create'>Create Employee</h2>

            <FormCreate />

            <div id="confirmation" className="modal">Employee Created!</div>
            
        </main>
    );
};

export default CreateEmployee;

/*const states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
];








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


