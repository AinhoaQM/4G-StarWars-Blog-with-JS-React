import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
const urlApiPeople = "https://www.swapi.tech/api/people/";
const imgUrl = "https://starwars-visualguide.com/assets/img/characters/";

const CharacterSingle = () => {
    const [single, setSingle] = useState({});
    const params = useParams()
  const getAllelements = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const response = await fetch(urlApiPeople + params.id, requestOptions);
    const data = await response.json();
    setSingle(data.result.properties);
    console.log(data.result.properties);
  };

  useEffect(() => {
    getAllelements();
  }, []);
  return (
    <div>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
        <img src={`${imgUrl}${params.id}.jpg`} className="card-img-top" alt="img rota" />
          <h1 className="display-5 fw-bold">{single.name}</h1>
          <p className="col-md-8 fs-4">
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap. Check out the
            examples below for how you can remix and restyle it to your liking.
          </p>
        <Link to= {"/"}>
          <button className="btn btn-primary btn-lg" type="button">
            Example button
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterSingle;
