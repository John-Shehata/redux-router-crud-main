import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSinglePost } from "../store/postSlice";

const UsePostDetails = () => {
  const dispatch = useDispatch();
  const { singlePost, loading, error } = useSelector((state) => state.posts);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, [dispatch, id]);

  return { singlePost, loading, error };
};

export default UsePostDetails;
