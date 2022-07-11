import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import React, { FormEvent, useState } from 'react'
import Comment from './Comment';
import styles from './Post.module.css';
import UserAvatar from './UserAvatar';

interface PostProps {
  author: {
    name: string;
    avatarUrl: string;
    role: string
  },
  content: Array<{ type: string, content: string | string[] }>,
  publisedAt: Date
}
interface IComment {
  id?: number,
  commentForm: string
}
export default function Post({ author, content, publisedAt }: PostProps) {
  const [commentsList, setComments] = useState<IComment[]>([
    { id: 1, commentForm: 'Muito bom Devon, parabéns!! 👏👏' }
  ])
  const [newComment, setNewComment] = useState<IComment>({ commentForm: '' })
  const dateFormatted = format(publisedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publisedAt, {
    locale: ptBR,
    addSuffix: true,
  })
  function handleSubmitNewComment(e: FormEvent | any) {
    console.log('cheguei')
    e.preventDefault();
    setNewComment(e.target.value)
    setComments([...commentsList, newComment])
    setNewComment({ commentForm: '' })
  }
  function handleChange(e: any) {
    const value = e.target.value;
    setNewComment({ id: commentsList.length + 1, commentForm: value })
  }
  function deleteComment(id: number) {
    console.log('chege',id)
    setComments(commentsList.filter((c) => c.id !== id))
  }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <UserAvatar src={author.avatarUrl} />
          <div className={styles.authorInfos}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={dateFormatted} dateTime={publisedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(c => {
          if (c.type === 'paragraph') {
            return (<p key={`${c.content}`}>{c.content}</p>)
          }
          else if (c.type === 'hashtag') {
            const hashtagContent = c.content as string[]
            return (
              <p key={`${c.content}`}>
                {hashtagContent.map(c => {
                  return (<a key={c}>{c}</a>)
                })}
              </p>
            )
          }
          else {
            return (<p key={`${c.content}`}><a href='#'>{c.content}</a></p>)
          }
        })}
      </div>

      <div className={styles.commentForm}>
        <strong>
          Deixe seu feedback
        </strong>
        <form onSubmit={handleSubmitNewComment} >
          <textarea
            value={newComment.commentForm}
            onChange={handleChange}
            placeholder='Escreva um comentario' />
        </form>
        <footer>
          <button
            onClick={handleSubmitNewComment}
            type="submit">
            Publicar
          </button>
        </footer>
      </div>

      <div className={styles.commentList}>
        {commentsList.map(comment => {
          return (
          <Comment 
          onDeleteComment={deleteComment}
          key={comment.id!} 
          comment={comment} />
          )
        })}
      </div>
    </article>
  )
}
