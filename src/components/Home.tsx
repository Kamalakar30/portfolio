'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import Socials from './Socials';
import { roles } from '@/data';

const TypingEffect: React.FC = () => {
    const texts: string[] = roles;

    const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <div className={styles.typing_container}>
            <div className={styles.typing_text} key={currentTextIndex}>
                {texts[currentTextIndex]}
            </div>
        </div>
    );
};

const Home: React.FC = () => {
    return (
        <div className={styles.main}>
            {/* Hero Section */}
            <div className={styles.grid_container}>
                <div className={styles.grid_item} id={styles.g1}>
                    <div className={styles.secMain}>
                        <div className={styles.mainContent}>
                            <div className={styles.container}>
                                Hi There!
                                <span className={styles.hand}>👋🏻</span>
                            </div>
                        </div>
                        <h1 className={styles.sec}>
                            I&apos;M <span className={styles.secSpan}>CHITLA KAMALAKAR</span>
                        </h1>
                        <div className={styles.third} style={{ fontWeight: 'bold' }}>
                            <TypingEffect />
                        </div>
                    </div>
                </div>
                <div className={styles.grid_item} id={styles.g2}>
                    <div className={styles.subDiv}></div>
                </div>
            </div>

            {/* About Section */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    justifyItems: 'center',
                    alignItems: 'center',
                }}
            >
                <div className={styles.div1}>
                    <div style={{ backgroundColor: 'transparent' }}>
                        <div className={styles.div2}>
                            LET ME <span style={{ color: 'rgb(231, 110, 231)' }}>INTRODUCE</span>{' '}
                            MYSELF
                        </div>
                        <div className={styles.div3}>
                            <p>
                                Hello! I&apos;m{' '}
                                <span style={{ color: 'rgb(231, 100, 231)', fontWeight: 'bold' }}>
                                    chitla kamalakar
                                </span>
                                {/* , a Motivated and detail-oriented Full Stack Developer with hands-on
                                experience in scalable web apps. */}
                                I am a passionate and detail-oriented Computer Science student with strong skills in web development, problem-solving, and software engineering.
                                <br />
                                <br />
                                I enjoy building scalable applications and working with modern technologies like React, Java, Python, and databases.
                                <br />
                                <br />
                                I&apos;m committed to continuous learning and contributing to
                                tech-driven teams.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Socials Section */}
                <div className={styles.d1}>
                    <div className={styles.d2}>FIND ME ON</div>
                    <div className={styles.d3}>
                        Feel free to{' '}
                        <span style={{ color: 'rgb(231, 90, 231)', fontWeight: 'bold' }}>
                            connect
                        </span>{' '}
                        with me
                    </div>
                    <Socials />
                </div>
            </div>
        </div>
    );
};

export default Home;
