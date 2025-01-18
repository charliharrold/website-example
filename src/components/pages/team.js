import React, { useState } from 'react';
import {Link} from "react-router-dom";

import barcelona from "../../resources/barcelona.jpg";
import hohenwerfen from '../../resources/burg hohenwerfen (austria).jpg'
import salzburg from "../../resources/salzburg.jpg";
import stirling from "../../resources/stirling castle.jpg";
import valencia from "../../resources/valencia.jpg";
import verdonGorge from "../../resources/verdon gorge.jpg";
import versailles from "../../resources/palace versailles.jpg";
import pontdugard from '../../resources/le pont du gard.jpg'
import bigben from '../../resources/big ben.jpg'

const photoData = [
  {
    text: 'Presidential Team',
    photos: [
      { src: versailles, title: 'Emily - President', description: 'Hello everyone and welcome to WECS! I’m very excited to be leading this team of amazing women. We have some great plans and look forward to meeting all of you! If you see me on campus, say hi! I will probably talk about my current netflix obsession or maybe my newest plant, but I’m sure we can find time to discuss WECS.' },
      { src: salzburg, title: 'Charli - Vice President', description: 'When I first started at UVic, I had no idea what writing code even meant, but it turns out that this coding thing is pretty cool! I\'m excited to be able to support other women in engineering and computer science this year and I hope to see you all at our upcoming events!' },
      { src: valencia, title: 'Emma - Vice President', description: 'Hello! My name is Emma and I am super excited to continue working with WECS after being a part of the revival in 2023. I am ready to contribute to the growing community we’ve got going and can’t wait to expand and reach out more to local communities and UVic students. If you see me around in the gym, or wandering campus, please feel free to have a chat!' },
      { src: hohenwerfen, title: 'Emma - Vice President', description: 'Hello! My name is Emma and I am super excited to continue working with WECS after being a part of the revival in 2023. I am ready to contribute to the growing community we’ve got going and can’t wait to expand and reach out more to local communities and UVic students. If you see me around in the gym, or wandering campus, please feel free to have a chat!' },
    ],
  },
  {
    text: 'Administration Team',
    photos: [
      { src: stirling, title: 'Isabella - VP Finance', description: '' },
      { src: barcelona, title: 'Accepting Applications - Human Resources Director', description: 
      <p>Term: Sept 2024-August 2025 <br/>
        Weekly Commitment: 5-10 hours <br/>
        Number of Positions Available: 1 <br/> <br/>
        The Human Resources Director is responsible for recruitment, onboarding, and staff support. The Director will work closely with the President to ensure effective human resources practices are implemented.
        <br/><br/>
        For more information, check out our <Link to="/positions">open positions</Link> page.
        </p> },
        { src: pontdugard, title: 'Emma - Vice President', description: 'Hello! My name is Emma and I am super excited to continue working with WECS after being a part of the revival in 2023. I am ready to contribute to the growing community we’ve got going and can’t wait to expand and reach out more to local communities and UVic students. If you see me around in the gym, or wandering campus, please feel free to have a chat!' },
        { src: bigben, title: 'Emma - Vice President', description: 'Hello! My name is Emma and I am super excited to continue working with WECS after being a part of the revival in 2023. I am ready to contribute to the growing community we’ve got going and can’t wait to expand and reach out more to local communities and UVic students. If you see me around in the gym, or wandering campus, please feel free to have a chat!' },

    ],
  },
];


const Team = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Our Team</h1>
        <p>Meet the wonderful team behind WECS!
            <br /> <br />
          <img src={verdonGorge} alt="The WECS team" height='441px' width='900px'/>
        </p>
      </div>

      <div style={styles.gallery}>
        {photoData.map((row, rowIndex) => (
          <div key={rowIndex} style={styles.rowContainer}>
            <h2 style={styles.rowText}>{row.text}</h2>
            <div style={styles.row}>
              {row.photos.map((photo) => (
                <img
                  key={photo.id}
                  src={photo.src}
                  alt={photo.title}
                  className="img-fluid"
                  style={styles.thumbnail}
                  onClick={() => handlePhotoClick(photo)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div style={styles.modalOverlay} onClick={handleClose}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span style={styles.closeButton} onClick={handleClose}>×</span>
            <div style={styles.modalBody}>
              <img src={selectedPhoto.src} alt={selectedPhoto.title} style={styles.largeImage} />
              <div style={styles.description}>
                <h2>{selectedPhoto.title}</h2>
                <p>{selectedPhoto.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  header: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  gallery: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  rowContainer: {
    width: '100%',
    marginBottom: '20px',
  },
  rowText: {
    textAlign: 'left',
    marginBottom: '10px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  thumbnail: {
    maxWidth: '350px',
    maxHeight: '300px',
    flex: '1 1 auto',
    margin: '10px',
    cursor: 'pointer',
    objectFit: 'contain',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    position: 'relative',
    maxWidth: '90%',
    maxHeight: '90%',
    display: 'flex',
    flexDirection: 'column',
  },
  modalBody: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  largeImage: {
    maxWidth: '50%',
    maxHeight: '80vh',
    width: 'auto',
    height: 'auto',
    marginRight: '20px',
    objectFit: 'contain',
  },
  description: {
    maxWidth: '40%',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    cursor: 'pointer',
  },
};

export default Team;
