import React from 'react';
import Vendor from '../Vendor';
import styles from '../../../styles/charities.module.css';
import data from '../../../data/charities.json';

function Charities() {
  
    return (<div className={styles.charitiesWrap} id={'charities'}>
        <div className={styles.cTitle}>Mercer County Turkey Trot Supports Local Charities! </div>
        <div className={styles.cGrid}>
            {
                data.charity.map((charity, key) => (
                    <Vendor
                        key={key}
                        header={charity.name}
                        sort={charity.sort}
                        img={charity.img}
                        slug={charity.slug}
                        link={charity.url}
                        title={charity.title}
                    />
                ))
            }
    </div></div>
    )
}             

export default Charities;