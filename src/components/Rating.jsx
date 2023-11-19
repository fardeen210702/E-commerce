import React from 'react'

function Rating({rating}) {
    const starRating = Array.from({length:5},(elem,index)=>{
        const number = index+ 0.5;
        return(
            <span key={index}>
                {
                    rating >= index +1 ?(<i className="fa-solid fa-star full"></i>)   :
                    rating >=number ? (<i className="fa-regular fa-star-half-stroke half"></i>) :
                    (<i className="fa-regular fa-star empty"></i>)            }
            </span>
        )
    })
  return (
    <div>
                      <p className='product-detail1'><span>Rating: </span>{starRating}</p>
    </div>
  )
}

export default Rating