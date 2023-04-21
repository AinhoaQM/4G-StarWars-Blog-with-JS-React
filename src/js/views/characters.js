import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
const urlApiPeople = "https://www.swapi.tech/api/people";
const imgUrl = "https://starwars-visualguide.com/assets/img/characters/";

const Characters = () => {
    const [people, setPeople] = useState([])
    const getAllelements = async () => {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        const response = await fetch(urlApiPeople, requestOptions);
        const data = await response.json();
        setPeople(data.results);
        console.log (data.results)
      };
    
      useEffect(() => {
        getAllelements();
      },[]);
    return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
            {people.map((item, index) => (
                <div key = {index} className="card">
                <img src={`${imgUrl}${item.uid}.jpg`} className="card-img-top" alt="img rota" />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                    This is a longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                    </p>
                    <Link to={"single/"+item.uid}>
                        <button className="btn btn-primary btn-lg" type="button">
                            Detalles
                        </button>
                    </Link>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Characters