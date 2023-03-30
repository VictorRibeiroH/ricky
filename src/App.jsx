import React, {useState, useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Cards from './components/Cards/Cards';
import Filtros from './components/Filtros/Filtros';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {

    let [pageNumber, setPageNumber] = useState(1);
    let [search, setSearch] = useState("Smith");

    console.log(pageNumber);
    let [fetchedData, updateFetchedData] = useState([]);
    let {info, results} = fetchedData; 

    
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;


    useEffect(() => {
      (async function(){
        let data = await fetch(api).then((res) => res.json());
        updateFetchedData(data);
      })();
    }, [api]);
    

  return (
    <div className='App'>
      <h1 className='text-center my-5 '>Víctor Ribeiro <span className='text-primary'>Teste</span></h1>


      {/* Search */}
      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>

        {/* Filtros */}
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filtros />
          </div>
          

          {/* Cards */}
          <div className="col-8"> 
              <div className="row">
                <Cards results={results}/>
              </div>            
          </div>
          
        </div>
      </div>


      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>


  )
}

export default App
