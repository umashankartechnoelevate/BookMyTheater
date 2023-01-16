import TextField from '@mui/material/TextField';
import React from 'react'

const InputComp = ({
    placeholder = "",
    label = "label",
    variant = "filled",
    onChange = () => { },
    id = "",
    sx={},
    fullWidth=false
}) => {
    return (
        <div>
            <TextField
                variant={variant}
                label={label}
                id={id}
                onChange={onChange}
                sx={sx}
                fullWidth={fullWidth}
            />
        </div>
    )
}

export default InputComp