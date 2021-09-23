import React, { useState, useEffect } from 'react';

import SearchHeroe from '../components/SearchHeroe';
import CardHeroe from '../components/CardHeroe';
import Loader from '../components/Loader';

function Search (){
const [search, setSearch] = useState(null);
const [loading, setLoading] = useState(false);

const handleSearch = (data) => {
    console.log(data);
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


