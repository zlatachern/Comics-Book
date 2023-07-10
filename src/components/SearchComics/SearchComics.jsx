import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Grid, TextField, Button } from '@mui/material';
import imgOops from '../../images/img_main/oops.jpg';
import './searchcomics.scss';

const API_KEY = 'ee50af1e21a60e16a303f5a1c50921f5';
const COMICS_PER_PAGE = 9;
const INITIAL_COMICS = 3;

const SearchComics = () => {
  const [data, setData] = useState({});
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [comics, setComics] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [purchaseData, setPurchaseData] = useState({ firstName: '', lastName: '', address: '' });
  const [setSelectedComic] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://gateway.marvel.com:443/v1/public/comics?apikey=${API_KEY}&offset=${offset}`
        );
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData); // Вывод данных в консоль
        const results = jsonData?.data?.results;
        if (searchTerm === '') {
          setComics(results?.slice(0, INITIAL_COMICS) || []);
        } else {
          const filteredComics = results?.filter((comic) =>
            comic.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          if (filteredComics.length === 0) {
            setNotFound(true);
          } else {
            setNotFound(false);
          }
          setComics(filteredComics?.slice(0, INITIAL_COMICS) || []);
        }
      } catch (error) {
        console.log('error :>> ', error);
      }
    };

    fetchData();
  }, [offset, searchTerm]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + COMICS_PER_PAGE);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setOffset(0);
  };

  const handleModalOpen = (comic) => {
    setSelectedComic(comic);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handlePurchaseDataChange = (event) => {
    const { name, value } = event.target;
    setPurchaseData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePurchaseSubmit = () => {
    // Обработка отправки данных покупки
    console.log('Purchase Data:', purchaseData);
    // Очистка формы
    setPurchaseData({ firstName: '', lastName: '', address: '' });
    // Закрытие модального окна
    handleModalClose();
  };

  return (
    <div>
      <div className="container--input">
        <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search by name" name="text" className="input--character" />
      </div>

      {notFound && (
        <Card sx={{ marginTop: '16px', maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <p className="text--warning">Oops! Comic not found</p>
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
        {comics.map((comic) => {
          if (!comic.thumbnail) {
            return null; // Пропуск комикса без изображения
          }

          return (
            <Grid item xs={12} sm={6} md={4} key={comic.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {comic.thumbnail.path && comic.thumbnail.extension && (
                  <CardMedia
                    component="img"
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}
                  />
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <h4 className="heading--h4">{comic.title}</h4>
                  <p className="text--paragraph">{comic.description}</p>
                  <p className="text--paragraph">Characters:</p>
                  <ul>
                    {comic.characters.items.slice(0, 2).map((character) => (
                      <li key={character.resourceURI}>
                        <p className="text--paragraph" href={character.resourceURI}>
                          {character.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <Button variant="contained" onClick={() => handleModalOpen(comic)}>
                    Buy It!
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {data?.data?.total > offset + COMICS_PER_PAGE && (
        <div className="button--load-more">
          <button className="button--primary" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}

      {openModal && (
        <div className="modal"> {/* Добавьте стили для модального окна */}
          <h2 className="modal__title">Purchase Form</h2>
          <TextField
            label="First Name"
            name="firstName"
            value={purchaseData.firstName}
            onChange={handlePurchaseDataChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={purchaseData.lastName}
            onChange={handlePurchaseDataChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            name="address"
            value={purchaseData.address}
            onChange={handlePurchaseDataChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" onClick={handlePurchaseSubmit}>
            Submit
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchComics;




