import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

function CreateArtikel() {
  return (


    // Header
    <React.Fragment>
      {console.log('Test')}
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <h2>E</h2><h4>bu</h4><h2>Y</h2>
          <Typography variant="h6" color="#468a84" noWrap sx={{ flexGrow: 1 }}>
          </Typography>
          <Button to={'/NewArtikel'} component={Link}
            sx={{ '& > :not(style)': { m: 2, }, }}>
            <AddIcon fontSize="large" color="action" />
          </Button>
          <Button to={'/home'} component={Link}>
            <Box
              sx={{ '& > :not(style)': { m: 0, }, }}>
              <HomeIcon fontSize="large" color="action" />
            </Box>
          </Button>
          <Button to={'/Login'} component={Link}>
            <Stack direction="row" spacing={2}>
              <Avatar src="/broken-image.jpg" />
            </Stack>
          </Button>

        </Toolbar>
      </AppBar>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography variant="h3" align="center" color="#76aeb2" component="p">
          Meine Artikel
        </Typography>
      </Container>


      <Container sx={{ py: 2 }} maxWidth="none">
        <Grid container spacing={7}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={4} md={3}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Artikel
                  </Typography>
                  <Typography>
                    Beschreibung des Artikels!
                  </Typography>
                </CardContent>
                <Box
                  sx={{ '& > :not(style)': { m: 2, }, }}>
                  <DeleteIcon fontSize="medium" color="action" />
                  <CreateIcon fontSize="medium" color="action" />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>



    </React.Fragment>
  );
}
export default CreateArtikel;

