import React from 'react';
import Link from '@mui/material/Link';

function getImg(slug) {
    let img = "";
    if (slug === "rvc") {
      img = "./rvc.png";
      return img;
    } else if (slug === "tp") {
      img = "./tp.png";
      return img;
    } else if (slug === "lb") {
      img = "./lb.png";
      return img;
    } else if (slug === "ss") {
      img = "./ss.png";
      return img;
    } else if (slug === "bp") {
      img = "./bp.png";
      return img;
    } else if (slug === "bcb") {
      img = "./bcb.png";
      return img;
    } else if (slug === "jfcs") {
      img = "./jfcs.png";
      return img;
    } else if (slug === "rise") {
      img = "./rise.png";
      return img;
    } else if (slug === "task") {
      img = "./task.png";
      return img;
    } else if (slug === "ty") {
      img = "./ty.png";
      return img;
    } else if (slug === "cc") {
      img = "./arc.png";
      return img;
    } else if (slug === "msf") {
      img = "./msf.png";
      return img;
    } else {
      console.log('no image');
    }
    };

const Intrinsic = (props) => (
    <div>
     <Link
      href={props.link}
     target='blank'
     rel='noopener noreferer'>  
      <img
        alt={props.title}
        title={props.title}
        src={getImg(props.slug)}
        width={'100%'}
        height={'auto'}
        />
    </Link>
  </div>
)

export default Intrinsic;