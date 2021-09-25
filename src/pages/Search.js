import React, { useState, useEffect } from 'react';

import SearchHeroe from '../components/SearchHeroe';
import CardHeroe from '../components/CardHeroe';
import Loader from '../components/Loader';
import axios from 'axios';



function Search (){
const [search, setSearch] = useState(null);
const [loading, setLoading] = useState(false);
const [heroes, setHeroes] = useState(null);

useEffect(() =>{
    if(search === null)return;
    axios.get(`https://superheroapi.com/api/10224095540953785/search/${search.heroe}`)
    .then(response => {        
        
        console.log(response.data.results);
    })
    .catch(error => {
        console.log(error);
    })
})

const handleSearch = (data) => {
    setSearch(data);
}


    return (
        <div>


   <SearchHeroe handleSearch={handleSearch}/>
   {loading && <Loader/>}
   <CardHeroe/>

        </div>
        

   

    )
}

export default Search;


