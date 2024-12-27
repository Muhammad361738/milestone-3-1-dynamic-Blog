
import React, { useState } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string; // Use postId to associate comments with a specific post
}

export default function CommentSection({ postId }: CommentSectionProps) {
  // Use a record to store comments by postId
  const [comments, setComments] = useState<Record<string, Comment[]>>({});
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  // Add a new comment for a specific post
  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };

      setComments((prevComments) => ({
        ...prevComments,
        [postId]: [...(prevComments[postId] || []), newCommentObj],
      }));

      setNewComment('');
      setAuthorName('');
    }
  };

  // Edit an existing comment
  const handleEditComment = (commentID: string) => {
    const commentToEdit = comments[postId]?.find((comment) => comment.id === commentID);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentID);
    }
  };

  // Save an edited comment
  const handleSaveEditedComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments[postId]?.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: newComment, author: authorName }
          : comment
      );

      setComments((prevComments) => ({
        ...prevComments,
        [postId]: updatedComments || [],
      }));

      setNewComment('');
      setAuthorName('');
      setEditingCommentId(null);
    }
  };

  return (
<div className={`mt-8 bg-gray-900 text-gray-100 p-6 rounded-lg`}> 
<h2 className="text-3xl font-semibold text-center">{comments[postId]?.length > 0 ? 'Comments' : 'No Comments Yet'}</h2>

    <div className="mt-4 space-y-6">
      {comments[postId]?.length > 0 ? (
        comments[postId].map((comment) => (
          <Card key={comment.id} className={`bg-transparent text-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            <CardContent className="p-6">
              <div className="font-semibold text-lg">{comment.author}</div>
              <p className="mt-2 text-gray-400">{comment.text}</p>
              <Button onClick={() => handleEditComment(comment.id)} className="mt-4 text-blue-500">
                Edit
              </Button>
            </CardContent>
          </Card>
        ))
      ) : (
        <p className="text-center text-slate-400">No comments yet</p>
      )}
    </div>

    <div className="mt-6">
      <Input
        type="text"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        placeholder="Your name"
        className="w-full mb-4 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Your comment"
        className="w-full mb-4 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button
        onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
        className="w-full p-3 mt-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors duration-300"
      >
        {editingCommentId ? 'Save' : 'Submit'}
      </Button>
    </div>
  </div>

  );
}
