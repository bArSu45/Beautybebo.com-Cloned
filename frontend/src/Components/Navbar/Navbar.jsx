import React from 'react'
import Dropedown from './Dropedown'
import styles from "./nav.module.css"
import Topnav from './Topnav'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
           <Topnav/>
           <Dropedown/>
        </div>
    )
}
