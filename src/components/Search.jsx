import React from 'react';
import { useGlobalContext } from './Context';

const Search = () => {

  const {query, searchPost} = useGlobalContext();

  return (
    <>
      <h1>Chinmay Pandya Website</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
        <div>
          <input type="text" className='searchbar'
            placeholder="Search here" value={query}
            onChange={(e)=>{
              searchPost(e.target.value)
            }}
            style={{padding: '1rem',
                    minWidth: '40rem',
                    fontSize: '2rem',
                    textTransform: 'capitalize',
                    border:'none',
                    borderBottom: '0.2rem solid #15133c',
                    outline: 'none'}}
            
          />
        </div>
      </form>
    </>
  )
}

export default Search