import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import useStyles from './header';
import { useTheme } from '@material-ui/core/styles';
const DrawerComponent = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  
  const sideBarItems = (items) => {
    if (items === "Dashboard") {
      console.log('D');
    }else if (items === "user Permission") {
      
    }
    else if (items === "user Permission") {
      
    }
    else if (items === "Admin") {
      
    }
    else if (items === "Patients") {
      
    }
    else if (items === "Donation History") {
      
    }
    else if (items === "Supports") {
      
    }
    else if (items === "Logout") {
      
    }
  }
  return (
    <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Dashboard',
          'user Permission',
          'Admin',
          'Patients'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text}  onClick={()=>sideBarItems(text)}/>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            'Donation History',
             'Supports',
             'Logout'].map((text, index) => (
            <ListItem button key={text} >
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} onClick={()=>sideBarItems(text)}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
  )
}

export default DrawerComponent;

