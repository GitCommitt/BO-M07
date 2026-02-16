import styles from './Top10.module.css'
import { Top10Item } from './Top10Item.jsx'

const Top10list = [
    { type: "Cyprus Kat", afkomst: "Oorsprong: Cyprus" },
    { type: "Maine Coon", afkomst: "Oorsprong: Verenigde Staten" },
    { type: "Bengaal", afkomst: "Oorsprong: Verenigde Staten" },
    { type: "Siberische kat", afkomst: "Oorsprong: Rusland" },
    { type: "Ragdoll", afkomst: "Oorsprong: Verenigde Staten" },
    { type: "Brits Korthaar", afkomst: "Oorsprong: Verenigd Koninkrijk" },
    { type: "Noorse Boskat", afkomst: "Oorsprong: Noorwegen" },
    { type: "Turkse Van", afkomst: "Oorsprong: Turkije" },
    { type: "Abessijn", afkomst: "Oorsprong: Ethiopië" },
    { type: "Siamees", afkomst: "Oorsprong: Thailand" }
];
export function Top10(){
    
    let list = [];
    for(let i = 0; i < Top10list.length; i++){
        list.push(
            <Top10Item title={Top10list[i].type} author={Top10list[i].afkomst} number={i+1}/>
        );
    }
    return (
        <section className={styles.top10}>
            <h1 className={styles.top10__title}>Top 10 Mooiste Kattenrassen</h1>
            <ol className={styles.book__list}>
                {list}
            </ol>
        </section>
    );

}
