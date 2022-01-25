import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import useStyles from './header';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const AppBarComponent = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const classes = useStyles();
  return (
    <AppBar
    position="fixed"
    className={clsx(classes.appBar, {
      [classes.appBarShift]: open,
    })}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap>
        Persistent drawer
      </Typography>
    </Toolbar>
  </AppBar>
  )
}
export default AppBarComponent;
