import React, { useState } from "react"
import axios from "axios"
import { useFormik } from "formik"
import * as Yup from "yup"
import Alert from "../components/Alert"
import Title from "../components/Title"

const Contact = ({ title }) => {
  const key = process.env.FORMSPREE_FORM_KEY
  const externalProviderUrl = `https://formspree.io/f/${key}`
  const okMsg =
    "Thanks for taking the time to write to me, as soon as possible, I will get in touch with you."
  const errorMsg = "A problem has occurred. Please try again later."

  /* Server State Handling */
  const [serverState, setServerState] = useState()
  const handleServerResponse = (ok, message, type) => {
    setServerState({ ok, message, type })
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Your name is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Your email is required"),
      message: Yup.string().required("Please, enter a message"),
    }),
    onSubmit: (values, actions) => {
      axios({
        method: "POST",
        url: `${externalProviderUrl}`,
        data: values,
      })
        .then(response => {
          actions.setSubmitting(false)
          actions.resetForm()
          handleServerResponse(true, okMsg, "alert-ok")
          setTimeout(() => {
            setServerState(false)
          }, 5000)
        })
        .catch(error => {
          actions.setSubmitting(false)
          handleServerResponse(false, errorMsg, "alert-error")
          // console.log(error.response.data.error)
          setTimeout(() => {
            setServerState(false)
          }, 3000)
        })
    },
  })

  return (
    <section className="section">
      <Title title={title} />
      <div className="content-center">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="form-control"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.name && formik.errors.name ? (
                <div className="contact-form-error">
                  <p>{formik.errors.name} </p>
                </div>
              ) : null}

              <input
                type="email"
                placeholder="Your email"
                name="email"
                className="form-control"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.email && formik.errors.email ? (
                <div className="contact-form-error">
                  <p>{formik.errors.email} </p>
                </div>
              ) : null}

              <textarea
                name="message"
                rows="10"
                placeholder="Your message"
                className="form-control"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>

              {formik.touched.message && formik.errors.message ? (
                <div className="contact-form-error">
                  <p>{formik.errors.message} </p>
                </div>
              ) : null}
            </div>

            <button type="submit" className="submit-btn btn">
              submit here
            </button>

            {serverState && <Alert alert={serverState} />}
          </form>
        </article>
      </div>
    </section>
  )
}

export default Contact
