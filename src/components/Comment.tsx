import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ThumbsUp, Trash } from 'phosphor-react'
import React, { useState } from 'react'
import styles from './Comment.module.css'
import { IComment } from './Post'
import UserAvatar from './UserAvatar'

interface CommentProps {
  comment: IComment,
  key: number,
  onDeleteComment: (id: number) => void
}
export default function Comment({ comment, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)
  function handleLikeCount() {
    /* forma para atualizar o valor de um estado com o valor mais atual do mesmo  */
    setLikeCount((curr) => curr + 1);
  }
  const publishedDateRelativeToNow = formatDistanceToNow(new Date(Date.now()), {
    locale: ptBR,
    addSuffix: true,
  })
  return (
    <div className={styles.commentContainer}>
      <UserAvatar
        hasBorder={false}
        src={comment.avatarUrl ? comment.avatarUrl : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{comment.name ? comment.name : 'jessica willians'}</strong>
              <time
                title={new Date(Date.now()).toISOString()}
                dateTime={new Date(Date.now()).toLocaleString()}>
                {comment.avatarUrl ? publishedDateRelativeToNow : 'Cerca há 1h atrás'}
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
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>

  )
}
