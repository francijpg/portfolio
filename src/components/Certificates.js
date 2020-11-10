import React, { useState, useEffect } from "react"
import Certificate from "./Certificate"
import Title from "./Title"
import useFilter from "../hooks/useFilter"
import PropTypes from "prop-types"

const Certificates = ({ certificates, title }) => {
  const [certificatesdata] = useState(certificates)
  const [filtered, setFiltered] = useState([])
  const { category, CategoryFilter } = useFilter()

  useEffect(() => {
    if (category) {
      const filter = certificatesdata.filter(
        certificate => certificate.category.name === category
      )
      setFiltered(filter)
    } else {
      setFiltered(certificatesdata)
    }
  }, [category, certificatesdata])

  return (
    <section className="section">
      <Title title={title} />
      <div className="certificate-filter">{CategoryFilter()}</div>
      <ul className="section-center certificates">
        {filtered.map(certificate => {
          return <Certificate key={certificate.id} {...certificate} />
        })}
      </ul>
    </section>
  )
}

Certificates.propTypes = {
  certificates: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
}

export default Certificates
