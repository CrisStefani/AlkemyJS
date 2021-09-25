import React, { useState } from 'react';

const initialForm = {
    heroe:''
};

const SearchHeroe = ({handleSearch}) => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!form.heroe){
            alert('Completar el campo de buscar heroe');
            return;
        }
        handleSearch(form);
        setForm(initialForm); 
       
    }

    return (
        <form className="d-flex"onSubmit={handleSubmit}>
            <input className="form-control me-2" type="text" name='heroe' placeholder="Buscar Héroe" aria-label="Search" 
            onChange={handleChange} value={form.heroe}/>
            <button className="btn btn-outline-success" type="submit" value='search'>Buscar</button>
        </form>
    );
}

export default SearchHeroe;