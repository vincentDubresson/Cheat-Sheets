// ////////////////////////////////////////////////////////////////////////////////
/*                                                                               */
/*                         LINTER ET FORMATTER SON CODE                          */
/*                                                                               */
// ////////////////////////////////////////////////////////////////////////////////

// Linter grâce à ESLINTER

/**
 * Installation
 *  1 - Vérifier la version de npm
 *       npm --version
 *  2 - Initialiser un projet (dans le répertoire du projet)
 *       npm init -y
 *  3 - Installer (localement dans un premier temps) ESLint
 *       npm install eslint --save-dev
 *  4 - Configurer ESLint (voir https://odyssey.wildcodeschool.com/quests/1387)
 *       npx eslint --init
 *  5 - Et voilà !
 *  Utilisation
 *  Pour linter son fichier js, utiliser la commande : npx eslint 'NOM_FICHIER'.js.
 *  Pour supprimer une règle, aller dans .eslintrc.json et l'ajouter dans la partie "rules"
 *  ex :    "rules": {
 *            "indent": 0
 *          }
 * Utilisation
 */

// Exemple de lint

// Mauvaise pratique
var number = 2;

function doubleIt(value) {
    return value * 2;
}

doubleIt(number);

// Bonne pratique
const otherNumber = 2;

function tripleIt(value) {
    return value * 3;
}

tripleIt(otherNumber);

// Formater notre code grâce à Prettier

/**
 * Installation
 * 1 - S'assurer que eslint est installé (dans le package.json)
 * 2 - Installer localement prettier
 *      npm install prettier --save-dev
 * 3 - Installer les paquets pour la liaison avec eslint
 *      npm install --save-dev eslint-config-prettier eslint-plugin-prettier
 * 4 - Modifier le fichier .eslintrc.json comme suit
 *      {
 *          "env": {
 *              "browser": true,
 *              "es2021": true
 *          },
 *          "extends": [
 *              "airbnb-base",
 *              "prettier"
 *          ],
 *          "plugins": ["prettier"],
 *          "parserOptions": {
 *              "ecmaVersion": 12,
 *              "sourceType": "module"
 *          },
 *          "rules": {
 *              "prettier/prettier": ["error"]
 *          }
 *      }
 * 5 - Créer un fichier .prettierrc.json dans lequel on rajoute les lignes suivantes
 *      {
 *          "trailingComma": "es5",
 *          "tabWidth": 4,
 *          "semi": true,
 *          "singleQuote": true
 *      }
 * Utilisation
 * Pour formatter le code utiliser cette commande : npx prettier --write 'NOM_FICHIER'.js
 * pour un seul fichier ou npx prettier --write pour tous les fichiers du projet.
 */
