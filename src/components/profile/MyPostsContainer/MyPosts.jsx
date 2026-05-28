import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import { Field, Formik, Form } from "formik";
import {required, maxLengthCreator } from "../../utils/validators/validators";
import { Textarea } from "../../common/preLoader/FormsControls/FormsControls";


const AddPostForm = ({ onSubmit }) => {
  const validate = (values) => {
    const errors = {};
    const requiredError = required(values.newPostBody)
    const maxLengthError =maxLengthCreator(10)(values.newPostBody)

    if(requiredError) {
      errors.newPostBody = requiredError
    } else if (maxLengthError) {
      errors.newPostBody = maxLengthError
    }

    return errors
  }

  return (
    <Formik
      initialValues={{ newPostBody: "" }}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values.newPostBody);
        resetForm();
      }}
    >
      {() => (
        <Form className={s.postForm}>
          <Field
            name="newPostBody"
            placeholder="Enter your post"
            component={Textarea}
          />
          <button type="submit">Add Post</button>
        </Form>
      )}
    </Formik>
  );
};






const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  const onAddPost = (PostBody) => {
    props.addPost(PostBody);
  };

  return (
    <div className={s.postsBlock}>
      <div className={s.postsHeader}>
        <p>Class notes</p>
        <h3>My posts</h3>
      </div>
      <AddPostForm onSubmit={onAddPost} />
      <div className={s.postsList}>{postsElements}</div>
    </div>
  );
};


export default MyPosts;
