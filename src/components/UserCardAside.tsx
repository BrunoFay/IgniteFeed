import { PencilLine } from 'phosphor-react'
import React from 'react'
import UserAvatar from './UserAvatar'
import styles from './UserCardAside.module.css'

export default function UserCardAside() {
  return (
    <aside className={styles.cardContainer}>
      <img
        className={styles.headerImage}
        src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=50"
      />
      <div className={styles.userInfos}>
        <UserAvatar src="https://avatars.githubusercontent.com/u/87674307?v=4" />
        <strong>Bruno fay</strong>
        <span>Front-end Developer</span>
      </div>
      <footer className=''>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  )
}
