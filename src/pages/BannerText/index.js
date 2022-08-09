import React from 'react';
import SignUpButton from '../SignUpButton';
import styles from '../../styles/bannertext.css';

function BannerText() {
  
    return (<div className={styles.bannertextWrap} id={'bannertext'}>
        <div className={"btTitle1"}>10th Annual Mercer County Turkey Trot</div>
        <div className={"btTitle2"}>Thursday, November 24, 2022</div>
        <div className={"btTitle3"}>Mercer County Park, West Windsor, NJ</div>
        <SignUpButton /> 
       </div>
    )
}             

export default BannerText;