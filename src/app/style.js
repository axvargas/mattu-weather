import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: '#26C6DA',
        borderRadius: '0px',
        width: '75%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    grid: {
        width: '100%',
        margin: '0px',
        backgroundColor:'#039be5',
    },
}));
export default useStyles;