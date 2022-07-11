import { ThumbsUp, Trash } from 'phosphor-react'
import React from 'react'
import styles from './Comment.module.css'
import UserAvatar from './UserAvatar'

interface CommentProps {
  comment: { commentForm: string, id?: number },
  key: number,
  onDeleteComment: (id: number) => void
}
export default function Comment({comment,onDeleteComment}: CommentProps) {
  return (
    <div className={styles.commentContainer}>
      <UserAvatar
        hasBorder={false}
        src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>jessica willians</strong>
              <time title='11 de Maio ás 08:13h' dateTime='2022-05-11 08:13:30'>
                Cerca há 1h atrás
              </time>
            </div>
            <button
              onClick={() => onDeleteComment(comment.id!)}
              title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{comment.commentForm}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir<span>20</span>
          </button>
        </footer>
      </div>
    </div>

  )
}
