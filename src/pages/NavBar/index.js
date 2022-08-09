import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import styles from '../../../styles/navbar.module.css';
import Drawer from '../Drawer';

export default function ButtonAppBar() {
  return (<div>
      <AppBar position="sticky" color="transparent" sx={{ boxShadow: 0 }} className={styles.nav}>
            <Drawer />
    </AppBar>
    </div>
  );
}