import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import CoffeeIcon from '../../public/icons/coffee-icon.svg';
import CatIcon from '../../public/icons/cat-icon.svg';
import PlantIcon from '../../public/icons/plant-icon.svg';

function NV() {
  return (
    <Box mt={20}> 
      <Box id="nosValeurs" sx={{ textAlign: 'center' }}>
        <Typography variant="h4" sx={{ color: '#71a794' }}>
            Nos valeurs
        </Typography>
        
        <Grid container spacing={2} justifyContent="center" mt={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent sx={{ marginBottom: 6.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={CoffeeIcon} alt="Coffee Icon" style={{ width: 50, height: 50 }} />
                </Box>
                <Typography variant="h6" sx={{ textAlign: 'center', mt: 2, fontWeight: 'bold' }}>
                  Passionné de Café
                </Typography>

                <Box my={2}>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Notre équipe est passionnée par l'art de préparer le café. Chaque grain est soigneusement sélectionné pour offrir une expérience gustative exceptionnelle. Nous nous engageons à vous offrir des saveurs riches et uniques dans chaque tasse.
                  </Typography>
                </Box>

              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent sx={{ marginBottom: 6.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={CatIcon} alt="CatIcon" style={{ width: 50, height: 50 }} />
                </Box>
                <Typography variant="h6" sx={{ textAlign: 'center', mt: 2, fontWeight: 'bold' }}>
                  Bien-être des Chats
                </Typography>

                <Box my={2}>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Le bonheur et le bien-être de nos amis félins sont au cœur de notre philosophie. Nous offrons un environnement sûr et confortable à nos chats résidents, où ils peuvent interagir avec nos clients et recevoir toute l'attention et l'affection qu'ils méritent.
                  </Typography>

                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={PlantIcon} alt="PlantIcon" style={{ width: 50, height: 50 }} />
                </Box>
                <Typography variant="h6" sx={{ textAlign: 'center', mt: 2, fontWeight: 'bold' }}>
                  Engagement Environnemental
                </Typography>

                <Box my={2}>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Nous sommes soucieux de l'impact environnemental de notre entreprise. C'est pourquoi nous nous engageons à utiliser des produits respectueux de l'environnement et à promouvoir des pratiques durables dans tous les aspects de notre activité, de la sélection des fournisseurs à la gestion des déchets.
                  </Typography>
                  
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default NV;
