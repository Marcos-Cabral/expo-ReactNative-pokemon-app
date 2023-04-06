import { useState } from 'react';

export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = (text) => {
        setValues(text);
    }

    return [ values, handleInputChange, reset ];

}