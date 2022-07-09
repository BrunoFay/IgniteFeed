import React from 'react'
import styles from './Header.module.css'
import IgniteLogo from './IgniteLogo'

export default function Header() {
  return (
    <div className={styles.header}>
      <IgniteLogo/>
      <h1 className={styles.title}>IgniteFeed</h1>
    </div>
  )
}
