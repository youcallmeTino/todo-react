📝 Projet React - ToDo List Interactive

Ce projet est une application de ToDo List moderne**, développée avec React.js, qui met en avant deux fonctions JavaScript fondamentales : `map()` et `filter()`.

---

🎯 Objectif

Le but principal de ce projet est de maîtriser l’utilisation de `map()` et `filter()` dans un contexte réel d’application React.

Ces deux fonctions sont essentielles pour :
- Afficher dynamiquement des listes (`map`)
- Gérer des filtres (afficher seulement les tâches faites ou non faites) (`filter`)

---

⚙️ Fonctionnalités

✅ Ajouter une tâche  
✅ Modifier une tâche  
✅ Supprimer une tâche  
✅ Marquer une tâche comme faite / non faite  
✅ Filtrer les tâches : **Toutes / Faites / Non faites**  
✅ Animation fluide pour chaque action  
✅ Design responsive (mobile & desktop friendly)

---

🧠 Apprentissage

Utilisation de `map()`
Permet de parcourir et afficher dynamiquement chaque tâche dans la liste :
###jsx
taches.map(tache => <TodoItem key={tache.id} tache={tache} />)

Utilisation de filter()
Permet de filtrer les tâches selon leur état (fait ou non fait) :
###jsx
taches.filter(t => t.fait) // renvoie uniquement les tâches faites

## Installation

```bash
git clone https://github.com/ton-utilisateur/todo-react.git
cd todo-react
npm install
npm start
