import styles from "../body/Body.module.css";
import React, { useState, useEffect } from 'react';

function Body_Portfolio() { 
    return(
        <>
            <div className={`${styles["summary-section"]} ${styles.container_verti} ${styles.container_gap1} ${styles.scrolling1}`}>
                <h2>Portfolio</h2>
                <div className={`${styles["dashed-line"]}`}></div>
                <div>
                    <img src="resume.png" width="100%"/>
                </div>
            </div>
        </>
    );
}

export default Body_Portfolio