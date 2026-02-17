import styles from './VoteBar.module.css';

interface VoteBarProps {
    originalVotes: number;
    remakeVotes: number;
}

export default function VoteBar({ originalVotes, remakeVotes }: VoteBarProps) {
    const total = originalVotes + remakeVotes;
    const originalPercentage = total === 0 ? 50 : Math.round((originalVotes / total) * 100);
    const remakePercentage = 100 - originalPercentage;

    return (
        <div>
            <div className={styles.container}>
                <div
                    className={styles.bar}
                    style={{ width: `${originalPercentage}%` }}
                />
            </div>
            <div className={styles.stats}>
                <span>Original: <span className={styles.highlight}>{originalPercentage}%</span></span>
                <span>Remake: <span className={styles.highlight}>{remakePercentage}%</span></span>
            </div>
        </div>
    );
}
