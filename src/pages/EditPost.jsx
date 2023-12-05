import { Form, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { PostSchema } from "../util/validationSchema";
import { editPost } from "../store/postSlice";
import WithGaurd from "../util/WithGaurd";
import UsePostDetails from "../hooks/use-post-details";

const EditPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { singlePost, loading, error } = UsePostDetails();

  useEffect(() => {
    return () => {
      dispatch({ type: "posts/cleanRecord" });
    };
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      title: singlePost ? singlePost.title : "",
      description: singlePost ? singlePost.description : "",
    },
    validationSchema: PostSchema,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      dispatch(
        editPost({
          id: singlePost.id,
          title: values.title,
          description: values.description,
        })
      )
        .unwrap()
        .then(() => {
          navigate("/");
        });
    },
  });

  return loading ? (
    "loading... "
  ) : error ? (
    <div>{error}</div>
  ) : (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Post ttile</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.title && !!formik.touched.title}
        />
        <Form.Control.Feedback type="invalid" className="ms-2">
          {formik.errors.title}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.description && !!formik.touched.description}
        />
        <Form.Control.Feedback type="invalid" className="ms-2">
          {formik.errors.description}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default WithGaurd(EditPost);
