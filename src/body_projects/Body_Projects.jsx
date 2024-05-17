import styles from "../body/Body.module.css";
import React, { useState, useEffect } from 'react';

function Body_Projects() { 
    return(
        <>
            <div className={`${styles["summary-section"]} ${styles.container_verti} ${styles.container_gap1} ${styles.scrolling1}`}>
                <h2>Projects Created</h2>
                <div className={`${styles["dashed-line"]}`}></div>
                <div className={`${styles["projectcollection-flex"]}`}>
                    <div className={`${styles.container_gap1}`}>
                        <div>
                            <h3>Bachelor's Degree FYP - Drofylite</h3>
                        </div>
                        <div>
                            <p className={`${styles["text-justify"]}`}>
                                Drofylite is a roguelike turn-based combat game, featuring a party system that can summon forth allies in combat and in exploration.
                                <br></br>
                                Developed in Godot Engine, C#. 
                            </p>
                        </div>
                        
                        <div className={`${styles["projectimg-container"]}`}>
                            <img className={`${styles["projectimg-cover"]}`} src="../project1_cover.png"/>
                            <img className={`${styles["projectimg-background"]}`} src="../project1_background.jpg"/>
                        </div>
                    </div>

                    <div className={`${styles.container_gap1}`}>
                        <div>
                            <h3>Side Project - Vampire Survivor Imitation</h3>
                        </div>
                        <div>
                            <p className={`${styles["text-justify"]}`}>
                                Imitation attempt of the Vampire Survivor genre to learn real-time physics processing in game development while practicing ECS-based implementation.
                                <br></br>
                                Developed in Godot Engine, C#
                            </p>
                        </div>

                        <div className={`${styles["projectimg-container"]}`}>
                            <img className={`${styles["projectimg-cover"]}`} src="../project2_cover.png"/>
                            <img className={`${styles["projectimg-background"]}`} src="../project2_background.png"/>
                        </div>
                    </div>

                    <div className={`${styles.container_gap1}`}>
                        <div>
                            <h3>Website Development - Sheimg</h3>
                        </div>
                        <div>
                            <p className={`${styles["text-justify"]}`}>
                                Website developed to display a set of animations, made in collaboration with other students in the same degree specification.
                                <br></br>
                                Developed with classic JS, HTML and CSS
                            </p>
                        </div>

                        <div className={`${styles["projectimg-container"]}`}>
                            <img className={`${styles["projectimg-cover"]}`} src="../project3_cover.png"/>
                            <img className={`${styles["projectimg-background"]}`} src="../project3_background.png"/>
                        </div>
                    </div>

                    <div className={`${styles.container_gap1}`}>
                        <div>
                            <h3>Packaging Design - Door Package</h3>
                        </div>
                        <div>
                            <p className={`${styles["text-justify"]}`}>
                                In collaboration with other members in the same degree specification, a packaging design for storing items was made
                                <br></br>
                                Developed using Adobe Illustrator
                            </p>
                        </div>

                        <div className={`${styles["projectimg-container"]}`}>
                            <img className={`${styles["projectimg-cover"]}`} src="../project4_cover.jpg"/>
                            <img className={`${styles["projectimg-background"]}`} src="../project4_background.png"/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Body_Projects