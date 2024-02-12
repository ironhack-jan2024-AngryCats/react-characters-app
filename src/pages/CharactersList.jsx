import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CharactersList() {

    const baseUrl = "https://ih-crud-api.herokuapp.com"

    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        axios.get(`${baseUrl}/characters`)
            .then(response => {
                setCharacters(response.data);
            })
            .catch(e => {
                console.log("Error getting characters from the API...");
                console.log(e);
            });
    }, []);

    return (
        <div className='CharactersList'>

            {characters === null
                ? <h2>Loading....</h2>
                : <h2>Number of characters in our API: {characters.length}</h2>
            }

            {characters !== null &&
                characters.map((characterDetails, index) => {
                    return (
                        <div key={index} className="character box">
                            <p>Name: {characterDetails.name}</p>
                            <p>Weapon: {characterDetails.weapon}</p>
                            
                            <Link to={`./characters/${characterDetails.id}`}>
                                More Details
                            </Link>
                        </div>
                    )
                })}
        </div>
    )
}


export default CharactersList;