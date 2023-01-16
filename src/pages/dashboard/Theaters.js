import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import React from 'react'
import theters from './dummyData/theaterList'
import { useState } from 'react'


// date picker imports
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import ButtonComp from '../../components/atoms/buttonComp/ButtonComp'
import { useNavigate } from 'react-router-dom'
import Modal from '@mui/material/Modal';

const Theaters = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        color: "white"
    };


    const [datePickerValue, setDatePickerValue] = useState(dayjs(''));
    const [time, setTime] = useState(["10 : 00 Am", "02 : 00 Pm", "05 : 00 Pm", "10 : 00 Pm"])

    const [btnEnable, setBtnEnable] = useState(false)

    const [theater, setTheater] = useState({
        theaterName: "",
        open: false
    })
    const [bookTime, setBookTime] = useState({
        time: "",
        open: false
    })

    const getTheater = (theater, index) => {
        setTheater({
            theaterName: ""
        })
        setBookTime({ open: true })
    }

    const getShowTime = (time, index) => {
        setBookTime({
            time: time,
            open: true
        })
        setBtnEnable(true)

    }


    const navigate = useNavigate()
    const detailsAboutMovie = () => {
        navigate('/dashboard/seats')
        setOpen(true)
    }


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box sx={{ backgroundColor: "#272525 ", height: 'calc(100vh - 100px)' }}>
            <Grid sx={{ my: 3 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={datePickerValue}
                        onChange={(newValue) => setDatePickerValue(newValue)}
                        renderInput={(params) => <TextField {...params} />}

                    />
                </LocalizationProvider>

            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "start", padding: "0px 70px" }}>
                <Typography sx={{ color: "#F7EFE6" }} variant="h5">choose theater</Typography>
            </Grid>
            <Grid container item lg={12} md={12} xs={12} spacing={3}
                sx={{
                    padding: "40px 70px",
                }}
            >

                {
                    theters.map((theaters, index) => {
                        return (
                            <>
                                <Grid item lg={2} md={4} xs={12} gap={1}
                                    onClick={(theaters, index) => { getTheater(theaters, index) }}
                                >
                                    <Grid><img height="100%" width="100% " src={theaters.img} alt="movies" /></Grid>
                                    <Grid >
                                        <Typography sx={{ color: "#F7EFE6" }}>{theaters.theaterName}</Typography>
                                    </Grid>

                                </Grid>
                            </>
                        )
                    })
                }

            </Grid>

            {
                bookTime.open &&
                <>
                    <Grid sx={{ display: "flex", justifyContent: "start", padding: "0px 70px" }}>
                        <Typography sx={{ color: "#F7EFE6" }} variant="h5">Show time</Typography>
                    </Grid>

                    <Grid container lg={12} spacing={2}

                        sx={{ padding: "0px 70px" }}>
                        {
                            time.map((time, index) => {
                                return (
                                    <Grid item sm={12} md={3} lg={3}
                                        onClick={(time, index) => { getShowTime(time, index) }}
                                        sx={{
                                            border: "1px solid #8C8C8C",
                                            borderRadius: "5px",
                                            py: 2,
                                            color: "white",
                                            my: 2,
                                        }}>
                                        <Typography >{time}</Typography>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </>
            }
            <Grid sx={{ justifyContent: "end", display: "flex", padding: "0px 70px", my: 5 }}>
                {
                    btnEnable &&
                    <ButtonComp
                        label="Next"
                        size="large"
                        sx={{ backgroundColor: "white", color: "black", fontWeight: "bold" }}
                        onClick={detailsAboutMovie}
                    />
                }

            </Grid>

            {/* modal for seat number and rows */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>

                    <Grid>
                        <ButtonComp
                            label="Proceed"
                            size="large"
                            sx={{ backgroundColor: "white", color: "black", fontWeight: "bold" }}
                            onClick={detailsAboutMovie}
                        />
                    </Grid>
                </Box>
            </Modal>

        </Box>
    )
}

export default Theaters