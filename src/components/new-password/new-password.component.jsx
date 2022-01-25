import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CustomButton from "../custom-button/custom-button.component";
import {Link} from 'react-router-dom'
import { Fragment, useState } from 'react';
import FormInput from '../form-input/form-input.component';
import useStyles from '../card-styling/card-styling';
import './new-password.styles.css'

const NewPassword = () => {
  const [ formDetails, setFormDetails ] = useState(['password', 'confirmPassword']);
  const classes = useStyles();
  const theme = useTheme();
  const handleSubmit = ( event ) => {
    event.preventDefault();
    setFormDetails(['',''])
  }
  const handleChange = ( event ) => {
    event.preventDefault();
    const {name, value } = event.target;
    setFormDetails({[name]:value});
  }
  return (
      <Fragment>
       <div className="container">
         <div className="row justify-content-center">
           <div className="col-md-8 col-lg-8 col-xl-8 pt-4">
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                  New Password
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                  Provide new and confirm the new Password
                  </Typography>
                </CardContent>
                <div>
                  <form onSubmit={handleSubmit}>
                  <div>
                  {formDetails.map((val,ind)=>(
                    <div key={ind}>
                      <FormInput placeHolder={val} onChange={handleChange} name={val}/>
                    </div>
                  ))}
                </div>
                  </form>
                </div>
                <div className="footer pb-5">
                  <p>
                    <Link to='/signin' className={classes.linkTag}>Back to Login?</Link>
                  </p>
                  <CustomButton >Save</CustomButton>
                </div>
              </div>
              <CardMedia
                className={classes.cover}
                image="../../images/katt-yukawa-K0E6E0a0R3A-unsplash.jpg"
                title="Live from space album cover"
              />
            </Card>
           </div>
         </div>
       </div>
      </Fragment>
  )
}
export default NewPassword