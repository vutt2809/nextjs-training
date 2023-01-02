import { comments } from '../../../data/comments';

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(comments);
    } else if (req.method === 'POST') {
        const comment = JSON.parse(req.body).comment;

        const newComment = {
            id: Date.now(),
            title: comment,
        };

        comments.push(newComment);
        res.status(201).json(newComment);
    }
}
