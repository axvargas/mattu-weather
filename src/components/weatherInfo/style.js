import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginTop: '15px',
        marginBottom: '15px',
        borderRadius: '0px',
    },
    
    avatar: {
        backgroundColor: '#ffeb3b',
        color:'black'
    },
    typo:{
        textAlign:'center',
    }
}));
export default useStyles;