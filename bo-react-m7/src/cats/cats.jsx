import { useState } from 'react'
import styles from './cats.module.css'

export function Cats() {
  const [katten, setCats] = useState(null);

 async function getData() {
  const url = "http://mediacollege.dev/api/cats/";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    setCats(result);
  } catch (error) {
    console.error(error.message);
  }
}
    if (katten == null) {
        getData();
    }


    if (katten == null) {
        return(
            <div>
                cats
            </div>
        )
    } else {
        return (
            <section className={styles.cats}>
            {katten[0].name}
            </section>
        );
    }
}