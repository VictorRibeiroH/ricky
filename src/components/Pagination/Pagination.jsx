import React from 'react'

const Pagination = ({ setPageNumber, pageNumber}) => {

let next = ()=>{
    setPageNumber((x) => x + 1);
}

let prev = ()=>{
    if (pageNumber === 1) return;
    setPageNumber((x) => x - 1);
}

  return (
    <div className='container d-flex justify-content-center gap-5 my-5'>
        <button onClick={prev} className="btn btn-primary">Voltar</button>
        <button onClick={next} className="btn btn-primary">Próximo</button>
    </div>
  )
}

export default Pagination