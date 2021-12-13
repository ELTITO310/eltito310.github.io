import styles from '../styles/Home.module.css'
import Error from '../components/Error'
import Run from '../components/Run'
import questions from '../components/questions/questions.json'
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {

  const [command, setCommand] = useState('');
  const [messages, setMessages] = useState({ load: false, errors: [] });

  const handleSubmit = (e) => {
    e.preventDefault();
    return command.trim().toLocaleLowerCase() === 'run' ? setMessages({ load: true, errors: [] }) : setMessages({ load: false, errors: [command.trim().split('')] })
  }
  
  return (
    <>
      <Head>
        <title>Roy!</title>
      </Head>
      <section className={styles.container}>
      <div className={styles.terminal}>
        <div className={styles.buttonsterminal}>🗕🗗 🗙</div>
        <form className={styles.text} onSubmit={handleSubmit}>
          C:\Users\ELTITO{'>'}
          <input disabled={messages.load} type="text" id="command" name="command" value={command} onChange={(e) => setCommand(e.target.value)} placeholder="Tipea el comando run" autoFocus={true}/>
        </form>
        <div className={styles.messages}>
          { messages.load ?
            (<Run questions={questions.questions} />)
            :
            (
              <>
              {messages.errors.map((err, index) => {
                return (
                  <Error key={index} error={err} />
                )
              })}
              </>
            )
          }
        </div>
      </div>      
    </section>
    </>
  )
}
