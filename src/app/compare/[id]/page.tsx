import { comparisons } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import VotingSection from '@/components/VotingSection';
import CommentSection from '@/components/CommentSection';
import styles from './page.module.css';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ComparisonPage({ params }: PageProps) {
    const { id } = await params;
    const comparison = comparisons.find((c) => c.id === id);

    if (!comparison) {
        notFound();
    }

    return (
        <main className={styles.container}>
            <VotingSection
                initialOriginalVotes={comparison.votes.original}
                initialRemakeVotes={comparison.votes.remake}
            />

            <div className={styles.splitLayout}>
                {/* Original Movie */}
                <section className={`${styles.moviePanel} ${styles.originalPanel}`}>
                    <div className={styles.posterWrapper}>
                        <Image
                            src={comparison.original.poster}
                            alt={comparison.original.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className={styles.info}>
                        <h1 className={styles.title}>{comparison.original.title}</h1>
                        <div className={styles.meta}>
                            <span>{comparison.original.year}</span>
                            <span>{comparison.original.director}</span>
                            <span className={styles.rating}>★ {comparison.original.rating}</span>
                        </div>
                        <p className={styles.synopsis}>{comparison.original.synopsis}</p>
                    </div>
                </section>

                {/* Remake Movie */}
                <section className={styles.moviePanel}>
                    <div className={styles.posterWrapper}>
                        <Image
                            src={comparison.remake.poster}
                            alt={comparison.remake.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className={styles.info}>
                        <h1 className={styles.title}>{comparison.remake.title}</h1>
                        <div className={styles.meta}>
                            <span>{comparison.remake.year}</span>
                            <span>{comparison.remake.director}</span>
                            <span className={styles.rating}>★ {comparison.remake.rating}</span>
                        </div>
                        <p className={styles.synopsis}>{comparison.remake.synopsis}</p>
                    </div>
                </section>
            </div>

            <div style={{ textAlign: 'center', padding: '2rem' }}>
                <Link href="/" style={{ color: '#888', textDecoration: 'underline' }}>
                    &larr; Back to Comparisons
                </Link>
            </div>

            <CommentSection />
        </main>
    );
}
