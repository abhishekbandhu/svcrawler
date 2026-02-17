import Link from 'next/link';
import Image from 'next/image';
import { Comparison } from '@/lib/data';
import styles from './ComparisonCard.module.css';
import VoteBar from './VoteBar';

export default function ComparisonCard({ data }: { data: Comparison }) {
    return (
        <Link href={`/compare/${data.id}`} className={styles.card}>
            <div className={styles.posterContainer}>
                <div className={styles.poster}>
                    <Image
                        src={data.original.poster}
                        alt={data.original.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                    />
                </div>
                <div className={styles.vsBadge}>VS</div>
                <div className={styles.poster}>
                    <Image
                        src={data.remake.poster}
                        alt={data.remake.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                    />
                </div>
            </div>

            <div className={styles.content}>
                <h2 className={styles.movieTitle}>{data.original.title}</h2>
                <div className={styles.years}>
                    <span>{data.original.year} (Original)</span>
                    <span>{data.remake.year} (Remake)</span>
                </div>

                <VoteBar
                    originalVotes={data.votes.original}
                    remakeVotes={data.votes.remake}
                />

                <div className={styles.cta}>
                    Vote Now &rarr;
                </div>
            </div>
        </Link>
    );
}
