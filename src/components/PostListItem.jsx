import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../store/postSlice";
import { Link, useNavigate } from "react-router-dom";

const PostListItem = ({ data, loading, error }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.auth);
  const renderData = data.map((el, idx) => {
    return (
      <tr key={el.id}>
        <td>{++idx}</td>
        <td>
          <Link className="link" to={`post/${el.id}`}>
            {el.title}
          </Link>
        </td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="success"
              onClick={() => navigate(`post/${el.id}/edit`)}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => dispatch(deletePost(el.id))}
              disabled={!isLoggedIn}
            >
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });
  return (
    <>
      {loading ? (
        <tr>
          <td colSpan={3}>Please wait...</td>
        </tr>
      ) : error ? (
        <tr>
          <td colSpan={3}>{error}</td>
        </tr>
      ) : (
        renderData
      )}
    </>
  );
};

export default PostListItem;
