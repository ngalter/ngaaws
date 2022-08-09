import React from "react";
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import '../../styles/social.css';

function Social() {
    return (<div className={"socialWrap"} id={'social'}>
    <div>
    <Link
      href={"https://www.facebook.com/MercerCountyTurkeyTrot"}
      target='blank'
      rel='noopener noreferer'>
      <FacebookIcon className={"fb"}/> 
    </Link>
    <Link
      href={"https://www.instagram.com/mercercountyturkeytrot/"}
      target='blank'
      rel='noopener noreferer'>
      <InstagramIcon className={"fb"} /> 
    </Link>
    <Link
      href={"mailto:mercerturkeytrot@gmail.com"}
      target='blank'
      rel='noopener noreferer'>
      <MailIcon className={"fb"}/> 
     </Link> 
    </div>
    </div>
    )
}             

export default Social;