import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import ToggleButton from '../ToggleButton';
import MailIcon from '@mui/icons-material/Mail';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InfoIcon from '@mui/icons-material/Info';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import HomeIcon from '@mui/icons-material/Home';
import '../../styles/drawer.css';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  const list = (anchor) => (
    <div

      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <Link
          href="https://runsignup.com/Race/NJ/WestWindsor/MercerCountyTurkeyTrot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItem button >
            <ListItemIcon>
              <CheckCircleIcon className={"drawericon"} />
            </ListItemIcon>
            <ListItemText primary={'Sign Up'} className={"drawertext"} />
          </ListItem>
        </Link>
        <Link
          href={'#home'}
        >
          <ListItem button >
            <ListItemIcon>
                   <HomeIcon className={"drawericon"} />
            </ListItemIcon>
            <ListItemText primary={'Home'} className={"drawertext"} />
          </ListItem>
          </Link>
        <Divider />
        <Link href={'#about'}>
          <ListItem  button >
            <ListItemIcon>
                   <InfoIcon  className={"drawericon"}/>
            </ListItemIcon>
            <ListItemText primary={'About'} className={"drawertext"}/>
          </ListItem>
          </Link>
        <Link href={'#sponsors'}>
          <ListItem  button >
            <ListItemIcon>
                   <InfoIcon className={"drawericon"} />
            </ListItemIcon>
            <ListItemText primary={'Sponsors'} className={"drawertext"} />
          </ListItem>
          </Link>
          <Link href={'#charities'}>
          <ListItem  button >
            <ListItemIcon>
                   <InfoIcon className={"drawericon"}/>
            </ListItemIcon>
            <ListItemText primary={'Charities'} className={"drawertext"}/>
          </ListItem>
          </Link>
          <Divider /> 
        <Link href="https://runsignup.com/Race/Photos/NJ/AnywhereAnyPlace/MercerCountyTurkeyTrot"
        target="_blank"
        rel="noopener noreferrer">
          <ListItem  button >
            <ListItemIcon>
                   <CameraAltIcon className={"drawericon"}/>
            </ListItemIcon>
            <ListItemText primary={'Photos 2020'} className={"drawertext"} />
          </ListItem>
        </Link>
        <Link href="https://ckeddiephoto.shootproof.com/gallery/mctt2019/"
        target="_blank"
        rel="noopener noreferrer">
          <ListItem  button >
            <ListItemIcon>
                   <CameraAltIcon className={"drawericon"} />
            </ListItemIcon>
            <ListItemText primary={'Photos 2019'} className={"drawertext"} />
          </ListItem>
        </Link>
        <Link
          href="https://runsignup.com/Race/Results/4745#resultSetId-211810;perpage:100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItem button >
            <ListItemIcon>
              <AvTimerIcon className={"drawericon"}/>
            </ListItemIcon>
            <ListItemText primary={'Results'} className={"drawertext"} />
          </ListItem>
        </Link>
        <Divider />      
        <Link href="mailto:mercerturkeytrot@gmail.com"
        target="_blank"
        rel="noopener noreferrer">
          <ListItem  button >
            <ListItemIcon>
                   <MailIcon className={"drawericon"} />
            </ListItemIcon>
            <ListItemText primary={'Contact'} className={"drawertext"} />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}><ToggleButton /></Button>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}