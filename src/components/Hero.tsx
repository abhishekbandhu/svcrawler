import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>
                Original <span className={styles.highlight}>or</span> Remake <br />
                You Decide.
            </h1>

            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search for a movie (e.g., Oldboy, Lion King)..."
                    className={styles.searchInput}
                />
            </div>
        </section>
    );
}
