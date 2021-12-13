import { useState, useEffect } from "react";
import useKey from './hooks/key'

const Me = ({ me }) => {

    const [key, setKey] = useState(false);
    useKey('Enter', () => {
        setKey(true)
    });

    return (
        <div style={{ maxHeight: '35vh', overflow: 'auto' }}>
            { key ?
                <>
                    <p><b>Hola!</b> { me[0].response ? `me llamo` : ''} <b>{me[0].response ? 'Roy!' : ''}</b> {me[1].response ? ',tengo 12 años' : ''} </p>
                    {
                        me[2].response ?
                        (
                            <div style={{ marginLeft: '8px', marginTop: '10px' }}>
                                <b>¿Como inicie en la programación?</b>
                                <p>Pues..., se tuviera que resumirlo inicie en este fabuloso mundo gracias a que mi internet este día andaba bien!</p>
                            </div>
                        )
                        :
                        (
                            <>
                            </>
                        )
                    }
                </>
                :
                <p><b style={{ color: '#00BE01' }}>Listo!</b>, ya lo tenemos todo. Presiona <b style={{color: '#0086FF'}}>ENTER</b> para ver mi información.</p>
            }
        </div>
    )
}

export default Me;