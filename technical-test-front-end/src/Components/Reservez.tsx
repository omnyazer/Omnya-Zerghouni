import React, { useState } from 'react';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import ReservationForm from './Form'; 

function Reservez() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: ''
  });

  const [formError, setFormError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.nom.trim() === '' || formData.prenom.trim() === '' || formData.telephone.trim() === '' || formData.email.trim() === '') {
      setFormError('Veuillez remplir tous les champs.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setFormError('Veuillez entrer une adresse e-mail valide.');
      return;
    }

    setFormSubmitted(true);
  };

  return (
    <Box id="reservez" sx={{ width: '100%', mt: 10, bgcolor: '#f4f0ea', p: 4 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6} container justifyContent={isMobile ? "center" : "flex-start"} sx={{ flexDirection: 'column', textAlign: isMobile ? 'center' : 'left' }}>
          <Typography variant="h4" color="black" fontWeight="bold">
            Réservez Votre <br /> Table !
          </Typography>
          <Box my={2}>
            <Typography variant="caption" color="textSecondary" fontWeight="800">
              Réservez dès maintenant votre table pour une expérience caféinée inoubliable en compagnie de nos adorables chats. Plongez dans l'ambiance apaisante de Café Chatouille et laissez-vous séduire par nos délices caféinés et nos compagnons félins. Réservez dès aujourd'hui et préparez-vous à vivre un moment magique de détente et de plaisir.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          {formSubmitted ? (
            <Typography variant="body1" color="textPrimary">
              Formulaire envoyé
            </Typography>
          ) : (
            <ReservationForm 
              formData={formData} 
              formError={formError} 
              handleChange={handleChange} 
              handleSubmit={handleSubmit} 
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Reservez;
