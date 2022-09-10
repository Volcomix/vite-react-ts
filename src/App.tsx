import cx from 'classnames'

import reactLogo from 'assets/react.svg'
import Card from 'components/Card'
import useCount from 'hooks/useCount'

import styles from './App.module.css'

const App = () => {
  const { count, increment } = useCount()

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
      <Card>
        <button onClick={increment}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
      <p className={styles.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
