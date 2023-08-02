import React from "react";
import styles from './SectorSection.module.scss';
import Link from "next/link";

const SectorSection = () => {
    return (
       <div>
           <div className={`container`}>
               <div className={`${styles.sectors} row`}>
                   <h3>Applicable Sectors</h3>
                   <div className={`${styles.IconSector} col-md-2 col-sm-6 text-center`}>
                       <div className={`${styles.Img}`}>
                           <img src="/images/Residential.png" />
                       </div>
                       <figcaption><Link href="#">Residential</Link></figcaption>
                   </div>
                   <div className={`${styles.IconSector} col-md-2 col-sm-6 text-center`}>
                       <div className={`${styles.Img}`}>
                        <img src="/images/retail.png" />
                       </div>
                       <figcaption><Link href="#">Retail & Offices</Link></figcaption>
                   </div>
                   <div className={`${styles.IconSector} col-md-2 col-sm-6 text-center`}>
                       <div className={`${styles.Img}`}>
                        <img src="/images/healthCare.png" />
                       </div>
                       <figcaption><Link href="#"> HealthCare</Link></figcaption>
                   </div>
                   <div className={`${styles.IconSector} col-md-2 col-sm-6 text-center`}>
                       <div className={`${styles.Img}`}>
                        <img src="/images/comercial.png" />
                       </div>
                       <figcaption><Link href="#">  Commercial</Link></figcaption>
                   </div>
                   <div className={`${styles.IconSector} col-md-2 col-sm-6 text-center`}>
                       <div className={`${styles.Img}`}>
                        <img src="/images/learn.png" />
                       </div>
                       <figcaption> <Link href="#">  Learning</Link></figcaption>
                   </div>
                   <div className={`${styles.IconSector} col-md-2 col-sm-6 text-center`}>
                       <div className={`${styles.Img}`}>
                        <img src="/images/hospital.png" />
                       </div>
                       <figcaption> <Link href="#"> Hospitality</Link></figcaption>
                   </div>
               </div>
           </div>

       </div>
    )
}
export default SectorSection;
