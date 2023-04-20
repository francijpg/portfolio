import React from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { FaTimes } from "react-icons/fa"

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background-color: var(--clr-grey-10);
  color: var(--color-dark);
  border-radius: var(--radius-card);
  z-index: 1000;
  overflow-y: auto;
  padding: 25px 25px 0;
`

const ModalContent = styled.div`
  h4 {
    font-size: 20px;
  }
  h3 {
    font-size: 12px;
    margin-bottom: 20px;
  }
  button {
    margin: 20px auto;
  }
`
const ModalImage = styled(Image)`
  img {
    border-radius: var(--radius-card);
    width: 100%;
    height: 100%;
  }
`
const CloseModalButton = styled(FaTimes)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  margin: 0;
  z-index: 10;
  color: var(--color-blue);
  &:hover {
    color: var(--color-dark);
  }
`

const CertificateModal = ({
  open,
  onClose,
  title,
  institution,
  year,
  image,
}) => {
  if (!open) return null
  return (
    <>
      <ModalBackground>
        <ModalWrapper>
          <ModalContent>
            <h4>{title}</h4>
            <h3>
              {institution} | {year}
            </h3>
            <ModalImage fluid={image.childImageSharp.fluid} />
            <button onClick={onClose} className="btn">
              Close
            </button>
          </ModalContent>
          <CloseModalButton aria-label="Close Modal" onClick={onClose} />
        </ModalWrapper>
      </ModalBackground>
    </>
  )
}

export default CertificateModal
