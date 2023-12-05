import { useFilterContext } from '../FilterContext'
// import Product from './Product'
import { Link } from 'react-router-dom';
import { useProductContext } from '../Context';


function FilteredData() {
  const { filterAll } = useFilterContext()
  const { handleScroll } = useProductContext()

  console.log(filterAll, 'filterAll');
  return (
    <div className='items-container' onClick={handleScroll} >

      {
        filterAll.map((item) => {
          return <Link to={`/singleproduct/${item.id}`} className='Link1' key={item.id}>
            <div className="trending-container" >
              <div className="image">
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="image-info">
                <h3>{item.title}</h3>
                <h3>Price: {item.price}$</h3>
              </div>
              <Link to='/cart' className='Add-to-cart' >
                <button>Add To Cart</button>
              </Link>

            </div>
          </Link>



        })
      }
    </div>
  )
}

export default FilteredData