import cx from 'classnames'
import { useState } from 'react'

import reactLogo from './assets/react.svg'

import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className={cx(styles.logo, styles.react)}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
