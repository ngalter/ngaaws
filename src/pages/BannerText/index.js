import React from 'react';
import SignUpButton from '../SignUpButton';
import '../../styles/bannertext.css';

function BannerText() {
  
    return (<div className={"bannertextWrap"} id={'bannertext'}>
        <div className={"btTitle1"}>10th Annual Mercer County Turkey Trot</div>
        <div className={"btTitle2"}>Thursday, November 24, 2022</div>
        <div className={"btTitle3"}>Mercer County Park, West Windsor, NJ</div>
        <div className={"btTitle4"}>Registration is Open</div>
        <SignUpButton /> 
       </div>
    )
}             

export default BannerText;