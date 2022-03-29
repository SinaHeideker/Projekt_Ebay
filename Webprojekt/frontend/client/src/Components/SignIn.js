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
import TextField from '@mui/material/TextField';



function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}




function SignIn() {

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
          <Button to={'/home'} component={Link}>
            <Box
              sx={{ '& > :not(style)': { m: 0, }, }}>
              <HomeIcon fontSize="large" color="action" />
            </Box>
          </Button>

        </Toolbar>
      </AppBar>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography variant="h2" align="center" color="#76aeb2" component="p">
          MELDE DICH AN!
        </Typography>
      </Container>

      <form className='wrapper'>
        <h2>Registrierung</h2>
        <div></div>
        <div className="form-group">
          <TextField id="outlined-multiline-static" label="Vorname" variant="outlined" /><br />
        </div><br />
        <div className="form-group">
          <TextField id="outlined-multiline-static" label="Nachname" variant="outlined" /><br />
        </div><br />
        <div className="form-group">
          <TextField id="outlined-multiline-static" label="Email Adresse" variant="outlined" /><br />
        </div><br />
        <div className="form-group">
          <TextField id="outlined-multiline-static" label="Passwort" variant="outlined" /><br />
        </div><br />
        <div className="form-group">
        </div>
        <div><Button to={'/home'} component={Link} variant="outlined" color="success">Registrieren</Button>
        </div>
      </form>

    </React.Fragment>
  );
}
export default SignIn;