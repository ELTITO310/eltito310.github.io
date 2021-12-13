import styles from '../../styles/quest.module.css';
import Me from '../Me';
import useKey from '../hooks/key';
import { useState, useRef, useEffect } from 'react';

const Quest = ({ quests }) => {


    const [dates, setDates] = useState({ lengthQuests: 0, load: false, me: false, value: '' });
    const responses = useRef([]);

    const Change = (e) => {
        if(e.target.value.toLowerCase() !== 'y' && e.target.value.toLowerCase() !== 'n') {
            return setDates((prev) => { return { ...prev, value: '' } })
        }
        return setDates((prev) => { return { ...prev, value: e.target.value } });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(dates.lengthQuests === quests.length - 1) {
            setDates((prev) => { return { ...prev, load: true } });
            responses.current.push({ id: dates.lengthQuests, response: dates.value.toLowerCase() === 'y' ? true : false });
            return;
        } else {
            responses.current.push({ id: dates.lengthQuests, response: dates.value.toLowerCase() === 'y' ? true : false });
            setDates({ lengthQuests: dates.lengthQuests + 1, value: '' });
            return;
        }
    }

    return (
        <>
            { dates.load ? 
                (
                    <Me me={responses.current} />
                )
                :
                (
                    <div className={styles.quest}>
                        <p style={{ color: '#0086FF' }}>{ quests[dates.lengthQuests].name }</p>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Y/N" onChange={Change} value={dates.value} />
                        </form>
                    </div>
                )
            }
        </>
    )
}

export default Quest;