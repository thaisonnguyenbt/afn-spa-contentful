import React from 'react'
import {Link} from 'react-router-dom'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/recipes/">Recipes</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Articles</Link>
      </li>
    </ul>
  </nav>
)
