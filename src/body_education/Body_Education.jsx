import styles from "../body/Body.module.css";
import React, { useState, useEffect } from 'react';


function Body_Education() {
    var [UrlDocument, setUrlDocument] = useState("");
    const setDisplayedDocument = (url) => {
        setUrlDocument(url);
        // document.getElementById("resultdisplay").contentDocument.location.reload(true);
    };
    return(
        <>
            <div className={`${styles["summary-section"]} ${styles.container_verti} ${styles.container_gap1}`}>
                <h2>Studied In</h2>
                <div className={`${styles["dashed-line"]}`}></div>
                <table className={`${styles["table-education"]}`}>
                    <tbody>
                        <tr>
                            <th>Year</th>
                            <th>School</th>
                        </tr>
                        <tr>
                            <td>2015</td>
                            <td>
                                <h4>SMK Taman Connaught</h4>
                                <a className={`${styles["result-link"]}`} onClick={() => setUrlDocument("spmresult.png")}>Check Results</a>
                            </td>
                        </tr>
                        <tr>
                            <td>2020</td>
                            <td>
                                <h4>YPC International College</h4>
                                <a className={`${styles["result-link"]}`} onClick={() => setUrlDocument("ljmuresult.pdf")}>Check Results</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Current</td>
                            <td>
                                <h4>Internship</h4>
                                <p className={`${styles["marginpadding-0"]} ${styles["result-link"]}`}>Status: Occupied - Wealth Mastery Academy (Video Editing Intern) </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {
                    (UrlDocument != "") ? (<embed src={`${UrlDocument}#toolbar=0&navpanes=0&scrollbar=0`} height={400} id="resultdisplay" key={`${UrlDocument}#toolbar=0&navpanes=0&scrollbar=0`}/>) : (<div style={{height: 400}} id="resultdisplay"></div>)
                }
            </div>
        </>
    );
}

export default Body_Education
