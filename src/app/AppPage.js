import React from 'react';
import PropTypes from 'prop-types';
import {
    createMuiTheme,
    responsiveFontSizes,
    MuiThemeProvider,
    Grid,


} from '@material-ui/core';

import Header from '../components/header';
import Footer from '../components/footer';
import Form from '../components/form';
import WeatherInfo from '../components/weatherInfo';
import useStyles from './style';

const AppPage = ({setRequest, setmakeRequest, info}) => {

    const classes = useStyles();
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);
    return (
        <MuiThemeProvider theme={theme}>
            <Header title="MattuWeather"/>
            <Grid container justify="center" spacing={2} className={classes.grid}>
                
                <Grid item xs={12} sm={12} md={6} >

                    <Form setRequest={setRequest} setmakeRequest={setmakeRequest} info={info} />

                </Grid>
                <Grid item xs={12} sm={12} md={6} >

                    <WeatherInfo info={info} />

                </Grid>      

            </Grid>
            <Footer/>
        </MuiThemeProvider>
    );
}
AppPage.propTypes = {
    setRequest: PropTypes.func.isRequired, 
    setmakeRequest: PropTypes.func.isRequired, 
    info: PropTypes.object.isRequired,
};
export default AppPage;