import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import  '../../styles/navbar.css';
import Drawer from '../Drawer';

export default function ButtonAppBar() {
  return (<div>
      <AppBar position="sticky" color="transparent" sx={{ boxShadow: 0 }} className={"nav"}>
            <Drawer />
    </AppBar>
    </div>
  );
}