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
];

const produitsLaitiers = [
  { categorie: "Produits Laitiers", aliment: "Yaourt Nature", glucides: 5 },
  { categorie: "Produits Laitiers", aliment: "Yaourt aromatisé", glucides: 10 },
  { categorie: "Produits Laitiers", aliment: "Yaourt avec fruits", glucides: 15 }
];

function ajouterLigne() {
  const tbody = document.getElementById("repas-body");
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td><input type="text" class="categorie" readonly></td>
    <td><select><option value="">-- Choisir --</option>
      ${aliments.map(a => `<option value="${a.aliment}" data-cat="${a.categorie}" data-glucides="${a.glucides}">${a.aliment}</option>`).join("")}
    </select></td>
    <td><input type="number" class="quantite" min="0"></td>
    <td><input type="number" class="glucides-unit" readonly></td>
    <td><input type="number" class="glucides-total" readonly></td>
    <td><button class="delete-row" onclick="supprimerLigne(this)">❌</button></td>`;

  tbody.appendChild(tr);

  tr.querySelector("select").onchange = function () {
    const option = this.selectedOptions[0];
    tr.querySelector(".categorie").value = option.dataset.cat;
    tr.querySelector(".glucides-unit").value = option.dataset.glucides;
    calculerGlucides(tr);
  };

  tr.querySelector(".quantite").oninput = () => calculerGlucides(tr);
}

function ajouterPortion() {
  ajouterPortionGenerique(portions, "portion-body");
}

function ajouterLaitier() {
  ajouterPortionGenerique(produitsLaitiers, "laitier-body");
}

function ajouterPortionGenerique(liste, tbodyId) {
  const tbody = document.getElementById(tbodyId);
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td><select><option value="">-- Choisir --</option>
      ${liste.map(p => `<option value="${p.aliment}" data-glucides="${p.glucides}">${p.aliment}</option>`).join("")}
    </select></td>
    <td><input type="number" class="glucides-portion" readonly></td>
    <td><input type="number" class="nb-portions" min="0"></td>
    <td><input type="number" class="glucides-total" readonly></td>
    <td><button class="delete-row" onclick="supprimerLigne(this)">❌</button></td>`;

  tbody.appendChild(tr);

  tr.querySelector("select").onchange = function () {
    const glucides = this.selectedOptions[0].dataset.glucides;
    tr.querySelector(".glucides-portion").value = glucides;
    calculerGlucidesPortion(tr);
  };

  tr.querySelector(".nb-portions").oninput = () => calculerGlucidesPortion(tr);
}

function supprimerLigne(btn) {
  const tr = btn.closest("tr");
  tr.remove();
  calculerTotalGlucides();
}

function calculerGlucides(row) {
  const qte = parseFloat(row.querySelector(".quantite").value) || 0;
  const g = parseFloat(row.querySelector(".glucides-unit").value) || 0;
  const total = (qte * g) / 100;
  row.querySelector(".glucides-total").value = total.toFixed(1);
  calculerTotalGlucides();
}

function calculerGlucidesPortion(row) {
  const n = parseFloat(row.querySelector(".nb-portions").value) || 0;
  const g = parseFloat(row.querySelector(".glucides-portion").value) || 0;
  const total = n * g;
  row.querySelector(".glucides-total").value = total.toFixed(1);
  calculerTotalGlucides();
}

function calculerTotalGlucides() {
  const totaux = document.querySelectorAll(".glucides-total");
  let total = 0;
  totaux.forEach(input => total += parseFloat(input.value) || 0);
  document.getElementById("total-glucides").textContent = total.toFixed(1);
}

ajouterLigne();
ajouterPortion();
ajouterLaitier();
