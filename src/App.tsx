import Header from "./components/Header"
import styles from "./App.module.css"
import UserCardAside from "./components/UserCardAside"

function App() {

  return (
    <>
      <Header />
      <div className={styles.container}>
        <UserCardAside />
        <main>
          <h1>Hello World!</h1>
        </main>
      </div>
    </>
  )
}

export default App
