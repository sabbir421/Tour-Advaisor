import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import t_group from '../../../img/partner logo/tg2.jpg'
import swades from '../../../img/partner logo/Swadesh-Travel-Group.jpg'
import t_Lover from '../../../img/partner logo/tl.jpg'
import t_buddy from '../../../img/partner logo/tb.png'

const Partner = () => {
    return (
        <Container className='shadow'>
            <Typography sx={{textAlign: 'center',mt:2,mb:4}} style={{fontFamily:"Cursive",color:'#BA55D3'}} variant='h3'>Our Tour Partner</Typography>
             <Grid container spacing={2}>
  <Grid item xs={3} sx={{mb:2}}>
    <img src={t_group} alt=""  style={{width:'100%',height:'200px',}}/>
  </Grid>
  <Grid item xs={3} sx={{mb:2}}>
    <img src={t_buddy} alt=""  style={{width:'100%',height:'200px'}}/>
  </Grid>
  <Grid item xs={3} sx={{mb:2}}>
    <img src={swades} alt=""  style={{width:'100%',height:'200px'}}/>
  </Grid>
  <Grid item xs={3} sx={{mb:2}}>
    <img src={t_Lover} alt=""  style={{width:'100%',height:'200px'}}/>
  </Grid>
  
  
</Grid>
        </Container>
       
    );
};

export default Partner;