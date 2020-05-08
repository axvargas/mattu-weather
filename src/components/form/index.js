import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import useStyles from './style';
import { countries } from './variables';

const Form = ({ setRequest, setmakeRequest, info }) => {
    const classes = useStyles();

    const [country, setCountry] = useState(null);
    const [errorCo, setErrorCo] = useState(false);
    const [helperCo, setHelperCo] = useState('');
    const [city, setCity] = useState('');
    const [errorC, setErrorC] = useState(false);
    const [helperC, setHelperC] = useState('');

    useEffect(() => {
        if (info.cod === '404') {
            setErrorC(true);
            setHelperC(info.message);
        }
    }, [info]);

    const handleSubmit = (event) => {
        event.preventDefault();
        let numberOfErrors = 0;
        if (country === null) {
            numberOfErrors += 1
            setErrorCo(true);
            setHelperCo('Select a country');
        }
        if (city === '') {
            numberOfErrors += 1
            setErrorC(true);
            setHelperC("Type a city");
        }

        if (numberOfErrors > 0) {
            console.log("Stopped")
            return;
        }

        //Pase validacion
        const newRequest = {
            country: country.value,
            city
        }
        setRequest(newRequest);
        setmakeRequest(true);

        

    }
    const handleChangeCity = (event) => {
        setCity(event.target.value);
        setErrorC(false);
        setHelperC('');
    }

    return (
        <Grid container justify="center" spacing={1}>

            {/* <Typography variant="subtitle1">Form</Typography> */}
            <form onSubmit={handleSubmit} className={classes.form}>
                <TextField
                    error={errorC}
                    helperText={helperC}
                    id="standard-basic"
                    label="City"
                    className={classes.cmb}
                    value={city}
                    onChange={handleChangeCity}
                    autoComplete='off'
                />
                <Autocomplete

                    value={country}
                    onChange={(event, newValue) => {
                        setCountry(newValue);
                        setErrorCo(false);
                        setHelperCo('');
                    }}
                    name="country"
                    className={classes.cmb}
                    id="combo-box"
                    options={countries}
                    getOptionLabel={(option) => option.text}
                    renderInput={(params) => <TextField {...params} label='Country' error={errorCo} helperText={helperCo} />}
                />
                <Button
                    className={classes.button}
                    type="submit"
                    variant="contained"
                >
                    Check the temperature
                </Button>


            </form>
        </Grid>


    );
}
Form.propTypes = {
    setRequest: PropTypes.func.isRequired, 
    setmakeRequest: PropTypes.func.isRequired, 
    info: PropTypes.object.isRequired,
};

export default Form;
