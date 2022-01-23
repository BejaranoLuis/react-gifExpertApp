import React, { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {
    const {data, loading} = useFetchGifs(category);

 
    

 

    

    return(
        <>
            {loading && <p className='loading'></p>}
            <h3 className='card-search'>{category}</h3>
            <div className='card-grid'>
            {
                data.map( img => (
                    <GifGridItem key={img.id} {...img}/>
                ))
            }
            </div>
        </>
        
    ) 
}
