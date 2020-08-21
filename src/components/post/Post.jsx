import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Spinner from "../../layouts/Spinner";
import PostItem from "../posts/PostItem";
import CommentForm from "../post/CommentForm";
import CommentItem from "../post/CommentItem";
import { getPost } from "../../actions/postActions";
import { useSelector, useDispatch } from "react-redux";

export default function Post() {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const history = useHistory();

  const postId = history.location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  return post.loading || post === null || !post.post ? (
    <Spinner />
  ) : (
    <>
      <Link to="/posts" className="btn">
        Back To Posts
      </Link>
      <PostItem post={post.post} showActions={false} />
      <CommentForm postId={postId} />
      <div className="comments">
        {post.post &&
          post.post.comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              postId={post.post._id}
            />
          ))}
      </div>
    </>
  );
}
