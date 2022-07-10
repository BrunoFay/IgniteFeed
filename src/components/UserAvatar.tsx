import React from 'react'
import styles from './UserAvatar.module.css'
export default function UserAvatar({ src, hasBorder = true }: { src: string, hasBorder?: boolean }) {
  return (
    <img
      className={hasBorder ? styles.userAvatar : styles.userAvatarWithoutBorder}
      src={src}
    />
  )
}
