import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GitHubIcon from '@mui/icons-material/GitHub';


const Guestbook = () => {
    const [comments, setComments] = useState([]);
    // eslint-disable-next-line
    const [user, setUser] = useState(null);

    // Fetch comments from the server
    useEffect(() => {
        fetchComments();
    }, []);

    // Fetch comments from the server
    const fetchComments = async () => {
        try {
            const response = await axios.get('/api/comments');
            setComments(response.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    // Handle GitHub authentication
    const handleLogin = async () => {
        try {
            // Redirect the user to the GitHub authentication page
            window.location.href = '/api/auth/github';
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    // Handle comment submission
    const handleSubmitComment = async (comment) => {
        try {
            // Send the comment data along with the authenticated user information to the server
            await axios.post('/api/comments', { comment, user });
            // Refresh the comments list
            fetchComments();
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    return (
        <div>
            <h1 justifyContent="center" style={{ fontSize: "2rem" }}>Guestbook</h1>
            {user ? (
                <div>
                    <h2>Welcome, {user.name}!</h2>
                    <button onClick={handleLogin}>Logout</button>
                    <CommentForm onSubmit={handleSubmitComment} />
                </div>
            ) : (
                <button onClick={handleLogin}>
                    <GitHubIcon /> Login with GitHub
                </button>
            )}
    
            <h3>Comments:</h3>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <strong>{comment.user}</strong>: {comment.text}
                    </li>
                ))}
            </ul>
        </div>
    );
    
};

const CommentForm = ({ onSubmit }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(comment);
        setComment('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Guestbook;
