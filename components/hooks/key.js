import { useRef, useEffect } from 'react';

const useKey = (key, cb) => {
    const callbackRef = useRef(cb);
  
    useEffect(() => {
      callbackRef.current = cb;
    })
  
    useEffect(() => {
      const handle = (event) => {
        if(event.code === key) {
          callbackRef.current(event);
        }
      }
  
      document.addEventListener('keypress', (e) => handle(e));
      return () => document.removeEventListener('keypress', (e) => handle(e));
  
    }, [key])
}

export default useKey;