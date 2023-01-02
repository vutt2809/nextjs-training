import { useState } from 'react';

export default function CommentsPage() {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data);
        console.log(data);
    };

    const submitComment = async () => {
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-typed': 'application/json',
            },
        });

        fetchComments();
    };

    const deleteComment = async (commentId) => {
        await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE',
        });
        fetchComments();
    };

    return (
        <>
            <div>
                <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
                <button onClick={submitComment}>Submit Comment</button>
            </div>
            <button onClick={fetchComments}>Load Comments</button>

            {comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <h1>Id: {comment.id}</h1>
                        <h3>Title: {comment.title}</h3>
                        <button onClick={() => deleteComment(comment.id)}>Delete</button>
                    </div>
                );
            })}
        </>
    );
}
