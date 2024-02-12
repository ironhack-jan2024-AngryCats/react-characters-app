import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function CharacterDetails() {

  const {characterId} = useParams();

  const [character, setCharacter] = useState(null);

  
  useEffect(() => {
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${characterId}`)
      .then((response) => {
        setCharacter(response.data);
      }).catch((e) => {
        console.log("Error getting character details from the API...");
        console.log(e);
      });
  }, [characterId]);


  const renderDetails = () => {
    return (
      <div className="box">
        <h2>{character.name}</h2>
        <p>Occupation: {character.occupation}</p>
        <p>Debt: {character.debt}</p>
        <p>Weapon: {character.weapon}</p>
      </div>
    )
  }


  return (
    <div className='CharacterDetails'>

      {character === null
        ? <h2>Loading...</h2>
        : renderDetails()
      }

      <Link to="/">Back to Homepage</Link>

    </div>

  )
}

export default  CharacterDetails;