import React from 'react'

function TodoForm({texte, setTexte, addTache}) {
    return (
        <form onSubmit={addTache} className="form">
            <input 
                type="text"
                value={texte}
                onChange={(e) => setTexte(e.target.value)}
                placeholder="Ajouter une tache..." 
            />
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default TodoForm;