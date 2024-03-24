import logo from './assets/pngegg.png'
import './App.css'
import Buscador from './components/Buscador'
import MiApi from './components/MiApi'

function App() {
  return (
    <>
     <img src={logo} alt="titulo"/>
     <MiApi>
            {(pokemons, error) => (
                <Buscador pokemons={pokemons} error={error} />
            )}
      </MiApi>
     <footer className="footer">
        <p>
           <small>Sitio diseñado por Coni</small>
        </p>
      </footer>
    </>
  )
}

export default App
