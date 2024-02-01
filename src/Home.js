import { AppBar, Toolbar, Box, Typography, Grid, Button } from "@mui/material";
import bg from "./images/Web-banner-BG.png"
import banner from "./images/Web-banner-mobile-screen.png"
const Home = ()=>{
    return(
        


            <Box
            component='div'
            sx={{
                backgroundImage: `url(${bg})`
            }}
            >
                <Grid container spacing={2} sx={{width:1300, margin:'auto', padding:'100 0'}}>
                <Grid xs={4} sx={{ display: 'flex',  alignItems: 'center', padding: '10px 0px'}}>
                    <Box xs={6}>
                        <Typography variant='h3' sx={{margin:'20px 0px'}}>SURVEY 360 Geo Survey Solution</Typography>
                        <Typography variant='h3' color='white'>Easy for beginners, Powerful for experts </Typography>
                        <Button variant="contained"  sx={{margin:5,color:"black" ,backgroundColor:'white' }} >Buy Now</Button>
                        <Button variant="contained"  sx={{margin:5,color:"black" ,backgroundColor:'white' }} >Try Now</Button>
                    </Box>
                </Grid>
                <Grid xs={8} sx={{ margin: 'auto', padding: '10px 0px'}}>
                    <Box xs={6}>
                        <img src={`${banner}`} width='fit-content' />
                        {/* <Typography variant='h1'>SURVEY 360 Geo Survey Solution</Typography> */}
                    </Box>
                </Grid>
                </Grid>
            </Box>
            
               
                
      
    )
}

export default Home;