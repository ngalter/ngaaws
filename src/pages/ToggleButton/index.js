import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../../../styles/togglebutton.module.css';


export default function ToggleButton() {
  return (<div >
    <Box
      sx={{position: 'fixed', top: 16, left: 16, zIndex: 1000}}>
      <Fab size="small" className={styles.tbutton} >     
      <MenuIcon />  
      </Fab>
      </Box>
    </div>
  );
}