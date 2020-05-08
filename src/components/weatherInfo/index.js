import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, Card, CardHeader, Avatar, IconButton, CardContent, CardActions } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import useStyles from './style';
//Constant
const kelvin = 273.15;
const WeatherInfo = ({ info }) => {
    const classes = useStyles();
    const { name, main } = info;
    return (
        <Grid container justify="center" direction="column" alignItems="center" spacing={2}>

            {main &&

                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                {name[0]}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={name}
                        subheader={new Date().toDateString()}
                    />

                    <CardContent>
                        <Grid container justify="center" spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">Temperature</Typography>
                                <Typography variant="h2" color="textSecondary" component="p" className={classes.typo}>
                                    {parseFloat(main.temp - kelvin, 10).toFixed(2)} °C
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">Feels like</Typography>
                                <Typography variant="h3" color="textSecondary" component="p" className={classes.typo}>
                                    {parseFloat(main.feels_like - kelvin, 10).toFixed(2)} °C
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">Maximun temperature</Typography>
                                <Typography variant="h6" color="textSecondary" component="p" className={classes.typo}>
                                    {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} °C
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">Minimun temperature</Typography>
                                <Typography variant="h6" color="textSecondary" component="p" className={classes.typo}>
                                    {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} °C
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>

                    </CardActions>

                </Card >

            }

        </Grid >
    );
}

WeatherInfo.propTypes = {
    info: PropTypes.object.isRequired,
};
export default WeatherInfo;
