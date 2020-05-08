import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    cmb: {
        
        '& label.Mui-focused': {
            color: '#FFF',
        },
        '& label': {
            color: '#f5f5f5',
            
        }, 
        '& label.Mui-error': {
            color: '#f44336',
           
            
        }, 
        '& .MuiInputFormControl-root:hover':{
            '& .MuiInputLabel-root':{
                color: '#860900',
            },
        },
        '& .MuiFilledInput-underline.Mui-error:before': {
            borderBottom: '2px solid #f44336',
        },
        '& .MuiFilledInput-underline.Mui-error:after': {
            borderBottom: '2px solid #f44336',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#FFF',
        },
        '& .MuiInput-underline': {
            borderBottomColor: '#FFF',
            
        },
        '& .MuiInput-input:focus': {
            color: '#FFF',

        },
        '& .MuiInput-input: hover': {
            color: '#FFF',
        },
        '& label .MuiInputLabel-outlined': {
            fontSize: 40
        },
        '& .MuiInputBase-input':{
            color: '#fff',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#FFF',
            },


            '&:hover fieldset': {
                borderColor: '#FFF',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FFF',
            },
            color: '#FFF',


        },
    
        '& .MuiInput-underline:before':{
            borderBottom: '1px solid #d5d5d5',
        },
        '& .MuiFilledInput-underline:after': {
            borderBottom: '2px solid #FFF',
        },
        '& .MuiFilledInput-underline:hover': {
            borderBottom: '2px solid #FFF',
        },
        '& .MuiInput-underline.Mui-error:after' :{
            transform: 'scaleX(1)',
            borderBottomColor: '#f44336',
            
        },
        // '& .MuiIconButton-root':{
        //     color: '#f5f5f5',
        // },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: '2px solid rgba(255, 255, 255, 0.87)',
            
        },
        marginTop: 30,
        width:'100%'



    },
    button: {
        marginTop: '25px',
        marginBottom: '25px',
        width: '100%',
        backgroundColor: '#ffeb3b',
        color: 'black',
        textTransform: 'none',
        borderRadius: '0px',
        "& .MuiButton-label":{
            paddingTop:'5px',
            paddingBottom:'5px'
        },
        '&:hover': {

            backgroundColor: '#ffee58',
        },
    },
    helper:{
        textAlign:'center',
    },
    form:{
        width: '75%'
    },
    


}));
export default useStyles;