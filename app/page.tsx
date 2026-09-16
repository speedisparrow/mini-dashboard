"use client"
import Image from "next/image";
import styles from "./page.module.css";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <p> Count: {count}</p>
       <button onClick={() => setCount(count + 1)}>Add</button>
      </main>
    </div>
  );
}
