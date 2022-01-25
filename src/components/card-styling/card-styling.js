import { makeStyles } from '@material-ui/core/styles';

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
  linkTag: {
    marginLeft: 6,
    textDecoration: 'none',
    color: 'black'
    
  }
}));
export default  useStyles;