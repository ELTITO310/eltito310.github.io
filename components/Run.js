import { useState, useEffect } from 'react';
import Quest from './questions/quest';
import styles from '../styles/Home.module.css';

const Run = ({ questions }) => {

    const [load, setLoad] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoad(true);
        }, 2000);
    }, [questions])

    return (
        <div className={styles.run}>
            { load ?
                ( <Quest quests={questions} /> )
            :
            (
                <>
                    <p style={{color: '#00BE01'}}>Info</p>
                    <p className={styles.spinner}>|</p>
                    <p>Obteniendo las Preguntas</p>
                </>
            )
            }
        </div>
    )
}

export default Run;