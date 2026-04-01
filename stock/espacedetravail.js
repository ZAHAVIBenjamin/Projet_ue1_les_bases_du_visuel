const divInscription = document.getElementById("inscription");
function chargerPageInscription() {
  let lignePseudo = document.createElement("input");
  lignePseudo.classList.add("ligneFormulaire");
  lignePseudo.value = "";
  lignePseudo.style.color = "goldenrod";
  lignePseudo.placeholder = "Pseudo";
  lignePseudo.style.backgroundColor = "goldenrod";
  let ligneMdp = document.createElement("input");
  ligneMdp.type = "password";
  ligneMdp.classList.add("ligneFormulaire");
  ligneMdp.placeholder = "Mot de passe";
  ligneMdp.style.backgroundColor = "goldenrod";
  ligneMdp.style.color = "#635419fe";
  let ligneEmail = document.createElement("input");
  ligneEmail.type = "email";
  ligneEmail.classList.add("ligneFormulaire");
  ligneEmail.placeholder = "email";
  ligneEmail.style.backgroundColor = "goldenrod";
  ligneEmail.style.color = "#635419fe";
  let ligneTitreChoix1 = document.createElement("p");
  ligneTitreChoix1.classList.add("ligneFormulaire");
  ligneTitreChoix1.innerText = "Aderer à la New Letter";
  let ligneChoix1 = document.createElement("input");
  ligneChoix1.type = "checkbox";
  ligneChoix1.classList.add("ligneFormulaire");
  ligneChoix1.checked = true;
  let ligneTitreChoix2 = document.createElement("p");
  ligneTitreChoix2.classList.add("ligneFormulaire");
  ligneTitreChoix2.innerText = "etre informé des nouvelles quetes";
  let ligneChoix2 = document.createElement("input");
  ligneChoix2.type = "checkbox";
  ligneChoix2.classList.add("ligneFormulaire");
  ligneChoix2.checked = true;
  let bouttonInscriptionValidation = document.createElement("button");
  bouttonInscriptionValidation.innerText = "Valider";

  inscription.appendChild(lignePseudo);
  inscription.appendChild(ligneMdp);
  inscription.appendChild(ligneEmail);
  inscription.appendChild(ligneTitreChoix1);
  inscription.appendChild(ligneChoix1);
  inscription.appendChild(ligneTitreChoix2);
  inscription.appendChild(ligneChoix2);
  inscription.appendChild(bouttonInscriptionValidation);
}

chargerPageInscription();
