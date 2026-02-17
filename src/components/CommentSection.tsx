'use client'; // Client component for interactivity

import { useState } from 'react';
import styles from './CommentSection.module.css';

interface Comment {
    id: string;
    author: string;
    text: string;
    date: string;
    votes: number;
    tag?: string;
}

const initialComments: Comment[] = [
    {
        id: '1',
        author: 'MovieBuff99',
        text: 'The original Oldboy has a grittiness that simply cannot be replicated. The hallway scene is iconic.',
        date: '2 hours ago',
        votes: 45,
        tag: '#Masterpiece'
    },
    {
        id: '2',
        author: 'CinemaLover',
        text: 'I actually liked the remake\'s twist, even if it was disturbing. But yeah, original is better.',
        date: '5 hours ago',
        votes: 12,
        tag: '#UnpopularOpinion'
    }
];

export default function CommentSection() {
    const [comments, setComments] = useState<Comment[]>(initialComments);
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        const comment: Comment = {
            id: Date.now().toString(),
            author: 'You', // Mock user
            text: newComment,
            date: 'Just now',
            votes: 0,
        };

        setComments([comment, ...comments]);
        setNewComment('');
    };

    return (
        <section className={styles.section} id="comments">
            <h3 className={styles.heading}>Discussion</h3>

            <form className={styles.commentForm} onSubmit={handleSubmit}>
                <textarea
                    className={styles.textarea}
                    placeholder="Share your thoughts... (e.g., #BetterActing)"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button type="submit" className={styles.submitBtn}>
                    Post Comment
                </button>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => (
                    <div key={comment.id} className={styles.comment}>
                        <div className={styles.header}>
                            <div>
                                <span className={styles.author}>{comment.author}</span>
                                <span>• {comment.date}</span>
                                {comment.tag && <span className={styles.tag}>{comment.tag}</span>}
                            </div>
                        </div>
                        <p className={styles.body}>{comment.text}</p>
                        <div className={styles.actions}>
                            <button className={styles.actionBtn}>▲ {comment.votes}</button>
                            <button className={styles.actionBtn}>Reply</button>
                            <button className={styles.actionBtn}>Share</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
