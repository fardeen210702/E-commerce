import React, { useState } from 'react'

function Image({images =[{item :''}]}) {
    const [mainImage, setMainImage] = useState(images[0])
  return (
    <div  className='Image-container'>
        <div  className="left-container">
            {
                images.map((item,id)=>(
                <figure  key={id}>
                        <img src={item} alt="" onClick={()=>setMainImage(item)} />
                        
                    </figure>
                ))
            }

            
        </div>
        <div className="right-container">
            <img src={mainImage}  alt="" />


        </div>
        

    </div>
  )
}

export default Image