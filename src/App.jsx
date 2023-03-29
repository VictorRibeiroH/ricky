import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Cards from './components/Cards/Cards';
import Filtros from './components/Filtros/Filtros';

function App() {

  return (
    <div className='App'>
      <h1 className='text-center my-5 '>Víctor Ribeiro <span className='text-primary'>Teste</span></h1>


        {/* Filtros */}
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filtros />
          </div>
          

          {/* Cards */}
          <div className="col-8"> 
              <div className="row">
                <Cards />
                <Cards />
                <Cards />
              </div>            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App
