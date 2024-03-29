import { Box, Grid, Typography, CardMedia, useMediaQuery, useTheme } from '@mui/material';
import imageSrc from '../../public/images/image-about-us.png';

function QSM() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box id="quiSommesNous" sx={{ width: '100%', mt: 10, bgcolor: '#f4f0ea', p: 1 }}>
      <Grid container spacing={2} alignItems="center">

       
        {!isMobile && (
          <Grid item xs={12} md={6} container justifyContent="center" sx={{ textAlign: 'center', order: { md: 1 } }}>
            <Box sx={{ p: 4 }}> 
              <CardMedia
                component="img"
                image={imageSrc}
                alt="Image"
                sx={{
                  width: '80%', 
                  maxHeight: 'auto',
                  height: 'auto'
                }}
              />
            </Box>
          </Grid>
        )}

        <Grid item xs={12} md={6} container justifyContent="center" sx={{ flexDirection: 'column', textAlign: 'left', order: { sm: 2, md: 2 } }}>
          <Box p={2}> 
            <Typography variant="h4" color="black" fontWeight="bold" sx={{ textAlign: 'center', fontSize: '24px', mt: 2 }}>
              Qui sommes-nous ?
            </Typography>
            <Box my={2} />
            <Typography variant="caption" color="textSecondary" sx={{ textAlign: 'left', fontWeight: 'bold', fontSize: '14px' }}> 
              Bienvenue chez Café Neko, l'endroit où le café et les chats se rencontrent pour créer une expérience unique en son genre.
            </Typography>
            <Box my={2} />
            <Typography variant="caption" color="textSecondary" sx={{ textAlign: 'left', fontWeight: 'bold', fontSize: '14px' }}> 
              Chez Café Neko, nous sommes passionnés par deux choses : le café de qualité et le bien-être des chats. Fondé par des amoureux des félins et des aficionados du café, Café Neko est bien plus qu'un simple café. C'est un refuge pour les amoureux des chats, un havre de paix où l'on peut savourer une bonne tasse de café tout en câlinant nos adorables résidents à quatre pattes.
            </Typography>
          </Box>
        </Grid>

        {isMobile && (
          <Grid item xs={12} md={6} container justifyContent="center" sx={{ textAlign: 'center', order: 3 }}>
            <CardMedia
              component="img"
              image={imageSrc}
              alt="Image"
              sx={{
                width: '80%',
                maxHeight: 'auto',
                height: 'auto',
                p: 6 
              }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default QSM;
