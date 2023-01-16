import Button from '@mui/material/Button';
import { bgcolor } from '@mui/system';
import React from 'react'

const ButtonComp = ({
    label = "button",
    disabled = false,
    size = "small",
    variant = "contained",
    sx = {},
    fullWidth = false,
    border = "",
    bgcolor = "red",
    onClick=()=>{}
}) => {
    return (
        <div>
            <Button
                variant={variant}
                disabled={disabled}
                size={size}
                sx={sx}
                fullWidth={fullWidth}
                className={`${variant === "contained" ? bgcolor : variant === "outlined" ? border : ""}`}
                onClick={onClick}
            >{label}</Button>
        </div>
    )
}

export default ButtonComp