import { AppBar, Toolbar, Typography, Box, useMediaQuery } from '@mui/material';
// import { useResponsive } from './useResponsive';
import Container from '@mui/material/Container';
import { Outlet,Link } from "react-router-dom";

const Header = () => {
  const isMobile = useResponsive();

  return (
    <>
    <AppBar position="static" sx={{backgroundColor : 'white', color : 'black', boxShadow: '#898787 0px 1px 20px 1px !import'}}  >
        <Container >
      <Toolbar sx={{width:'100%'}}>
            <Box sx={{ flexGrow: 1, minWidth : 175, maxWidth : 175 }}>
            <Typography variant="h6" component="div"  sx={{ display: { xs: 'none', sm: 'block' } }}>
                IGIS SURVEY 360
            </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'left' }}>
                <Typography component={Link}  to='/' variant="body1" sx={{m : 2, textDecoration:'none', color:'black'}} >Home</Typography>
                <Typography component={Link}  to='/price' variant="body1" sx={{m : 2, textDecoration:'none', color:'black'}}>Pricing</Typography>
                <Typography component={Link}  to='/components' variant="body1" sx={{m : 2, textDecoration:'none', color:'black'}}>Components</Typography>
                <Typography component={Link}  to='/applications' variant="body1" sx={{m : 2, textDecoration:'none', color:'black'}}>Applications</Typography>
                <Typography component={Link}  to='/contact' variant="" sx={{m : 2 , width:'max-content', textDecoration:'none', color:'black' }}>Contact Us</Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'right' , width:'100%'}}>
                <Typography variant="" sx={{m : 2}} >Login</Typography>
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Typography variant="body1">Menu</Typography>
            </Box>
      </Toolbar>
        </Container>
    </AppBar>
    <Outlet />
    </>
  );
};

const useResponsive = () => {
  return useMediaQuery('(max-width:600px)');
};

export default Header;