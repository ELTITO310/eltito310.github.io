import styles from '../styles/Home.module.css';

const Error = ({ error }) => {
    return (
        <div className={styles.error}>
            <p> El comando <b className={styles.perr}>{ error.length > 4 ? `"${error[0]}.."` : `"${error.join('')}"` }</b> no se reconoce como un comando interno o externo,
programa o archivo por lotes ejecutable.</p>
        </div>
    )
}

export default Error;