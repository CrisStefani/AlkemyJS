   
import React, { useState, useEffect } from 'react';

import SearchHeroe from '../components/SearchHeroe';
import CardHeroe from '../components/CardHeroe';
import Loader from '../components/Loader';
import ApiHero from '../api/apiHero'



function Search (){
const [search, setSearch] = useState(null);
const [loading, setLoading] = useState(false);
const [heroes, setHeroes] = useState(null);

useEffect(() =>{
    if(search === null)return;

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

