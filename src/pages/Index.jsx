import { useEffect } from "react";
import PostList from "../components/PostList";

import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/postSlice";

const Index = () => {
  const dispatch = useDispatch();
  const { record, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);




  return <PostList data={record} loading={loading} error={error} />;
};

export default Index;
