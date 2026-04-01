// ------------------------------------------------------------------------------------------------------------------------- les imports de tableau d'autre fichier

import { users } from "./data";

// ------------------------------------------------------------------------------------------------------------------------- afficher les utilisateurs du tableau users
function displayUser(users) {
  let phrase = "\n-->  ";
  if (users.length === 0) {
    console.log("il n'y a personne ici");
    return;
  } else {
    users.forEach((user, index) => {
      if (index === user.length - 1) {
        phrase = phrase + user.userName + "";
      } else {
        phrase = phrase + user.userName + " -- ";
      }
    });
  }
  console.log(phrase);
}

// ------------------------------------------------------------------------------------------------------------------------- ajouter un utilisateur

function addUser(id, userName, email, password, role) {
  let phrase2 = "\n-->  ";
  const array = users.some((user) => {
    if (id === user.id) {
      console.log("\nId déjà existant.");
      return 1;
    }
    if (userName === user.userName) {
      console.log("\nUserName déjà existant.");
      return 1;
    }
  });
  if (array) {
    return;
  }
  users.push({
    id: id,
    userName: userName,
    email: email,
    password: password,
    role: role,
  });
  phrase2 = phrase2 + `L'utilisateur ${userName} ` + "à été ajouté .";
  console.log(phrase2);
  displayUser(users);
  totalId = totalId + 1;
}

// -------------------------------------------------------------------------------------------------------------------------mettre a jour un nom d'utilisateur

function updateUsername(indice, newUserName) {
  if (typeof indice === "number") {
    let phraseUserTrouve = "";
    let userTrouve = 0;
    users.forEach((user) => {
      if (indice === user.id) {
        phraseUserTrouve =
          phraseUserTrouve + " \n" + user.userName + "-id-" + user.id;
        userTrouve = userTrouve + 1;
      }
    });

    if (userTrouve > 1) {
      console.log("\nListe ayant id similaire " + `${phraseUserTrouve}`);
    }
    if (userTrouve === 1) {
      users.forEach((user) => {
        if (indice === user.id) {
          user.userName = newUserName;
        }
      });
      console.log(`\nL'utilisateur ${indice} à été update en ${newUserName}.`);
    }
    if (userTrouve === 0) {
      console.log(`\nAucune correspondance avec cette id.`);
    }
    displayUser(users);
    return;
  }

  if (typeof indice === "string") {
    let phraseUserTrouve = "";
    let userTrouve = 0;
    users.forEach((user) => {
      if (indice === user.userName) {
        phraseUserTrouve = phraseUserTrouve + " \n" + user.userName;
        userTrouve = userTrouve + 1;
      }
    });

    if (userTrouve > 1) {
      console.log(
        "\nListe ayant un userName similaire " + `${phraseUserTrouve}`
      );
    }
    if (userTrouve === 1) {
      users.forEach((user) => {
        if (indice === user.userName) {
          user.userName = newUserName;
        }
      });
      console.log(`\nL'utilisateur ${indice} à été update en ${newUserName}.`);
    }
    if (userTrouve === 0) {
      console.log(`\nAucune correspondance avec ce userName.`);
    }
  }
  displayUser(users);
}

// -------------------------------------------------------------------------------------------------------------------------supprimer un utilisateur

function deleteUser(indice) {
  let phraseTrouve = "";
  let nomTrouve = 0;
  if (typeof indice === "number") {
    users.forEach((user) => {
      if (indice === user.id) {
        phraseTrouve = phraseTrouve + "\n" + user.userName;
        nomTrouve = nomTrouve + 1;
      }
    });
    if (nomTrouve > 1) {
      console.log(
        "\nListe utilisateurs ayant un id similaire " + "\n" + `${phraseTrouve}`
      );
    }
    if (nomTrouve === 1) {
      users.forEach((user, index) => {
        if (indice === user.id) {
          console.log(`l'utilisateur ${user.userName} est supprimé .`);
          users.splice(index, 1);
        }
      });
    }
    if (nomTrouve === 0) {
      console.log(`\nAucune correspondance avec cette id.`);
    }
  }

  if (typeof indice === "string") {
    users.forEach((user) => {
      if (indice === user.userName) {
        phraseTrouve = phraseTrouve + "\n" + user.userName;
        nomTrouve = nomTrouve + 1;
      }
    });

    if (nomTrouve > 1) {
      console.log(
        "\nListe ayant un userName similaire " + "\n" + `${phraseTrouve} `
      );
    }

    if (nomTrouve === 1) {
      users.forEach((user, index) => {
        if (indice === user.userName) {
          console.log(`\nl'utilisateur ${user.userName} est supprimé .`);
          users.splice(index, 1);
        }
      });
    }

    if (nomTrouve === 0) {
      console.log(`\nAucune correspondance avec ce userName.`);
    }
  }
  displayUser(users);
}

// ------------------------------------------------------------------------------------------------------------------------- afficher les membre d'un role
function getrole(role) {
  let liste = " ";
  let compo = 0;
  const tabRole = users.filter((user) => {
    if (role === user.role) {
      liste = liste + "\n " + user.userName + "-id-" + user.id;
      compo = compo + 1;
    }
  });
  if (compo > 0) {
    console.log(
      `\nListe des ${role} : \n ${liste} \n\nSoit : ${compo} personnes.\n`
    );
  } else {
    console.log("il n'y a aucune personne à ce role.");
  }
}

// ------------------------------------------------------------------------------------------------------------------------- recuperer le texte d'une recherche et le comparer a la bd

function receptionRecherche(champTexte, leBouton) {
  leBouton.addEventListener("click", (event) => {
    event.preventDefault();
    const motCherche = champTexte.value.toLowerCase();
    const resultats = pagesDuSite.filter((page) => {
      return page.contenu.includes(motCherche);
    });
    console.log("Pages trouvées :", resultats);
  });
}
// ------------------------------------------------------------------------------------------------------------------------- lancement des fonctions

let totalId = 6;
// addUser(totalId, "benjamin", "benjamin.zahavi@hotmail.fr", "12354689", "admin");
// addUser(
//   totalId,
//   "karine",
//   "karine.brindejonc@hotmail.fr",
//   "12354689",
//   "visitor"
// );
// updateUsername("userName2", "ben-j");
// displayUser(users);
// deleteUser("userName22");
// console.log(users);
getrole("admin");
