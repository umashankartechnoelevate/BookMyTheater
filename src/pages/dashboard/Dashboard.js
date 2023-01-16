import Grid from '@mui/material/Grid'
import { Box } from '@mui/system';
import React from 'react'
import ImageSlider, { Slide } from "react-auto-image-slider";
import ButtonComp from '../../components/atoms/buttonComp/ButtonComp';
import movieslist from './dummyData/movieList'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

    const navigate = useNavigate()

    const theaters = () => {
        navigate('/dashboard/theaters')
    }
    return (
        <Box >
            <Grid className='movieSlider' item lg={12} md={12} xs={12}>
                <ImageSlider effectDelay={500} autoPlayDelay={2000} >
                    <Slide >
                        <img height="100%" width="100%" alt="img2" src="../assets/dashboard/moviesSliderList/slide1.png" />
                    </Slide>
                    <Slide>
                        <img height="100%" width="100%" alt="img2" src="../assets/dashboard/moviesSliderList/slide2.png" />
                    </Slide>
                    <Slide>
                        <img alt="img1" src="../assets/dashboard/moviesSliderList/slide3.png" />
                    </Slide>
                    <Slide>
                        <img alt="img1" src="../assets/dashboard/moviesSliderList/slide4.png" />
                    </Slide>
                    <Slide>
                        <img alt="img1" src="../assets/dashboard/moviesSliderList/slide5.png" />
                    </Slide>
                </ImageSlider>
            </Grid>

            <Grid container item lg={12} md={12} xs={12} spacing={2}
                sx={{
                    padding: "40px 70px",
                }}
            >
                {
                    movieslist.map((movies, index) => {
                        return (
                            <>
                                <Grid item lg={3} md={4} xs={12} spacing={2} >
                                    <Grid><img height="100%" width="100% " src={movies.img} alt="movies" /></Grid>
                                    <Grid sx={{ px: 4 }}>
                                        <ButtonComp
                                            size='large'
                                            fullWidth="true"
                                            variant="contained"
                                            label="Book Now"
                                            onClick={theaters}
                                            sx={{
                                                marginTop: "-120px",
                                                color: "#F7EFE6",
                                                // backgroundColor:"gray",
                                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                                                backdropFilter: "blur(14px)",
                                                opacity: 2,
                                                fontWeight: "bold",
                                                border: "1px solid #F7EFE6",
                                                "&:hover": {
                                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                                    backdropFilter: "blur(14px)",
                                                },
                                            }}
                                        />
                                    </Grid>

                                </Grid>
                            </>
                        )
                    })
                }

            </Grid>
        </Box>

    )
}

export default Dashboard