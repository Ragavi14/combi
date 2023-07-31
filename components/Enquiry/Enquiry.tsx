import React from "react";
import styles from './Enquiry.module.scss';
import Link from "next/link";

const Enquiry = () => {
    return (
        <div className={`${styles.Enquiry}`}>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <p>A question? A project? Call us on </p>
                        <h6> +91 97427 85352 / 
                           <Link href="#">  mailto:sales@combifer.com </Link> </h6>
                    </div>
                    <div className="col-md-6">
                        <button>Enquiry</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Enquiry;