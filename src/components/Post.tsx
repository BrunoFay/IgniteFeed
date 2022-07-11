import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import React, { ChangeEvent, FormEvent, useState } from 'react'
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
export interface IComment {
  id?: number,
  commentForm: string,
  avatarUrl?: string,
  name?: string,
}
export default function Post({ author, content, publisedAt }: PostProps) {
  const [commentsList, setComments] = useState<IComment[]>([
    { id: 1, commentForm: 'Muito bom Amanda, parabéns!! 👏👏' },
    { id: 2, commentForm: 'Super Recomendo Golang!' },
  ])
  const [newComment, setNewComment] = useState<IComment>({ commentForm: '' })
  const dateFormatted = format(publisedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publisedAt, {
    locale: ptBR,
    addSuffix: true,
  })
  const isNewCommentEmpty = !newComment.commentForm.length
  function handleSubmitNewComment(e: FormEvent) {
    e.preventDefault();
    setComments([...commentsList, newComment])
    setNewComment({ commentForm: '' })
  }
  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    const myComment: IComment = {
      id: commentsList.length + 1,
      commentForm: value,
      avatarUrl:'https://avatars.githubusercontent.com/u/87674307?v=4',
      name:'Bruno Fay'      
    }
    setNewComment(myComment)
  }
  function deleteComment(id: number) {
    console.log('chege', id)
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
            disabled={isNewCommentEmpty}
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
