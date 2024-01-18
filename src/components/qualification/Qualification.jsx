import React, { useState } from 'react'
import "./Qualification.css"
const Qualification = () => {

    const[toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={() => toggleTab(1)} 
                    className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div  onClick={() => toggleTab(2)} 
                       className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}> 
                        <i class='bx bxs-briefcase-alt  qualification__icon'></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                     className={toggleState ===
                      1 ? "qualification__content qualification__content-active" 
                      : "qualification__content"  }>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">
                                    Bursa
                                </span>
                                <div className="qualification__calender">
                                <i class='bx bx-calendar qualification__calendar'></i>  
                                    2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>


                            <div>
                                <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Web Developer Intern</h3>
                                <span className="qualification__subtitle">
                                    Bursa
                                </span>
                                <div className="qualification__calender ">
                                <i class='bx bx-calendar qualification__calendar'></i>
                                    2023 -  2024
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UX İntern</h3>
                                <span className="qualification__subtitle">
                                    Bursa
                                </span>
                                <div className="qualification__calender  ">
                                <i class='bx bx-calendar qualification__calendar' ></i>
                                    2022 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                            </div>
            

                        </div>

                        <div className="qualification__data">
                            <div></div>


                            <div>
                                <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">
                                    Bursa
                                </span>
                                <div className="qualification__calender  ">
                                <i class='bx bx-calendar qualification__calendar'></i>
                                    2021 - 2022
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content" }>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product Designer</h3>
                                <span className="qualification__subtitle">
                                    Renault - Bursa
                                </span>
                                <div className="qualification__calender  ">
                                <i class='bx bx-calendar qualification__calendar'></i>
                                    2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>


                            <div>
                                <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX Designer</h3>
                                <span className="qualification__subtitle">
                                    Apple - Bursa
                                </span>
                                <div className="qualification__calender  ">
                                <i class='bx bx-calendar qualification__calendar'></i>
                                    2023 -  2024
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">
                                    Figma- Spain
                                </span>
                                <div className="qualification__calender  ">
                                <i class='bx bx-calendar qualification__calendar'></i>
                                    2022 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </section>
    )
}

export default Qualification