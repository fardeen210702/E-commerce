import { useFilterContext } from '../FilterContext'

function Search() {
const {filter:{text},updateFilter} = useFilterContext()

  return (
    <>
     <form className="search-input" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='SEARCH PRODUCTS...' name='text' value={text}  onChange={updateFilter}/>
      </form>
    </>
  )
}

export default Search