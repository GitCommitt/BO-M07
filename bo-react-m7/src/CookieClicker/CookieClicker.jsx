import styles from './CookieClicker.module.css'

import { useState } from 'react';

export function CookieClicker() {
    const [score, setScore] = useState(0);
    const [multiplier, setMultiplier] = useState(1);

    function click() {
        setScore(score + multiplier);
    }

    const [cats, setCats] = useState(0);
    const catCost = 10 * 1.15 ** cats;
    function buyCat() {
        if (score >= catCost) {
            setCats(cats + 1);
            setScore(score - catCost);
            setMultiplier(multiplier + 1);
        }
    }

    const [dogs, setDogs] = useState(0);
    const dogCost = 50 * 1.15 ** dogs;
    function buyDog() {
        if (score >= dogCost) {
            setDogs(dogs + 1);
            setScore(score - dogCost);
            setMultiplier(multiplier + 3);
        }
    }

    const [rabbits, setRabbits] = useState(0);
    const rabbitCost = 200 * 1.15 ** rabbits;
    function buyRabbit() {
        if (score >= rabbitCost) {
            setRabbits(rabbits + 1);
            setScore(score - rabbitCost);
            setMultiplier(multiplier + 5);
        }
    }

    const [birds, setBirds] = useState(0);
    const birdCost = 1000 * 1.15 ** birds;
    function buyBird() {
        if (score >= birdCost) {
            setBirds(birds + 1);
            setScore(score - birdCost);
            setMultiplier(multiplier + 10);
        }
    }

    const [cows, setCows] = useState(0);
    const cowCost = 2500 * 1.15 ** cows;
    function buyCow() {
        if (score >= cowCost) {
            setCows(cows + 1);
            setScore(score - cowCost);
            setMultiplier(multiplier + 20);
        }
    }

    const [alpacas, setAlpacas] = useState(0);
    const alpacaCost = 5000 * 1.15 ** alpacas;
    function buyAlpaca() {
        if (score >= alpacaCost) {
            setAlpacas(alpacas + 1);
            setScore(score - alpacaCost);
            setMultiplier(multiplier + 50);
        }
    }


    return (
        <section className={styles.cookieClicker}>
            <button className={styles.cookie} onClick={click}>
                <img className='coockie-img' src="./img/koekje.png" alt="cookie" />
            </button>
            <div className={styles.container_coockie}>
                <div className={styles.score}>{Math.ceil(score)} Cookies</div>
                <div className={styles.multipliers}>
                    <div className={styles.labelButtonRow}>
                        <label>Cats: {cats} | Cost: {Math.ceil(catCost)}</label>
                        <button className={styles.upgrade} onClick={buyCat}>Buy Cat</button>
                    </div>
                    <div className={styles.labelButtonRow}>
                        <label>Dogs: {dogs} | Cost: {Math.ceil(dogCost)}</label>
                        <button className={styles.upgrade} onClick={buyDog}>Buy Dog</button>
                    </div>
                    <div className={styles.labelButtonRow}>
                        <label>Rabbits: {rabbits} | Cost: {Math.ceil(rabbitCost)}</label>
                        <button className={styles.upgrade} onClick={buyRabbit}>Buy Rabbit</button>
                    </div>
                    <div className={styles.labelButtonRow}>
                        <label>Birds: {birds} | Cost: {Math.ceil(birdCost)}</label>
                        <button className={styles.upgrade} onClick={buyBird}>Buy Bird</button>
                    </div>
                    <div className={styles.labelButtonRow}>
                        <label>Cows: {cows} | Cost: {Math.ceil(cowCost)}</label>
                        <button className={styles.upgrade} onClick={buyCow}>Buy Cow</button>
                    </div>
                    <div className={styles.labelButtonRow}>
                        <label>Alpacas: {alpacas} | Cost: {Math.ceil(alpacaCost)}</label>
                        <button className={styles.upgrade} onClick={buyAlpaca}>Buy alpaca</button>
                    </div>
                </div>
            </div>

        </section>
    )
}