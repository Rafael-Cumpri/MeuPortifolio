import React from "react";
import Image from "next/image";
import styles from "./CardPerson.module.css";

export default function CardPerson({ pessoa }) {
    return (
        <div className={styles.card}>
            <div className={`${styles.imageContainer} ${styles.image}`}>
                <div>
                    <Image src={pessoa.img} alt={pessoa.name} width={192} height={192} />
                </div>
                <div className={styles.details}>
                    <h1 className={styles.name}>{pessoa.name}</h1>
                    <p className={styles.description}>{pessoa.description}</p>
                </div>
            </div>
            <div className={styles.section}>
                <div className={`${styles.sectionTitle} ${styles.title}`}>
                    <h2>Tecnologias</h2>
                </div>
                <div className={styles.sectionContent}>
                    <ul className={styles.list}>
                        {pessoa.tecnologias.map((tecnologia, index) => (
                            <li className={styles.listItem} key={index}>
                                <Image src={tecnologia.img} alt={tecnologia.name} width={50} height={50} />
                                <p>{tecnologia.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.section}>
                <div className={`${styles.sectionTitle} ${styles.title}`}>
                    <h2>Projetos</h2>
                </div>
                <div className={styles.sectionContent}>
                    <ul className={styles.listProjects}>
                        {pessoa.projetos.map((projeto, index) => (
                            <li className={styles.listItemProject} key={index}>
                                <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                                    <Image src={projeto.img} alt={projeto.name} width={50} height={50} />
                                    <p>{projeto.name}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
