import React, { useEffect, useState } from 'react';

const API_KEY = '1a0edb5c87ee8e650d7ba024797963f0';

const SearchHero = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${API_KEY}`, {
          method: 'GET',
        });

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('error :>> ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data?.results?.map((character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default SearchHero;

