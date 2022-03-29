import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function NewArtikel() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        title: title,
        description: description,
        price: price,
        image: image
      };
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      };

      const response = await fetch(`http://localhost:1337/article`, config);

    } catch (error) {
      console.log(error);
    }
  };

  return (

    // Header
    <React.Fragment>

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
          <Button to={'/home'} component={Link}>
            <Box
              sx={{ '& > :not(style)': { m: 0 } }}>
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
        <Typography variant="h2" align="center" color="#76aeb2" component="p">
          Neuer Artikel
        </Typography>
      </Container>

      <form onSubmit={handleSubmit}>
      <div className='create-container'>
        <h1>Einen neuen Artikel hochladen:</h1>
        <Box className='Upload'
             component="form"
             sx={{
               '& > :not(style)': { m: 1, width: '29ch' }
             }}
             noValidate
             autoComplete="off"
        >
            <TextField onChange={e => setTitle(e.target.value)} id="outlined-multiline-static" label="Titel"
                       variant="outlined" />
            <TextField onChange={e => setPrice(e.target.value)} id="outlined-multiline-static" label="Preis"
                       variant="outlined" type="Number" />
            <br />

            <TextField
              onChange={e => setDescription(e.target.value)}
              sx={{
                '& > :not(style)': { m: 0, width: '60ch' }
              }}
              id="outlined-multiline-static"
              label="Beschreibung"
              multiline
              rows={4}
            />
        </Box>
        <br />
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="success" type="submit">Artikel aufgeben</Button>
        </Stack>
      </div>
        <div className='create-container-right'>
          <input onChange={e => setImage(e.target.value)} type="file" accept="image/*"></input>
        </div>
      </form>

</React.Fragment>
)
  ;
}

export default NewArtikel;

