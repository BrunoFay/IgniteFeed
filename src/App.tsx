import Header from "./components/Header"
import styles from "./App.module.css"
import UserCardAside from "./components/UserCardAside"
import Post from "./components/Post"

function App() {

  return (
    <>
      <Header />
      <div className={styles.container}>
        <UserCardAside />
        <main>
          <Post />
        </main>
      </div>
    </>
  )
}

export default App
