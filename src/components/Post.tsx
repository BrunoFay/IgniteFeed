import React from 'react'
import Comment from './Comment';
import styles from './Post.module.css';
import UserAvatar from './UserAvatar';

export default function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <UserAvatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />
          <div className={styles.authorInfos}>
            <strong>Amanda Babanovic</strong>
            <span>Ux Developer</span>
          </div>
        </div>
        <time title='11 de Maio ás 08:13h' dateTime='2022-05-11 08:13:30'>
          Públicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p><a href=''>  jane.design/doctorcare  </a></p>
        <p>
          <a href=''>#novoprojeto </a>
          <a href=''>#nlw</a>
          <a href=''>#rocketseat</a>
        </p>
      </div>
      <div className={styles.commentForm}>
        <strong>
          Deixe seu feedback
        </strong>
        <form >
          <textarea placeholder='Escreva um comentario' />
        </form>
        <footer>
          <button type="submit">
            Publicar
          </button>
        </footer>
      </div>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
