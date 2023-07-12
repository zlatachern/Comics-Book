import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardMedia, Grid } from '@mui/material';
import { Modal } from 'react-bootstrap';
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
  const [showModal, setShowModal] = useState(false);
  const [purchaseData, setPurchaseData] = useState({
    firstName: '',
    lastName: '',
    address: '',
  });
  const [selectedComic, setSelectedComic] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://gateway.marvel.com:443/v1/public/comics?apikey=${API_KEY}&offset=${offset}`
        );
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
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
    setShowModal(true);
    // Прокрутка к модальному окну
    modalRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handlePurchaseDataChange = (event) => {
    const { name, value } = event.target;
    setPurchaseData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePurchaseSubmit = () => {
    console.log('Purchase Data:', purchaseData);

    localStorage.setItem('purchaseData', JSON.stringify(purchaseData));

    setPurchaseData({ firstName: '', lastName: '', cardNumber: '', expirationDate: '', cvv: '', address: '' });

    handleModalClose();
  };

  return (
    <div>
      <div className="container--input">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by title"
          name="text"
          className="input--character"
        />
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
              <Card className="card--border" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {comic.thumbnail.path && comic.thumbnail.extension && (
                  <CardMedia
                    className="card--image"
                    component="img"
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}
                  />
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <h4 className="heading--h4">{comic.title}</h4>
                  <p className="text--paragraph">Characters:</p>
                  {comic.characters && comic.characters.items && comic.characters.items.length > 0 ? (
                    <ul>
                      {comic.characters.items.slice(0, 2).map((character) => (
                        <li key={character.resourceURI}>
                          <p className="text--paragraph" href={character.resourceURI}>
                            {character.name}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text--paragraph">Oops, we don't have info about it. Update soon!</p>
                  )}
                  <button className="button--buy" onClick={() => handleModalOpen(comic)}>
                    <span className="button--buy__text">Buy it!</span>
                    <span className="button--buy__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        stroke="currentColor"
                        height="24"
                        fill="none"
                        className="svg"
                      >
                        <line y2="19" y1="5" x2="12" x1="12" />
                        <line y2="12" y1="12" x2="19" x1="5" />
                      </svg>
                    </span>
                  </button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {data?.data?.total > offset + COMICS_PER_PAGE && (
        <div className="button--load-more" ref={modalRef}>
          <button className="button--primary" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}

      <Modal show={showModal} onHide={handleModalClose} backdrop="static" className="modal--window">
        <form className="form">
          <h3 className="heading--h3">Buy Comics</h3>
          <div className="form-group" controlId="formFirstName">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter first name"
              name="firstName"
              required
              value={purchaseData.firstName}
              onChange={handlePurchaseDataChange}
            />
          </div>

          <div className="form-group" controlId="formLastName">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter last name"
              name="lastName"
              required
              value={purchaseData.lastName}
              onChange={handlePurchaseDataChange}
            />
          </div>

          <div className="form-group" controlId="formCardNumber">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              placeholder="Enter card number"
              name="cardNumber"
              required
              pattern="[0-9]{13,16}"
            />
          </div>

          <div className="form-group" controlId="formExpirationDate">
            <label htmlFor="expirationDate">Expiration Date</label>
            <input
              type="text"
              className="form-control"
              id="expirationDate"
              placeholder="MM/YY"
              name="expirationDate"
              required
              pattern="(0[1-9]|1[0-2])\/?([0-9]{2})"
            />
          </div>

          <div className="form-group" controlId="formCVV">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              className="form-control"
              id="cvv"
              placeholder="Enter CVV"
              name="cvv"
              required
              pattern="[0-9]{3,4}"
            />
          </div>

          <div className="form-group" controlId="formAddress">
            <label htmlFor="address">Address</label>
            <textarea
              className="form-control"
              id="address"
              placeholder="Enter address"
              name="address"
              required
              value={purchaseData.address}
              onChange={handlePurchaseDataChange}
            />
          </div>

          <div className="modal-footer">
            <button type="button" className="button--primary" onClick={handleModalClose}>
              Cancel
            </button>
            <button type="button" className="button--primary" onClick={handlePurchaseSubmit}>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default SearchComics;





