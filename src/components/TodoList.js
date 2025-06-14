import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({taches, basculerState, deleteTache, updateTache}) {
  return (
    <div className="liste-taches">
      {Array.isArray(taches) && taches.map((tache) => (
        <TodoItem
            key={tache.id}
            tache={tache}
            basculerState={basculerState}
            deleteTache={deleteTache}
            updateTache={updateTache}
        />
      ))}
    </div>
  )
}
