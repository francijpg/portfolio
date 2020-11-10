import React from "react"
import PropTypes from "prop-types"

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h2>{title || "default title"}</h2>
      <div className="underline"></div>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string
}

export default Title
