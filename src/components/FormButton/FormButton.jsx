import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './formbutton.scss';

const buttonStyles = {
fontSize: '1rem',
padding: '4px 50px',
backgroundColor: '#f6c24a',
border: '3px solid #f6c24a',
borderRadius: '1em',
color: '#fff',
fontWeight: 'bolder',
transition: 'cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s',
boxShadow: '-5px 5px 0px 0px #fdf4e5',
};

const hoverStyles = {
transform: 'translate(5px, -5px)',
backgroundColor: '#ff7f00',
borderColor: '#ff7f00',
};

const buttonStylesSmall = {
  ...buttonStyles,
  padding: '3px 10px',
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [userName, setUserName] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setUserName(storedName);
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Сохранение данных в localStorage
    localStorage.setItem('name', formData.name);
    setUserName(formData.name);
  };

  return (
    <div>
    {windowWidth >= 768 && (
        <Button
          className="button--primary--log-in"
          sx={{
            ...buttonStyles,
            ...(windowWidth >= 768 && buttonStylesSmall),
            '&:hover': hoverStyles,
          }}
          onClick={handleOpen}
        >
          {localStorage.getItem('name') ? (
            <p className="button--primary__text">{localStorage.getItem('name')}</p>
          ) : (
            <p className="button--primary__text">Sign In!</p>
          )}
        </Button>
      )}
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
    <Box>
      <div className="wrapper">
        <div className="card-switch">
          <label className="switch--label">
            <input type="checkbox" className="toggle"></input>
            <span className="slider"></span>
            <span className="card-side"></span>
              <div className="flip-card__inner">
                <div className="flip-card__front">
                  <div className="title">Log in</div>
                      <form className="flip-card__form" action="" onSubmit={handleFormSubmit}>
                      <input
                        className="flip-card__input"
                        name="email"
                        placeholder="Email"
                        type="email"
                        required
                        onChange={handleInputChange}
                      ></input>
                      <input
                        className="flip-card__input"
                        name="password"
                        placeholder="Password"
                        type="password"
                        required
                        onChange={handleInputChange}
                      ></input>
                      <button className="flip-card__btn">Let`s go!</button>
                    </form>
                </div>

                  <div className="flip-card__back">
                    <div className="title">Sign up</div>
                    <form className="flip-card__form" action="" onSubmit={handleFormSubmit}>
                      <input
                        className="flip-card__input"
                        name="name"
                        placeholder="Name"
                        type="name"
                        required
                        onChange={handleInputChange}
                      ></input>
                      <input
                        className="flip-card__input"
                        name="email"
                        placeholder="Email"
                        type="email"
                        required
                        onChange={handleInputChange}
                      ></input>
                      <input
                        className="flip-card__input"
                        name="password"
                        placeholder="Password"
                        type="password"
                        required
                        onChange={handleInputChange}
                      ></input>
                      <button className="flip-card__btn">Confirm!</button>
                    </form>
                  </div>
                </div>
              </label>
            </div>
          </div>
      </Box>
    </Modal>
  </div>
  );
}









