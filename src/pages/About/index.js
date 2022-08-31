import React from 'react';
import Link from '@mui/material/Link';
import Social from '../Social';
import '../../styles/about.css';
import data from '../../data/about.json';


function About() {
    return (<div className={"aboutWrap"} id={'about'}>
        <div><Social /></div>
        <div className={"aGrid"}>
            {
                // eslint-disable-next-line react/jsx-key
                data.about.map((about, key) => (<div>
                    <div className={"aTitle"}>{about.header}</div>
                    <div className={"aText"}>{about.text}</div>
                    <div>
                    <Link className={"aText"}
                      key={key}
                      href={about.url}
                      target='blank'
                      rel='noopener noreferer'>
                      {about.urltext}
                    </Link>
                    </div>
                </div>
                ))
            }
    </div></div>
    )
}             

export default About;