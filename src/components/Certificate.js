import React, { useState } from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import CertificateModal from "./CertificateModal"

const Certificate = ({ title, year, image, institution }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button className="certificate-card" onClick={() => setShowModal(true)}>
        {image && (
          <Image
            fluid={image.childImageSharp.fluid}
            className="certificate-image"
          />
        )}
        <div className="certificate-content">
          <h4>{title}</h4>
          <h3>
            {institution} | {year}
          </h3>
        </div>
      </button>
      <CertificateModal
        open={showModal}
        onClose={() => setShowModal(false)}
        title={title}
        institution={institution}
        year={year}
        image={image}
      />
    </>
  )
}

Certificate.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
  institution: PropTypes.string.isRequired,
}

export default Certificate
