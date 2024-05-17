import styles from "./Body.module.css"; 
import { useState } from 'react';
import Body_Education from "../body_education/Body_Education.jsx";
import Body_Portfolio from "../body_portfolio/Body_Portfolio.jsx";
import Body_Projects from "../body_projects/Body_Projects.jsx";


function Body() {
    
    var [currentpage_num, setCurrentpage_num] = useState(0);
    const switchpage = (num) => {
        setCurrentpage_num(num);
    };
    return(
        <>
            <div className={`${styles.container_hori} ${styles["flex-center"]}`}>
                {/* profile picture*/}
                <div className={`${styles.container_verti} ${styles["container_profilepic"]}`}>
                    <div className={`${styles.container_hori} ${styles["flex-center"]} ${styles.container_gap1}`}>
                        <img src="/person1.png" className={`${styles.profilepic1}`}/>
                    </div>
                    <h2 className={`${styles["text-center"]}`}>
                        Lee Jun Jie
                    </h2>
                    <p className={`${styles["text-center"]}`}>
                        Graduate student from YPC International College, willing to be flexible with programming languages and is a fast learner.
                    </p>
                </div>

                {/* profile details*/}
                <div className={`${styles["summary-section"]} ${styles.container_verti} ${styles["flex-center"]} ${styles.container_gap1}`}>
                    <div className={`${styles["summary-section"]} ${styles.container_verti} ${styles.container_gap1} ${styles.container_appearance1}`}>
                        {/* switch page content based on pagenum */}
                        {renderBodyContent(currentpage_num)}
                    </div>
                    <ul className={`${styles["summary-pages"]}`}>
                        <li className={`${styles["text-center"]}`} onClick={() => switchpage(0)}>
                            Education
                        </li>
                        <li className={`${styles["text-center"]}`} onClick={() => switchpage(1)}>
                            Portfolio
                        </li>
                        <li className={`${styles["text-center"]}`} onClick={() => switchpage(2)}>
                            Projects
                        </li>
                    </ul>
                </div>
            </div>

        </>
    );
}

function renderBodyContent(currentpage_num) {
    switch (currentpage_num) {
        case 0:
            return(<Body_Education></Body_Education>);
        case 1:
            return(<Body_Portfolio></Body_Portfolio>);
        case 2:
            return(<Body_Projects></Body_Projects>);
    }
}

export default Body