import  './form-input.style.css';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '38ch',
      // height: 30
    },
  },
}));
const FormInput = ({handleOnchange, placeHolder, otherProps }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
              required
              id="outlined-required"
              label="Required"
              onChange={handleOnchange}
               placeholder={placeHolder}
              variant="outlined"
              name={otherProps}
             
              />
    </div>
  )
}
 

export default FormInput;