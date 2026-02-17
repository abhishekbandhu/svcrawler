'use client';

import { useState } from 'react';
import VoteBar from './VoteBar';
import styles from './VotingSection.module.css';

interface VotingSectionProps {
    initialOriginalVotes: number;
    initialRemakeVotes: number;
}

export default function VotingSection({ initialOriginalVotes, initialRemakeVotes }: VotingSectionProps) {
    const [votes, setVotes] = useState({ original: initialOriginalVotes, remake: initialRemakeVotes });
    const [userVote, setUserVote] = useState<'original' | 'remake' | null>(null);

    const handleVote = (side: 'original' | 'remake') => {
        if (userVote === side) return; // Already voted this side

        const newVotes = { ...votes };

        // Remove previous vote if exists
        if (userVote === 'original') newVotes.original--;
        if (userVote === 'remake') newVotes.remake--;

        // Add new vote
        if (side === 'original') newVotes.original++;
        if (side === 'remake') newVotes.remake++;

        setVotes(newVotes);
        setUserVote(side);
    };

    return (
        <div className={styles.voteSection}>
            <VoteBar
                originalVotes={votes.original}
                remakeVotes={votes.remake}
            />
            <div className={styles.voteButtons}>
                <button
                    className={`${styles.voteBtn} ${styles.voteOriginal} ${userVote === 'original' ? styles.activeOriginal : ''}`}
                    onClick={() => handleVote('original')}
                >
                    Vote Original
                </button>
                <button
                    className={`${styles.voteBtn} ${styles.voteRemake} ${userVote === 'remake' ? styles.activeRemake : ''}`}
                    onClick={() => handleVote('remake')}
                >
                    Vote Remake
                </button>
            </div>
        </div>
    );
}
