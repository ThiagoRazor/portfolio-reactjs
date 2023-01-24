import React, { useState, FC } from 'react';
import { isTemplateSpan } from 'typescript';
import styles from '../../pages/Home/Home.module.css'
import AOS from 'aos';
import { findByLabelText } from '@testing-library/react';

interface Props {
    items: {
        id: string;
        text: string;
        icon: string;

    }[];
    styles: any;
}



const ShowTextOnHover = ({ items, styles }: Props) => {
    const [hoveringItemId, setHoveringItemId] = useState<string | null>(null);
    const [hoveringItemText, setHoveringItemText] = useState<string | null>(null);

    return (
        <>
            <div className={styles.boxBadges}>
                <div className={styles.skillBox} data-aos='fade-up' data-aos-duration="2000">
                    {items.map(item => (
                        <div
                            className={styles.devBadges}
                            key={item.id}
                            onMouseEnter={() => {
                                setHoveringItemId(item.id);
                                setHoveringItemText(item.text);
                            }}
                            onMouseLeave={() => {
                                setHoveringItemId(null);
                                setHoveringItemText(null);
                            }}
                        >
                            <img src={item.icon}
                                alt={item.id}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.articleArea2} data-aos='fade-up' data-aos-duration="2000">
                    {hoveringItemText ? <p>{hoveringItemText}</p> : <p>Passe o mouse para saber mais sobre as tecnologias</p>}
                </div>
            </div>
        </>
    );
};

export default ShowTextOnHover;