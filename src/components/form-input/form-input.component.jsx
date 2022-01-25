import  './form-input.style.css';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1.5),
      width: '38ch',
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
             
              />
    </div>
  )
}
 

export default FormInput;