import React, { useState } from 'react'

export default function TodoItem({tache, basculerState, deleteTache, updateTache})  {
    const [edition, setEdition] = useState(false);
    const [newTexte, setNewTexte] = useState(tache.texte);

    const validerEdition = (e) => {
        e.preventDefault();
        updateTache(tache.id, newTexte);
        setEdition(false);
    };

  return (
    <div className={`tache ${tache.fait ? 'fait' : ''}`}>
        {edition ? (
            <form onSubmit={validerEdition} style={{display: 'flex', gap: '10px'}}>
                <input 
                    type="text" 
                    value={newTexte} 
                    onChange={(e) => setNewTexte(e.target.value)}
                    autoFocus
                />
                <button type='submit'>✅</button>
            </form>
        ) : (
            <>
                <span onClick={() => basculerState(tache.id)}>{tache.texte}</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={() => setEdition(true)}>✏️</button>
                    <button onClick={() => deleteTache(tache.id)}>❌</button>
                </div>
            </>
        )}
      
    </div>
  )
}
