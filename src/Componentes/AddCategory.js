import react from "react"
import PropTypes from 'prop-types';
import { useState } from "react/cjs/react.development";

export const AddCategory = ({setCategories}) => {
    
    //UseSate para el componente, hace actualizaciones cuando se ingresa texto
    const [inputValue, setInputValue] = useState("");
    
    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);  
    }

    //Estado de funcione que permite que la pagina no se recargue
    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        if(inputValue.trim().length > 2){
            setCategories(c => [inputValue, ...c])
        }
    }

    //COMPONENTE
    return (
        <form onSubmit={handleSubmit}> 
            <input
                type="text"
                placeholder={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );  
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}