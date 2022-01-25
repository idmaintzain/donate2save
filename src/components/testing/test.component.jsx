import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CustomButton from "../custom-button/custom-button.component";
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    paddingTop: 110
  },
  cover: {
    width: 990,
    borderRadius:4,
  },
  inputPropertie: {
    margin: theme.spacing(1.5),
    width: '37ch',
  },
  linkTag: {
    marginLeft: 10
    
  }
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 pt-5">
              <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                 Hi, You are welcome
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                Provide the credintials neeeded to access the admin page
                </Typography>
              </CardContent>
              <div>
              <TextField
              required
              id="outlined-required"
              label="Required"
              placeholder="Hello World"
              variant="outlined"
              className={classes.inputPropertie}
              />
               <TextField
              required
              id="outlined-required"
              label="Required"
              placeholder="Hello World"
              variant="outlined"
              className={classes.inputPropertie}
              />
              </div>
              <div className="footer pb-5">
                <p>
                  <Link to='/reset-password' className={classes.linkTag}>Forgot Password?</Link>
                </p>
                <CustomButton>Login</CustomButton>
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
  );
}