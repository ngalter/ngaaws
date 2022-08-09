import React from "react";
import Vendor from '../Vendor';
import '../../styles/sponsors.css';
import data from '../../data/sponsors.json';
import Link from '@mui/material/Link';

function Sponsors() {
    return (<div className={"sponsorsWrap"} id={'sponsors'}>
        <div className={"sTitle"}>Mercer County Turkey Trot Thanks Our Sponsors</div>
        <div className={"sGrid"}>
            {
                data.sponsor.map((sponsor, key) => (
                    <Vendor 
                        key={key}
                        header={sponsor.name}
                        sort={sponsor.sort}
                        img={sponsor.img}
                        slug={sponsor.slug}
                        link={sponsor.url}
                        title={sponsor.title}
                    />
                ))
            }
        </div>
        <div className={"sFoot"}>
            <Link href='https://runsignup.com/Race/Sponsors/NJ/Princeton/MercerCountyTurkeyTrot'
                  rel={'noopener noreferrer'}
                  target={'_blank'}
            >All Sponsors</Link>
        </div>
    </div>
    )
}             

export default Sponsors;