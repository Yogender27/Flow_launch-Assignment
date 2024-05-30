import React from 'react'
import { Link } from 'react-router-dom'

function ItemCard({img , title, price,id}) {
    return (
        
        <div>
            <div className='flex m-4 border bottom-8'>
                <img className='w-20 h-24 p-3' src={img} alt="" />
                <div className='p-4'>
                    <Link to={`/details/${id}`}>
                    <h2 className='font-semibold hover:text-blue-500 cursor-default'>{title}</h2>
                    </Link>
                    <h3 className='font-semibold'>
                        Price <span className='font-bold'>{price}$</span>
                    </h3>
                </div>
            </div>
          
        </div>
        
      )
    }


export default ItemCard;

