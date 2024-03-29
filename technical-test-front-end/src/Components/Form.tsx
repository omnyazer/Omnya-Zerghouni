import React from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';

interface Props {
  formData: { nom: string; prenom: string; telephone: string; email: string };
  formError: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ReservationForm: React.FC<Props> = ({ formData, formError, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            name="nom"
            label="Nom"
            value={formData.nom}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="prenom"
            label="Prénom"
            value={formData.prenom}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="telephone"
            label="Téléphone"
            value={formData.telephone}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="email"
            label="E-mail"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="standard"
            type="email"
          />
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="flex-end" sx={{ mt: 2 }}>
        <Button 
          type="submit" 
          variant="contained" 
          sx={{ 
            bgcolor: '#71a794', 
            color: 'white', 
            borderRadius: '40px', 
            padding: '10px 20px', 
          }}
        >
          Réserver
        </Button>
      </Grid>
      {formError && (
        <Typography variant="body2" color="error">
          {formError}
        </Typography>
      )}
    </form>
  );
};

export default ReservationForm;
