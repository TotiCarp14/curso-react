import { useState } from "react"
import { GifExpertApp } from "../GifExpertApp"


export const AddCategory = ({onNewValue}) => {
  
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) => {
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    if(inputValue.trim().length <=1) return;

    // setCategories( categories => [inputValue, ...categories] );
    setInputValue('');
    onNewValue(inputValue.trim());
  }
  
return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
