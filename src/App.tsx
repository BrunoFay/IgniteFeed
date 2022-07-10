import Header from "./components/Header"
import styles from "./App.module.css"
import UserCardAside from "./components/UserCardAside"
import Post from "./components/Post"
import { api } from "./mockApi"

function App() {

  return (
    <>
      <Header />
      <div className={styles.container}>
        <UserCardAside />
        <main>
          {api.map(post => (
            <Post
              author={post.author}
              content={post.content}
              publisedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}

export default App
