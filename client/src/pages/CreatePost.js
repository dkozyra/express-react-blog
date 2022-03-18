import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function CreatePost() {
  return (
    <div className="createPostaPage">
      <Formik>
        <Form>
          <Field></Field>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
