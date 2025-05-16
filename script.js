const aliments = [
  { categorie: "Féculents, Pain, Légumes Secs", aliment: "Polenta", glucides: 15 },
  { categorie: "Féculents, Pain, Légumes Secs", aliment: "Boulgour", glucides: 20 },
  { categorie: "Féculents, Pain, Légumes Secs", aliment: "Purée PDT", glucides: 15 },
  { categorie: "Féculents, Pain, Légumes Secs", aliment: "Quinoa", glucides: 25 },
  { categorie: "Féculents, Pain, Légumes Secs", aliment: "Mais", glucides: 18 },
  { categorie: "Féculents, Pain, Légumes Secs", aliment: "Pomme de terre", glucides: 20 },
  { categorie: "Féculents, Pain, Légumes Secs", aliment: "Pâtes", glucides: 25 },
  { categorie: "Féculents, Pain, Légumes Secs", aliment: "Riz, semoule, blé, gnocchi", glucides: 30 },
  { categorie: "Féculents, Pain, Légumes Secs", aliment: "Frites", glucides: 35 },
  { categorie: "Féculents, Pain, Légumes Secs", aliment: "Pain", glucides: 50 },
  { categorie: "Féculents, Pain, Légumes Secs", aliment: "Fèves", glucides: 15 },
  { categorie: "Féculents, Pain, Légumes Secs", aliment: "Flageolets", glucides: 15 },
  { categorie: "Féculents, Pain, Légumes Secs", aliment: "Haricots blancs et rouges", glucides: 15 },
  { categorie: "Féculents, Pain, Légumes Secs", aliment: "Lentilles", glucides: 15 },
  { categorie: "Féculents, Pain, Légumes Secs", aliment: "Pois cassés", glucides: 15 },
  { categorie: "Féculents, Pain, Légumes Secs", aliment: "Pois chiches", glucides: 15 }
];

const portions = [
  { categorie: "Fruits", aliment: "1 pomme", glucides: 15 },
  { categorie: "Fruits", aliment: "1 poire", glucides: 15 },
  { categorie: "Fruits", aliment: "1 coing", glucides: 15 },
  { categorie: "Fruits", aliment: "2 kiwis", glucides: 15 },
  { categorie: "Fruits", aliment: "1 pamplemousse", glucides: 15 },
  { categorie: "Fruits", aliment: "1 orange", glucides: 15 },
  { categorie: "Fruits", aliment: "2 à 3 clémentines (selon la taille)", glucides: 15 },
  { categorie: "Fruits", aliment: "1 petite banane", glucides: 15 },
  { categorie: "Fruits", aliment: "1 barquette de fraises (250 g)", glucides: 15 },
  { categorie: "Fruits", aliment: "2 barquettes de framboises (2 x 125 g)", glucides: 15 },
  { categorie: "Fruits", aliment: "0.5 petit melon ou ⅛ d'un gros", glucides: 15 },
  { categorie: "Fruits", aliment: "1/6ème de pastèque", glucides: 15 },
  { categorie: "Fruits", aliment: "1/6ème d'ananas", glucides: 15 },
  { categorie: "Fruits", aliment: "3 à 4 abricots (selon la taille)", glucides: 15 },
  { categorie: "Fruits", aliment: "1 pêche", glucides: 15 },
  { categorie: "Fruits", aliment: "1 brugnon", glucides: 15 },
  { categorie: "Fruits", aliment: "1 nectarine", glucides: 15 },
  { categorie: "Fruits", aliment: "4 prunes ou 4 quetsches ou 4 reine claude", glucides: 15 },
  { categorie: "Fruits", aliment: "10 à 12 mirabelles", glucides: 15 },
  { categorie: "Fruits", aliment: "15 cerises", glucides: 15 },
  { categorie: "Fruits", aliment: "1 petite grappe de raisin (10 à 15 grains)", glucides: 15 },
  { categorie: "Fruits", aliment: "6 litchis", glucides: 15 },
  { categorie: "Fruits", aliment: "0.5 petite mangue", glucides: 15 },
  { categorie: "Fruits", aliment: "2 à 3 figues fraîches", glucides: 15 },
  { categorie: "Fruits", aliment: "5 dattes fraîches", glucides: 15 },
  { categorie: "Fruits", aliment: "2 figues sèches", glucides: 15 },
  { categorie: "Fruits", aliment: "2 dattes sèches", glucides: 15 },
  { categorie: "Fruits", aliment: "2 à 3 pruneaux", glucides: 15 }
  // ... etc, garde toute ta liste ici ...
];

const produitsLaitiers = [
  { categorie: "Produits Laitiers", aliment: "Yaourt Nature", glucides: 5 },
  { categorie: "Produits Laitiers", aliment: "Yaourt aromatisé", glucides: 10 },
  { categorie: "Produits Laitiers", aliment: "Yaourt avec fruits", glucides: 15 }
];

// Conteneurs principaux pour ajouter les cartes
const repasContainer = document.getElementById("repas-body");
const portionContainer = document.getElementById("portion-body");
const laitierContainer = document.getElementById("laitier-body");

// Fonction pour créer carte aliment (féculents, etc)
function creerCarteAliment() {
  const card = document.createElement("div");
  card.className = "card aliment-card";

  card.innerHTML = `
    <label>
      Catégorie
      <input type="text" class="categorie" readonly>
    </label>
    <label>
      Aliment
      <select class="select-aliment">
        <option value="">-- Choisir --</option>
        ${aliments.map(a => `<option value="${a.aliment}" data-cat="${a.categorie}" data-glucides="${a.glucides}">${a.aliment}</option>`).join("")}
      </select>
    </label>
    <label>
      Quantité (g)
      <input type="number" class="quantite" min="0" value="0">
    </label>
    <label>
      Glucides / 100g
      <input type="number" class="glucides-unit" readonly>
    </label>
    <label>
      Glucides consommés
      <input type="number" class="glucides-total" readonly>
    </label>
    <button class="delete-row">❌ Supprimer</button>
  `;

  // Événements
  const select = card.querySelector(".select-aliment");
  const quantiteInput = card.querySelector(".quantite");
  const categorieInput = card.querySelector(".categorie");
  const glucidesUnitInput = card.querySelector(".glucides-unit");
  const glucidesTotalInput = card.querySelector(".glucides-total");
  const deleteBtn = card.querySelector(".delete-row");

  select.addEventListener("change", () => {
    const option = select.selectedOptions[0];
    if (option) {
      categorieInput.value = option.dataset.cat || "";
      glucidesUnitInput.value = option.dataset.glucides || 0;
    } else {
      categorieInput.value = "";
      glucidesUnitInput.value = 0;
    }
    calculerGlucidesCarte();
  });

  quantiteInput.addEventListener("input", calculerGlucidesCarte);

  deleteBtn.addEventListener("click", () => {
    card.remove();
    calculerTotalGlucides();
  });

  function calculerGlucidesCarte() {
    const qte = parseFloat(quantiteInput.value) || 0;
    const g = parseFloat(glucidesUnitInput.value) || 0;
    const total = (qte * g) / 100;
    glucidesTotalInput.value = total.toFixed(1);
    calculerTotalGlucides();
  }

  repasContainer.appendChild(card);
}

// Fonction générique pour fruits et produits laitiers
function creerCartePortion(liste, container) {
  const card = document.createElement("div");
  card.className = "card portion-card";

  card.innerHTML = `
    <label>
      Aliment
      <select class="select-aliment">
        <option value="">-- Choisir --</option>
        ${liste.map(p => `<option value="${p.aliment}" data-glucides="${p.glucides}">${p.aliment}</option>`).join("")}
      </select>
    </label>
    <label>
      Glucides / portion
      <input type="number" class="glucides-portion" readonly>
    </label>
    <label>
      Nombre de portions
      <input type="number" class="nb-portions" min="0" value="0">
    </label>
    <label>
      Glucides consommés
      <input type="number" class="glucides-total" readonly>
    </label>
    <button class="delete-row">❌ Supprimer</button>
  `;

  const select = card.querySelector(".select-aliment");
  const glucidesPortionInput = card.querySelector(".glucides-portion");
  const nbPortionsInput = card.querySelector(".nb-portions");
  const glucidesTotalInput = card.querySelector(".glucides-total");
  const deleteBtn = card.querySelector(".delete-row");

  select.addEventListener("change", () => {
    const option = select.selectedOptions[0];
    glucidesPortionInput.value = option ? option.dataset.glucides : 0;
    calculerGlucidesPortionCarte();
  });

  nbPortionsInput.addEventListener("input", calculerGlucidesPortionCarte);

  deleteBtn.addEventListener("click", () => {
    card.remove();
    calculerTotalGlucides();
  });

  function calculerGlucidesPortionCarte() {
    const n = parseFloat(nbPortionsInput.value) || 0;
    const g = parseFloat(glucidesPortionInput.value) || 0;
    const total = n * g;
    glucidesTotalInput.value = total.toFixed(1);
    calculerTotalGlucides();
  }

  container.appendChild(card);
}

// Calcul total glucides
function calculerTotalGlucides() {
  let total = 0;
  document.querySelectorAll(".glucides-total").forEach(input => {
    total += parseFloat(input.value) || 0;
  });
  document.getElementById("total-glucides").textContent = total.toFixed(1);
}

// Initialisation des cartes au chargement
document.addEventListener('DOMContentLoaded', () => {
  // Pour les féculents etc
  creerCarteAliment();
  // Pour les portions fruits
  creerCartePortion(portions, portionContainer);
  // Pour les produits laitiers
  creerCartePortion(produitsLaitiers, laitierContainer);
});

// Fonction pour basculer le mode sombre (si besoin)
function toggleDarkMode() {
  document.body.classList.toggle('dark');
}