import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


export default class Heroes extends Component {

    state = {
        heroes: []
        , status: false
    }
    uploadHeroes = () => {
        axios.get('https://superheroapi.com/api/10224095540953785/search/name')
        .then(res =>{
            this.setState({
                heroes: res.data,
                status: true
            })
        })
    }

    

}

