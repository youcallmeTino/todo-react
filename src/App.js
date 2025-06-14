import './App.css';
import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [taches, setTaches] = useState(() => {
    const dataStorage = localStorage.getItem("taches");
    return dataStorage ? JSON.parse(dataStorage) : [];
  });
  const [texte, setTexte] = useState('');
  const [filtre, setFiltre] = useState('toutes');

  useEffect(() => {
    localStorage.setItem("taches", JSON.stringify(taches));
  }, [taches]);

  const addTache = (e) => {
    e.preventDefault();
    if (texte.trim() === '') return;
    const newTache = {id: Date.now(), texte, fait: false};
    setTaches([...taches, newTache]);
    setTexte('');
  };

  const deleteTache = (id) => {
    setTaches(taches.filter(t => t.id !== id));
  }

  const basculerState = (id) => {
    setTaches(
      taches.map(t => 
        t.id === id ? {...t, fait : !t.fait} : t
      )
    );
  }

  const updateTache = (id, newTexte) => {
    setTaches(
      taches.map(t =>
         t.id === id ? {...t, texte: newTexte} : t
      )
    );
  };

  const filtrerTaches = () => {
    if (filtre === "faites") return taches.filter(t => t.fait);
    if (filtre === 'non-faites') return taches.filter(t => !t.fait);
    return taches;
  }

  const tachesRestantes = taches.filter(t => !t.fait).length;

  return (
    <div className="App">
      <h1>📝 Ma ToDo List</h1>
      <p className='compteur'>✅ Taches restantes: {tachesRestantes}</p>

      <TodoForm texte={texte} setTexte={setTexte} addTache={addTache} />

      <div className='filtres'>
        <button onClick={() => setFiltre('toutes')} className={filtre === 'toutes' ? 'actif' : ''}>Toutes</button>
        <button onClick={() => setFiltre('faites')} className={filtre === 'faites' ? 'actif' : ''}>Faites</button>
        <button onClick={() => setFiltre('non-faites')} className={filtre === 'non-faites' ? 'actif': ''}>Non faites</button>
      </div>

      <TodoList 
        taches={filtrerTaches()}
        basculerState={basculerState}
        deleteTache={deleteTache}
        updateTache={updateTache}
      />
    </div>
  );
}

export default App;
