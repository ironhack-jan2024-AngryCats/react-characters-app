import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import CharactersList from './pages/CharactersList';
import CharacterDetails from './pages/CharacterDetails';

function App() {

  return (
    <>
      <h1>React Charates App</h1>

      <Routes>
        <Route path='/' element={<CharactersList />} />
        <Route path='/characters/:characterId' element={<CharacterDetails />} />
        <Route path='*' element={<h2>Page Not Found</h2>} />
      </Routes>

    </>
  )
}

export default App;
