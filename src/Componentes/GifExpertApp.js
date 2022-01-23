//Un componente se compone de una funcion
import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';



//EN LOS COMPONENTES NO VAN ;

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);


    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr/>
            
            {
                categories.map(categorie => console.log(`Categoria ${categorie}`)),

                categories.map((categorie, id) => (
                    console.log(`Buscando ${categorie}`),
                    <GifGrid category = {categorie} key={id}/>
                ))
            }
            
        </>
    );
}