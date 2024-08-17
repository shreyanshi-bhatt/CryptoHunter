import React from 'react'
import { AppBar, Container, MenuItem, Toolbar, Typography, Select } from '@mui/material';
import Carousel from './Carousel'

const Banner = () => {
  return (
    <div className='banner'>
        <Container className='bannerContent'>
            <div className='tagline'>
                <Typography
                    variant="h2"
                    style={{
                    fontWeight: "bold",
                    marginBottom: 15,
                    fontFamily: "Montserrat",
                    }}
                >
                    Krypto Verse
                </Typography>
                <Typography
                    variant="subtitle2"
                    style={{
                    color: "darkgrey",
                    textTransform: "capitalize",
                    fontFamily: "Montserrat",
                    }}
                >
                    Get all the Info regarding your favorite Crypto Currency
                </Typography>
            </div>
            <Carousel />
        </Container>
    </div>
  )
}

export default Banner