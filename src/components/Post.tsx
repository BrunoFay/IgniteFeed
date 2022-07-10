import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import React from 'react'
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
export default function Post({ author, content, publisedAt }: PostProps) {
  const dateFormatted = format(publisedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publisedAt, {
    locale: ptBR,
    addSuffix: true,
  })
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
            return (<p>{c.content}</p>)
          }
          else if (c.type === 'hashtag') {
            const hashtagContent = c.content as string[]
            return (<p>{hashtagContent.map(c => { return (<a>{c}</a>) })}</p>)
          }
          else {
            return (<p><a href='#'>{c.content}</a></p>)
          }
        })}
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
