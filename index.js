// ----------------------------------- Les constantes tirées d'elements
const inputRechercher = document.querySelector("#inputRechercher");
const buttonRechercher = document.querySelector("#buttonRechercher");
const inputPseudo = document.querySelector("#pseudo");
const inputPassword = document.querySelector("#password");
const divPseudoConfirme = document.querySelector("#pseudoConfirme");
const leBoutonGo = document.querySelector(".bouttonGo");
const leBoutonLogin = document.querySelector("#buttonLogin");
const leboutonLogOut = document.querySelector("#buttonLogout");
const outputNewLetter = document.querySelector("#outputNewLetter");
const trainNewLetter = document.querySelector("#trainNewLetter");
const tousLesConteneurs = document.querySelectorAll(".fondBouttonNav");
const produitsList = document.getElementById("produitsList");
const panierDiv = document.getElementById("panier");
const boutonPayer = document.getElementById("boutonPayer");
const totalSurTicket = document.getElementById("total");
const pseudoConnecte = localStorage.getItem("nomUtilisateurTrouve");
const etatConnexion = localStorage.getItem("etatConnexion");
const profilDiv = document.getElementById("profilDiv");
const chasseDiv = document.getElementById("chasseDiv");
const inputOption1 = document.querySelector("#choix1");
const inputOption2 = document.querySelector("#choix2");
const boutonOption = document.getElementById("boutonOption");
const divAPI = document.getElementById("API");
const divInscription = document.getElementById("inscription");
const divContact = document.getElementById("formulaire");
let profilsUtilisateurs =
  JSON.parse(localStorage.getItem("info_utilisateurs")) || [];
let LesQuetes = JSON.parse(localStorage.getItem("info_Quete")) || [];
let leTrainDesMessages = JSON.parse(localStorage.getItem("info_Train")) || [];
let messageTab = JSON.parse(localStorage.getItem("info_message")) || [];
// -----------------------------------simulation de base de donées
const lesProduits = [
  {
    id: "1",
    nom: "📜  Parchemin quete de truc",
    description: "parchemin pour acceder a la quete de truc",
    price: 2,
  },
  {
    id: "2",
    nom: "📜 parchemin quete de bidule",
    description: "parchemin pour acceder a la quete de bidule",
    price: 2,
  },
  {
    id: "3",
    nom: "📜 parchemin quete de machin",
    description: "parchemin pour acceder a la quete de machin",
    price: 2,
  },
  {
    id: "4",
    nom: "📜 parchemin quete de chouette",
    description: "parchemin pour acceder a la quete de chouette",
    price: 2,
  },
  {
    id: "5",
    nom: "mug lorthan",
    description: "Mug a l'effigie de LORTHAN",
    price: 20,
  },
  {
    id: "6",
    nom: "t-shirt lorthan",
    description: "T-shirt a l'effigie de LORTHAN",
    price: 20,
  },
];
const defaultProfils = [
  {
    id: 1,
    pseudo: "sangoku",
    mdp: "cacarot",
    email: "sangoku@mail.com",
    itemsIdsDansCaddy: [],
    itemsIdsPossede: [],
    itemsDuPasse: [],
    newsLetter: true,
    etreInforme: true,
  },
  {
    id: 2,
    pseudo: "vegeta",
    mdp: "begita",
    email: "vegeta@mail.com",
    itemsIdsDansCaddy: [],
    itemsIdsPossede: [],
    itemsDuPasse: [],
    newsLetter: false,
    etreInforme: false,
  },
];
const pagesDuSite = [
  {
    nom: "Accueil",
    url: "index.html",
    contenu:
      "Bonjour Voyageur Je suis Lorthan l’Insaisissable LE CHEMIN VERS LA GLOIRE1  Obtenez un Parchemin dans  2 Payer vos parchemin dans LE  3  Activez les chasses dans Rappelez-vous UN SEUL VAINQUEUR par chasse L' AVENTURE VOUS ATTEND !",
  },
  {
    nom: "PROFIL",
    url: "Profil.html",
    contenu:
      "Veuillez vous connecter pour voir vos items. Vous ne possedez aucun objet.",
  },
  {
    nom: "Tresor",
    url: "chasseautresor.html",
    contenu:
      "Veuillez vous connecter pour avoir access au quete. demarrer Continuer",
  },
  {
    nom: "Boutique",
    url: "boutique.html",
    contenu: "Boutique parchemin achat",
  },
  {
    nom: "Option",
    url: "option.html",
    contenu: "Adhérer à la newsletter Être informé des nouvelles harry potter",
  },
  {
    nom: "Contact",
    url: "contact.html",
    contenu: "formulaire de contact. envoyer message",
  },
  {
    nom: "inscription",
    url: "inscription.html",
    contenu: "inscription ",
  },
  {
    nom: "panier",
    url: "panier.html",
    contenu: "panier total payer",
  },
];
const fluxMessages = [
  { heure: "10:42", pseudo: "sangoku", nomQuete: "quete de truc" },
  { heure: "11:15", pseudo: "vegeta", nomQuete: "quete de bidule" },
  { heure: "12:30", pseudo: "Piccolo", nomQuete: "quete de machin" },
  { heure: "14:05", pseudo: "Lorthan", nomQuete: "quete de chouette" },
];
const messageContact = [
  {
    id: 1,
    date: "30/01/2025 20:12",
    nom: "sangoku",
    email: "sangoku@mail.com",
    titre: "Bonjour",
    contenu: "message par default pour dire bonjour",
  },
];
const Leschasses = [
  {
    id: 1,
    nom: "quete de truc",
    url: "truc.html",
    listeJoueurDemarré: [],
    listeJoueurFini: [],
  },
  {
    id: 2,
    nom: "quete de bidule",
    url: "bidule.html",
    listeJoueurDemarré: [],
    listeJoueurFini: [],
  },
  {
    id: 3,
    nom: "quete de machin",
    url: "machin.html",
    listeJoueurDemarré: [],
    listeJoueurFini: [],
  },
  {
    id: 4,
    nom: "quete de chouette",
    url: "chouette.html",
    listeJoueurDemarré: [],
    listeJoueurFini: [],
  },
];
// ---------------------------------------ensemble de fonction
function chargerPageInscription() {
  if (!divInscription) {
    return;
  }
  let lignePseudo = document.createElement("input");
  lignePseudo.classList.add("ligneFormulaire");
  lignePseudo.value = "";
  lignePseudo.style.color = "#635419fe";
  lignePseudo.placeholder = "Pseudo *";
  lignePseudo.style.backgroundColor = "goldenrod";
  let ligneMdp = document.createElement("input");
  ligneMdp.type = "password";
  ligneMdp.classList.add("ligneFormulaire");
  ligneMdp.placeholder = "Mot de passe *";
  ligneMdp.style.backgroundColor = "goldenrod";
  ligneMdp.style.color = "#635419fe";
  let ligneEmail = document.createElement("input");
  ligneEmail.type = "email";
  ligneEmail.classList.add("ligneFormulaire");
  ligneEmail.placeholder = "email *";
  ligneEmail.style.backgroundColor = "goldenrod";
  ligneEmail.style.color = "#635419fe";
  let ligneTitreChoix1 = document.createElement("p");
  ligneTitreChoix1.classList.add("ligneFormulaire");
  ligneTitreChoix1.innerText = "Aderer à la New Letter";
  ligneTitreChoix1.style.color = "goldenrod";
  let ligneChoix1 = document.createElement("input");
  ligneChoix1.type = "checkbox";
  ligneChoix1.classList.add("ligneFormulaire");
  ligneChoix1.checked = true;
  let ligneTitreChoix2 = document.createElement("p");
  ligneTitreChoix2.classList.add("ligneFormulaire");
  ligneTitreChoix2.innerText = "etre informé des nouvelles quetes";
  ligneTitreChoix2.style.color = "goldenrod";
  let ligneChoix2 = document.createElement("input");
  ligneChoix2.type = "checkbox";
  ligneChoix2.classList.add("ligneFormulaire");
  ligneChoix2.checked = true;
  let bouttonInscriptionValidation = document.createElement("button");
  bouttonInscriptionValidation.innerText = "Valider";
  bouttonInscriptionValidation.style.marginRight = "50px";
  divInscription.appendChild(lignePseudo);
  divInscription.appendChild(ligneMdp);
  divInscription.appendChild(ligneEmail);
  divInscription.appendChild(ligneTitreChoix1);
  divInscription.appendChild(ligneChoix1);
  divInscription.appendChild(ligneTitreChoix2);
  divInscription.appendChild(ligneChoix2);
  divInscription.appendChild(bouttonInscriptionValidation);
  bouttonInscriptionValidation.addEventListener("click", () => {
    const essaiPseudo = lignePseudo.value;
    const essaiemail = ligneEmail.value;
    const essaipassword = ligneMdp.value;
    const comparPseudo = profilsUtilisateurs.find(
      (profil) => profil.pseudo === essaiPseudo
    );
    const comparEmail = profilsUtilisateurs.find(
      (profil) => profil.email === essaiemail
    );
    if (comparPseudo || essaiPseudo === "") {
      alert("Ce pseudo est déjà utilisée !");
      return;
    }
    if (comparEmail || essaiemail === "" || !essaiemail.includes("@")) {
      alert("Cette email est déjà utilisée ! ou email invalide");
      return;
    }
    if (essaipassword.length < 8) {
      alert("Ce mot de passe est trop court ! 8 caractères minimum.");
      return;
    }
    profilsUtilisateurs.push({
      id: Date.now(),
      pseudo: lignePseudo.value,
      mdp: ligneMdp.value,
      email: ligneEmail.value,
      itemsIdsDansCaddy: [],
      itemsIdsPossede: [],
      itemsDuPasse: [],
      newsLetter: ligneChoix1.checked,
      etreInforme: ligneChoix2.checked,
    });
    sauvegarderUtilisateurs();
    alert("Inscription validée ! Vous pouvez vous connecter.");
    window.location.href = "index.html";
  });
}
function chargerFormulaireContact() {
  if (!divContact) {
    return;
  }
  if (etatConnexion !== "co" || !pseudoConnecte) {
    divContact.innerHTML =
      "<h2 style='color:goldenrod'>Veuillez vous connecter pour avoir access au formulaire de contact.</h2>";
    return;
  }
  const utilisateur = profilsUtilisateurs.find(
    (profil) => profil.pseudo === pseudoConnecte
  );
  divContact.innerHTML = "";
  let ligneNom = document.createElement("p");
  ligneNom.classList.add("ligneFormulaire");
  ligneNom.innerText = utilisateur.pseudo;
  ligneNom.style.color = "goldenrod";
  ligneNom.style.backgroundImage = "url(image/fondbandeausocial.png)";
  ligneNom.style.border = "solid 1px goldenrod";
  ligneNom.style.width = "260px";
  ligneNom.style.height = "30px";
  ligneNom.style.borderLeft = "solid 5px #3e3511fe";
  ligneNom.style.borderRight = "solid 5px #3e3511fe";
  ligneNom.style.borderTop = "solid 5px #3e3511fe";
  ligneNom.style.textAlign = "center";
  let ligneTitre = document.createElement("input");
  ligneTitre.classList.add("ligneFormulaire");
  ligneTitre.placeholder = "Titre *";
  ligneTitre.style.backgroundColor = "goldenrod";
  ligneTitre.style.color = "#635419fe";
  ligneTitre.style.width = "260px";
  ligneTitre.style.borderLeft = "solid 5px #3e3511fe";
  ligneTitre.style.borderRight = "solid 5px #3e3511fe";
  let lignecontenue = document.createElement("textarea");
  lignecontenue.classList.add("ligneFormulaire");
  lignecontenue.placeholder = "Message *";
  lignecontenue.style.backgroundColor = "goldenrod";
  lignecontenue.style.color = "#635419fe";
  lignecontenue.style.width = "260px";
  lignecontenue.style.maxWidth = "260px";
  lignecontenue.style.minWidth = "260px";
  lignecontenue.style.borderLeft = "solid 5px #3e3511fe";
  lignecontenue.style.borderRight = "solid 5px #3e3511fe";
  lignecontenue.style.borderBottom = "solid 5px #3e3511fe";
  lignecontenue.style.height = "150px";
  lignecontenue.style.maxHeight = "150px";
  lignecontenue.style.minHeight = "150px";
  let ligneBoutton = document.createElement("button");
  ligneBoutton.classList.add("ligneFormulaire");
  ligneBoutton.innerText = "Envoyer";
  divContact.appendChild(ligneNom);
  divContact.appendChild(ligneTitre);
  divContact.appendChild(lignecontenue);
  divContact.appendChild(ligneBoutton);
  ligneBoutton.addEventListener("click", () => {
    if (ligneTitre.value === "" || lignecontenue.value === "") {
      alert("Veuillez remplir les champs * !");
      return;
    }
    const maintenant = new Date();
    const maintenantAjuste =
      maintenant.getDate() +
      "/" +
      maintenant.getHours() +
      ":" +
      (maintenant.getMinutes() < 10 ? "0" : "") +
      maintenant.getMinutes();
    messageTab.push({
      id: Date.now(),
      date: maintenantAjuste,
      nom: utilisateur.pseudo,
      email: utilisateur.email,
      titre: ligneTitre.value,
      contenu: lignecontenue.value,
    });
    sauvegarderMessage();
    ligneTitre.value = "";
    ligneTitre.placeholder = "Titre";
    lignecontenue.value = "";
    lignecontenue.placeholder = "Message";
    alert("Message envoyer !");
  });
}
async function recupererPersonnageHP() {
  if (!divAPI) {
    return;
  }
  let personnagesListe;
  let personnagesdefault = 0;
  const personnagesListeResult = await fetch(
    "https://hp-api.onrender.com/api/characters"
  );
  if (!personnagesListeResult) {
    return;
  }
  personnagesListe = await personnagesListeResult.json();
  const urlImage = personnagesListe[personnagesdefault].image;
  let bouttonGauche = document.createElement("button");
  bouttonGauche.classList.add("objetApi");
  bouttonGauche.innerText = "⏴";
  bouttonGauche.style.margin = 0;
  let caseDuMilieu = document.createElement("div");
  caseDuMilieu.classList.add("objetApi");
  caseDuMilieu.id = "caseDuMilieu";
  let nomPersonnage = document.createElement("h2");
  nomPersonnage.classList.add("objetApi");
  nomPersonnage.innerText = personnagesListe[personnagesdefault].name;
  let imagePersonnage = document.createElement("img");
  imagePersonnage.classList.add("objetApi");
  imagePersonnage.onerror = function () {
    this.src = "image/chatsecoure.png";
  };
  if (urlImage !== "") {
    imagePersonnage.src = urlImage;
  } else {
    imagePersonnage.src = "image/chatsecoure.png";
  }
  imagePersonnage.style.height = "300px";
  imagePersonnage.style.width = "200px";
  imagePersonnage.style.objectFit = "cover";
  let positionPersonnage = document.createElement("p");
  positionPersonnage.classList.add("objetApi");
  positionPersonnage.innerText =
    personnagesdefault + 1 + "/" + personnagesListe.length;
  positionPersonnage.style.marginBottom = "10px";
  let search = document.createElement("input");
  search.setAttribute("placeholder", "Entrez nom rechercher");
  search.style.backgroundColor = "goldenrod";
  search.style.color = "#635419fe";
  search.style.borderRadius = "15px";
  let bouttonDroite = document.createElement("button");
  bouttonDroite.classList.add("objetApi");
  bouttonDroite.innerText = "	⏵";
  bouttonDroite.style.margin = 0;

  function majBouton() {
    if (personnagesdefault === 0) {
      bouttonGauche.disabled = true;
    } else {
      bouttonGauche.disabled = false;
    }
    if (personnagesdefault === personnagesListe.length - 1) {
      bouttonDroite.disabled = true;
    } else {
      bouttonDroite.disabled = false;
    }
  }
  bouttonGauche.addEventListener("click", () => {
    personnagesdefault = personnagesdefault - 1;
    nomPersonnage.innerText = personnagesListe[personnagesdefault].name;
    imagePersonnage.src = personnagesListe[personnagesdefault].image;
    positionPersonnage.innerText =
      personnagesdefault + 1 + "/" + personnagesListe.length;
    majBouton();
  });
  bouttonDroite.addEventListener("click", () => {
    personnagesdefault = personnagesdefault + 1;
    nomPersonnage.innerText = personnagesListe[personnagesdefault].name;
    imagePersonnage.src = personnagesListe[personnagesdefault].image;
    positionPersonnage.innerText =
      personnagesdefault + 1 + "/" + personnagesListe.length;
    majBouton();
  });
  search.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      const hpChercher = search.value.toLowerCase();
      const hpResultats = personnagesListe.findIndex((personnage) =>
        personnage.name.toLowerCase().includes(hpChercher)
      );
      if (hpResultats !== -1) {
        personnagesdefault = hpResultats;
        nomPersonnage.innerText = personnagesListe[personnagesdefault].name;
        imagePersonnage.src = personnagesListe[personnagesdefault].image;
        positionPersonnage.innerText =
          personnagesdefault + 1 + "/" + personnagesListe.length;
        majBouton();
      } else {
        alert("Désolé, aucun personnage n'a ce nom.");
      }
    }
  });
  const boiteSuggestions = document.createElement("div");
  boiteSuggestions.style.position = "absolute";
  boiteSuggestions.style.backgroundColor = "white";
  boiteSuggestions.style.border = "1px solid black";
  boiteSuggestions.style.zIndex = "1000";
  boiteSuggestions.style.width = "260px";
  boiteSuggestions.style.bottom = "-100px";
  caseDuMilieu.appendChild(boiteSuggestions);
  search.addEventListener("input", () => {
    boiteSuggestions.innerHTML = "";
    const texte = search.value.toLowerCase();
    if (texte.length === 0) return;
    const resultats = personnagesListe.filter((p) =>
      p.name.toLowerCase().includes(texte)
    );
    resultats.slice(0, 3).forEach((personnageTrouve) => {
      const ligne = document.createElement("div");
      ligne.innerText = personnageTrouve.name;
      ligne.style.padding = "5px";
      ligne.style.border = "1px solid goldenrod";
      ligne.style.backgroundImage = "url(image/fondbandeausocial.png)";
      ligne.addEventListener("click", () => {
        const indexReel = personnagesListe.indexOf(personnageTrouve);
        personnagesdefault = indexReel;
        nomPersonnage.innerText = personnagesListe[personnagesdefault].name;
        imagePersonnage.src = personnagesListe[personnagesdefault].image;
        positionPersonnage.innerText =
          personnagesdefault + 1 + "/" + personnagesListe.length;
        majBouton();
        search.value = "";
        boiteSuggestions.innerHTML = "";
      });
      boiteSuggestions.appendChild(ligne);
    });
  });
  divAPI.appendChild(bouttonGauche);
  majBouton();
  divAPI.appendChild(caseDuMilieu);
  caseDuMilieu.appendChild(nomPersonnage);
  caseDuMilieu.appendChild(imagePersonnage);
  caseDuMilieu.appendChild(positionPersonnage);
  caseDuMilieu.appendChild(search);
  divAPI.appendChild(bouttonDroite);
}
function optionChoix() {
  if (!boutonOption) return;
  if (etatConnexion !== "co") {
    boutonOption.disabled = true;
  }
  boutonOption.addEventListener("click", () => {
    if (!pseudoConnecte) {
      alert("Veuillez vous connecter pour modifier vos options.");
      return;
    }
    const utilisateur = profilsUtilisateurs.find(
      (profil) => profil.pseudo === pseudoConnecte
    );
    if (!utilisateur) {
      return;
    }
    utilisateur.newsLetter = inputOption1.checked;
    utilisateur.etreInforme = inputOption2.checked;
    sauvegarderUtilisateurs();
    alert("Préférences sauvegardées !");
  });
}
function chargerLesChasses() {
  if (!chasseDiv) {
    return;
  }
  if (etatConnexion !== "co" || !pseudoConnecte) {
    chasseDiv.innerHTML =
      "<h2 style='color:goldenrod'>Veuillez vous connecter pour avoir access au quete.</h2>";
    return;
  }
  const utilisateur = profilsUtilisateurs.find(
    (profil) => profil.pseudo === pseudoConnecte
  );
  chasseDiv.innerHTML = "";
  chasseDiv.style.borderRadius = "15px";
  LesQuetes.forEach((quete) => {
    let lignequete = document.createElement("div");
    lignequete.classList.add("ligne-quete");
    lignequete.innerHTML = `
        <span><strong>${quete.nom}</strong></span>
      `;
    let lignequete2 = document.createElement("div");
    lignequete.classList.add("ligne-quete");
    lignequete.innerHTML = `
      <span><strong>${quete.nom}</strong></span>
      `;
    lignequete2.style.marginBottom = "10px";
    let btnvalidation = document.createElement("button");
    btnvalidation.innerText = "Démarrer";
    if (quete.listeJoueurDemarré.includes(utilisateur.id)) {
      btnvalidation.innerText = "Continuer";
    }
    btnvalidation.style.marginLeft = "10px";
    btnvalidation.addEventListener("click", () => {
      if (quete.listeJoueurDemarré.includes(utilisateur.id)) {
        if (quete.url) {
          window.open(quete.url, "_blank");
        }
        return;
      }
      const maintenant = new Date();
      const maintenantAjuste =
        maintenant.getHours() +
        ":" +
        (maintenant.getMinutes() < 10 ? "0" : "") +
        maintenant.getMinutes();
      const releveDeDate = {
        heure: maintenantAjuste,
        pseudo: utilisateur.pseudo,
        nomQuete: quete.nom,
      };
      leTrainDesMessages.push(releveDeDate);
      const idParcheminNecessaire = quete.id.toString();
      const indexParchemin = utilisateur.itemsIdsPossede.indexOf(
        idParcheminNecessaire
      );
      if (indexParchemin !== -1) {
        utilisateur.itemsIdsPossede.splice(indexParchemin, 1);
        utilisateur.itemsDuPasse.push(idParcheminNecessaire);
        quete.listeJoueurDemarré.push(utilisateur.id);
        sauvegarderUtilisateurs();
        sauvegarderQuetes();
        sauvegarderTrain();
        leTrainNewLetter();
        alert(`Parchemin utilisé ! Bonne chance pour la ${quete.nom}...`);
        if (quete.url) {
          window.open(quete.url, "_blank");
          window.location.reload();
        } else {
          console.log("Erreur : Pas d'URL définie pour cette chasse");
        }
      } else {
        alert(
          "🔒 Vous n'avez pas le parchemin requis ! Allez l'acheter à la BOUTIQUE et valider l'achat dans votre Panier."
        );
      }
    });
    lignequete2.appendChild(btnvalidation);
    chasseDiv.appendChild(lignequete);
    chasseDiv.appendChild(lignequete2);
  });
}
function receptionRecherche() {
  if (leBoutonGo) {
    leBoutonGo.addEventListener("click", () => lancerRecherche());
    inputRechercher.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        lancerRecherche();
      }
    });
  }
}
function lancerRecherche() {
  const motCherche = inputRechercher.value.toLowerCase();
  const resultats = pagesDuSite.filter((page) =>
    page.contenu.toLowerCase().includes(motCherche)
  );
  if (resultats.length > 0) {
    window.location.href = resultats[0].url;
  } else {
    alert("Désolé, aucune page ne contient ce mot.");
  }
}
function receptionValidation() {
  if (leBoutonLogin) {
    leBoutonLogin.addEventListener("click", () => lancerConnexion());
  }
  if (inputPassword) {
    inputPassword.addEventListener("keydown", (event) => {
      if (event.key === "Enter") lancerConnexion();
    });
  }
  if (inputPseudo) {
    inputPseudo.addEventListener("keydown", (event) => {
      if (event.key === "Enter") lancerConnexion();
    });
  }
}
function lancerConnexion() {
  let utilisateurTrouve = 0;
  profilsUtilisateurs.forEach((utilisateur) => {
    if (
      utilisateur.pseudo === inputPseudo.value &&
      utilisateur.mdp === inputPassword.value
    ) {
      localStorage.setItem("etatConnexion", "co");
      localStorage.setItem("nomUtilisateurTrouve", utilisateur.pseudo);
      window.location.reload();
      utilisateurTrouve = 1;
    }
  });
  if (utilisateurTrouve === 0) {
    alert("Login ou MDP incorect !!");
  }
}
function deconnexion() {
  if (leboutonLogOut) {
    leboutonLogOut.addEventListener("click", () => {
      localStorage.setItem("etatConnexion", "deco");
      localStorage.removeItem("nomUtilisateurTrouve");
      window.location.reload();
    });
  }
}
function verifierEtatConnexion() {
  if (etatConnexion === "co") {
    if (inputPseudo) inputPseudo.style.display = "none";
    if (inputPassword) inputPassword.style.display = "none";
    if (leBoutonLogin) leBoutonLogin.style.display = "none";
    if (divPseudoConfirme)
      divPseudoConfirme.innerText = `-   Bienvenue ${pseudoConnecte}   -`;
    if (leboutonLogOut) leboutonLogOut.style.display = "block";
  } else {
    if (inputPseudo) inputPseudo.style.display = "block";
    if (inputPassword) inputPassword.style.display = "block";
    if (leBoutonLogin) leBoutonLogin.style.display = "block";
    if (divPseudoConfirme) divPseudoConfirme.innerText = "";
    if (leboutonLogOut) leboutonLogOut.style.display = "none";
  }
}
function leTrainNewLetter() {
  let phrase = "";
  leTrainDesMessages.forEach((info) => {
    phrase += ` | ${info.heure} : Le joueur ${info.pseudo} a démarré la ${info.nomQuete} - Bonne chasse !! | `;
  });
  if (trainNewLetter) {
    trainNewLetter.innerText = phrase;
  }
}
// le mot clef concerne l'animation des images de clefs
function sortieDeClef() {
  tousLesConteneurs.forEach((nav) => {
    const clef = nav.querySelector(".clef");
    const bouttonNav = nav.querySelector(".bouttonNav");
    if (bouttonNav && clef) {
      bouttonNav.addEventListener("mouseover", () => {
        clef.style.marginLeft = "200px";
      });
      bouttonNav.addEventListener("mouseleave", () => {
        clef.style.marginLeft = "0px";
      });
    }
  });
}
function sauvegarderUtilisateurs() {
  localStorage.setItem(
    "info_utilisateurs",
    JSON.stringify(profilsUtilisateurs)
  );
}
function sauvegarderMessage() {
  localStorage.setItem("info_message", JSON.stringify(messageTab));
}
function sauvegarderQuetes() {
  localStorage.setItem("info_Quete", JSON.stringify(LesQuetes));
}
function sauvegarderTrain() {
  localStorage.setItem("info_Train", JSON.stringify(leTrainDesMessages));
}
function chargerLePanier() {
  if (etatConnexion !== "co" || !pseudoConnecte) {
    panierDiv.innerHTML =
      "<h2 style='color:goldenrod'>Veuillez vous connecter pour voir votre panier.</h2>";
    if (boutonPayer) boutonPayer.style.display = "none";
    return;
  }
  const utilisateur = profilsUtilisateurs.find(
    (profil) => profil.pseudo === pseudoConnecte
  );
  panierDiv.innerHTML = "";
  if (!utilisateur || utilisateur.itemsIdsDansCaddy.length === 0) {
    panierDiv.innerHTML =
      "<h2 style='color:goldenrod'>Votre panier est vide.</h2>";
    if (boutonPayer) boutonPayer.style.display = "none";
    return;
  }
  let totalPrixPanier = 0;
  utilisateur.itemsIdsDansCaddy.forEach((idDansPanier, indexTableau) => {
    const produitReel = lesProduits.find(
      (article) => article.id == idDansPanier
    );
    if (produitReel) {
      totalPrixPanier += produitReel.price;
      let lignePanier = document.createElement("div");
      lignePanier.classList.add("ligne-panier");
      lignePanier.innerHTML = `
        <span><strong>${produitReel.nom}</strong></span>
        <span>${produitReel.price} €</span>
      `;
      let btnSupprimer = document.createElement("button");
      btnSupprimer.innerText = "❌";
      btnSupprimer.style.marginLeft = "10px";
      btnSupprimer.addEventListener("click", () => {
        retirerDuPanier(utilisateur, indexTableau);
      });
      lignePanier.appendChild(btnSupprimer);
      panierDiv.appendChild(lignePanier);
    }
  });
  let divTotal = document.createElement("div");
  divTotal.classList.add("divTotal");
  divTotal.innerHTML = `<strong>Total à payer : ${totalPrixPanier} €</strong>`;
  panierDiv.appendChild(divTotal);
  if (boutonPayer) boutonPayer.style.display = "block";
}
function retirerDuPanier(utilisateur, indexATuer) {
  utilisateur.itemsIdsDansCaddy.splice(indexATuer, 1);
  sauvegarderUtilisateurs();
  chargerLePanier();
}
function chargerItemProfil() {
  if (window.location.pathname.includes("Profil.html")) {
    if (!profilDiv) return;
    if (etatConnexion !== "co" || !pseudoConnecte) {
      profilDiv.innerHTML =
        "<h2 style='color:goldenrod'>Veuillez vous connecter pour voir vos items.</h2>";
      return;
    }
    const utilisateur = profilsUtilisateurs.find(
      (profil) => profil.pseudo === pseudoConnecte
    );
    profilDiv.innerHTML = "";
    if (!utilisateur || utilisateur.itemsIdsPossede.length === 0) {
      profilDiv.innerHTML =
        "<h2 style='color:goldenrod'>Vous ne possedez aucun objet.</h2>";
      return;
    }
    utilisateur.itemsIdsPossede.forEach((idDansPossede) => {
      const produitPossede = lesProduits.find(
        (item) => item.id === idDansPossede
      );

      if (produitPossede) {
        let ligneProfil = document.createElement("div");
        ligneProfil.classList.add("ligne-profil");
        ligneProfil.innerHTML = `<span><strong>${produitPossede.nom}</strong></span>  `;
        profilDiv.appendChild(ligneProfil);
      }
    });
  }
}
function chargerVitrineBoutique() {
  let totalAsString = localStorage.getItem("total") || "0";
  if (totalSurTicket)
    totalSurTicket.innerText = `Total a payer : ${totalAsString} €`;
  if (produitsList) {
    lesProduits.forEach((produit) => {
      let caseProduit = document.createElement("div");
      caseProduit.classList.add("case-Produit");
      let produitNom = document.createElement("div");
      produitNom.classList.add("produit-nom");
      produitNom.innerText = produit.nom;
      let produitDescription = document.createElement("div");
      produitDescription.classList.add("produit-Description");
      produitDescription.innerText = produit.description;
      let produitAction = document.createElement("div");
      produitAction.classList.add("produit-action");
      let produitPrice = document.createElement("div");
      produitPrice.classList.add("produit-price");
      produitPrice.innerText = produit.price + " €";
      let addToPanier = document.createElement("button");
      addToPanier.classList.add("add-to-panier");
      addToPanier.innerText = "🛒";
      addToPanier.addEventListener("click", () => {
        if (etatConnexion !== "co" || !pseudoConnecte) {
          alert("Vous devez être connecté pour acheter des objets !");
          return;
        }
        const utilisateur = profilsUtilisateurs.find(
          (Profil) => Profil.pseudo === pseudoConnecte
        );
        if (utilisateur) {
          if (
            utilisateur.itemsDuPasse.includes(produit.id) ||
            utilisateur.itemsIdsPossede.includes(produit.id) ||
            utilisateur.itemsIdsDansCaddy.includes(produit.id)
          ) {
            alert(
              "Vous possédez déjà cet objet ! \n Ou il est dans votre panier."
            );
            return;
          }
          utilisateur.itemsIdsDansCaddy.push(produit.id);
          sauvegarderUtilisateurs();
          alert(`${produit.nom} ajouté au panier de ${utilisateur.pseudo} !`);
        }
      });
      produitAction.appendChild(produitPrice);
      produitAction.appendChild(addToPanier);
      caseProduit.appendChild(produitNom);
      caseProduit.appendChild(produitDescription);
      caseProduit.appendChild(produitAction);
      produitsList.appendChild(caseProduit);
    });
  }
}
function Paiement() {
  if (boutonPayer) {
    boutonPayer.addEventListener("click", () => {
      const utilisateur = profilsUtilisateurs.find(
        (profil) => profil.pseudo === pseudoConnecte
      );
      if (utilisateur && utilisateur.itemsIdsDansCaddy.length > 0) {
        utilisateur.itemsIdsPossede = utilisateur.itemsIdsPossede.concat(
          utilisateur.itemsIdsDansCaddy
        );
        utilisateur.itemsIdsDansCaddy = [];
        sauvegarderUtilisateurs();
        alert(
          "Merci pour votre achat ! Les objets sont maintenant dans votre inventaire."
        );
        window.location.href = "Profil.html";
      }
    });
  }
}
// --------------------------------------sequance main
verifierEtatConnexion();
if (profilsUtilisateurs.length === 0) {
  profilsUtilisateurs = defaultProfils;
  sauvegarderUtilisateurs();
}
if (messageTab.length === 0) {
  messageTab = messageContact;
  sauvegarderMessage();
}
if (LesQuetes.length === 0) {
  LesQuetes = Leschasses;
  sauvegarderQuetes();
}
if (leTrainDesMessages.length === 0) {
  leTrainDesMessages = fluxMessages;
  sauvegarderTrain();
}
if (panierDiv) {
  chargerLePanier();
}
receptionRecherche();
receptionValidation();
deconnexion();
leTrainNewLetter();
sortieDeClef();
chargerVitrineBoutique();
chargerItemProfil();
Paiement();
chargerLesChasses();
optionChoix();
recupererPersonnageHP();
chargerFormulaireContact();
chargerPageInscription();
