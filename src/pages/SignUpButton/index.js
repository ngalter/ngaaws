import * as React from 'react';
import Button from '@mui/material/Button';
import '../../styles/signupbutton.css';


export default function SignUp() {
  return (<div >
      <Button className={"subutton"}
        variant='contained'
        href="https://runsignup.com/Race/NJ/WestWindsor/MercerCountyTurkeyTrot"
        target="_blank"
        rel="noopener noreferrer"
      >Sign&nbsp;Up
      </Button>
  </div>
  );
}