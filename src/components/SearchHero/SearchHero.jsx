import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Grid } from '@mui/material';
import './searchhero.scss';
import imgOops from '../../images/img_main/oops.jpg';

const API_KEY = 'ee50af1e21a60e16a303f5a1c50921f5';
const CHARACTERS_PER_PAGE = 9;
const INITIAL_CHARACTERS = 3; // Обновленное значение

const SearchHero = () => {
  const [data, setData] = useState({});
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://gateway.marvel.com/v1/public/characters?apikey=${API_KEY}&offset=${offset}`
        );
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData); 
        const results = jsonData?.data?.results;
        if (searchTerm === '') {
          setCharacters(results?.slice(0, INITIAL_CHARACTERS) || []); 
        } else {
          const filteredCharacters = results?.filter((character) =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          if (filteredCharacters.length === 0) {
            setNotFound(true);
          } else {
            setNotFound(false);
          }
          setCharacters(filteredCharacters?.slice(0, INITIAL_CHARACTERS) || []);
        }
      } catch (error) {
        console.log('error :>> ', error);
      }
    };

    fetchData();
  }, [offset, searchTerm]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + CHARACTERS_PER_PAGE);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setOffset(0); 
  };

  return (
    <div>
      <div class="container--input">
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search by name" name="text" class="input--character"/>
    </div>

      {notFound && (
        <Card sx={{ marginTop: '16px', maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CardContent sx={{ flexGrow: 1 }}>
          <p className="text--warning">Oops! Character not found</p>
          </CardContent>
          <CardMedia
            component="img"
            src={imgOops}
            alt=""
            sx={{ maxWidth: '100%', height: 'auto' }}
          />
        </Card>
      )}

      <Grid container spacing={2} justifyContent="center">
        {characters.map((character) => {
          if (!character.thumbnail) {
            return null; 
          }

          return (
            <Grid item xs={12} sm={6} md={3} key={character.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <h4 className='heading--h4'>{character.name}</h4>
                  <p className="text--paragraph">{character.description}</p>
                  <p className="text--paragraph">Comics:</p>
                  <ul>
                    {character.comics.items.slice(0, 2).map((comic) => (
                      <li key={comic.resourceURI}>
                        <p className='text--paragraph' href={comic.resourceURI}>{comic.name}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {data?.data?.total > offset + CHARACTERS_PER_PAGE && (
        <div className="button--load-more">
          <button className='button--primary' onClick={handleLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default SearchHero;