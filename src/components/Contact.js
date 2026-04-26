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
          <h3>Get in touch</h3>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                className="form-control"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-invalid={Boolean(formik.touched.name && formik.errors.name)}
                aria-describedby={formik.touched.name && formik.errors.name ? "contact-name-error" : undefined}
              />

              {formik.touched.name && formik.errors.name ? (
                <div
                  id="contact-name-error"
                  className="contact-form-error"
                  role="alert"
                >
                  <p>{formik.errors.name} </p>
                </div>
              ) : null}

              <label className="form-label" htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="Your email"
                name="email"
                className="form-control"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-invalid={Boolean(formik.touched.email && formik.errors.email)}
                aria-describedby={formik.touched.email && formik.errors.email ? "contact-email-error" : undefined}
              />

              {formik.touched.email && formik.errors.email ? (
                <div
                  id="contact-email-error"
                  className="contact-form-error"
                  role="alert"
                >
                  <p>{formik.errors.email} </p>
                </div>
              ) : null}

              <label className="form-label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="10"
                placeholder="Your message"
                className="form-control"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-invalid={Boolean(formik.touched.message && formik.errors.message)}
                aria-describedby={
                  formik.touched.message && formik.errors.message
                    ? "contact-message-error"
                    : undefined
                }
              ></textarea>

              {formik.touched.message && formik.errors.message ? (
                <div
                  id="contact-message-error"
                  className="contact-form-error"
                  role="alert"
                >
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
