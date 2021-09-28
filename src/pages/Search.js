   
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
    
async function searchSuperHeroes () {
    const response = await axios.get(`https://superheroapi.com/api/10224095540953785/search/${search.heroe}`);
    const data = await response.json();
    console.log("searchSuperHeroes -> data", data)

    setHeroes(data.results);
  }
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

