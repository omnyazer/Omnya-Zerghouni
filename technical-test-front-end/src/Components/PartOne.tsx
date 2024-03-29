import { Box, Grid, Typography, CardMedia, Button } from '@mui/material';
import imageSrc from  '../../public/images/cat-hero-section.png'; 
import { useMediaQuery, useTheme } from '@mui/material';

function PartOne() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ width: '100%', mt: 10, bgcolor: 'white', p: 1 }}> 
      <Grid container spacing={2} alignItems="center">

        <Grid item xs={12} md={6} container justifyContent={isMobile ? "center" : "flex-start"} sx={{ flexDirection: 'column', textAlign: isMobile ? 'center' : 'left' }}>
          <Typography variant="h4" color="black" fontWeight="bold">
            Bienvenue <br /> chez Café Neko
          </Typography>

          <Box my={2}>
            <Typography variant="caption" color="textSecondary" fontWeight="800">
              L'endroit où le café rencontre les ronronnements
            </Typography>
          </Box>

          <Typography variant="caption" color="textSecondary">
            Bienvenue dans notre univers où chaque tasse de café est accompagnée d'une dose d'amour félin. 
          </Typography>
          
        
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start', mt: 2 }}> 
            <Button 
              variant="contained" 
              size="small" 
              sx={{ 
                bgcolor: '#71a794', 
                color: 'white', 
                borderRadius: '40px', 
                textAlign: 'left', 
                paddingLeft: '20px', 
                paddingRight: '20px',
                maxWidth: '150px',
                fontSize: '0.60rem', 
                height: '3rem' 
              }}
            >
              Nous contacter
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <CardMedia
            component="img"
            image={imageSrc}
            alt="Image"
            sx={{
              width: '100%', 
              maxWidth: '80%', 
              maxHeight: 'auto', 
              height: 'auto' 
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default PartOne;
