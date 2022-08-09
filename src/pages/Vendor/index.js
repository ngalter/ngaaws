import Image from 'next/image'
import React from 'react';
import Link from '@mui/material/Link';
import rvc from '../../public/rvc.png';
import tp from '../../public/tp.png';
import lb from '../../public/lb.png';
import ss from '../../public/ss.png';
import bp from '../../public/bp.png';
import bcb from '../../public/bcb.png';
import ty from '../../public/ty.png';
import jfcs from '../../../public/jfcs.png';
import rise from '../../../public/rise.png';
import task from '../../../public/task.png';
import cc from '../../../public/cc.png';
import msf from '../../../public/msf.png';

function getImg(slug) {
    let img = "";
    if (slug === "rvc") {
      img = rvc;
      return img;
    } else if (slug === "tp") {
      img = tp;
      return img;
    } else if (slug === "lb") {
      img = lb;
      return img;
    } else if (slug === "ss") {
      img = ss;
      return img;
    } else if (slug === "bp") {
      img = bp;
      return img;
    } else if (slug === "bcb") {
      img = bcb;
      return img;
    } else if (slug === "jfcs") {
      img = jfcs;
      return img;
    } else if (slug === "rise") {
      img = rise;
      return img;
    } else if (slug === "task") {
      img = task;
        return img;
    } else if (slug === "ty") {
        img = ty;
        return img;
    } else if (slug === "cc") {
      img = cc;
      return img;
    } else if (slug === "msf") {
      img = msf;
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
      <Image
      alt={props.title}
      title={props.title}
      src={getImg(props.slug)}
      layout="intrinsic"
      width={500}
      height={281}
            />
    </Link>
  </div>
)

export default Intrinsic;