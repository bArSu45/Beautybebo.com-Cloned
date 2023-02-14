import Aos from "aos";
import React, { useEffect } from "react";
import Dropedown from "./Dropedown";
import styles from "./nav.module.css";
import Topnav from "./Topnav";

export default function Navbar() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className={styles.navbar}>
      <Topnav />
    
        {" "}
        <Dropedown />{" "}
      
    </div>
  );
}
