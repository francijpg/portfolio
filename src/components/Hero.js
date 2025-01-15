import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md"
import { Link } from "gatsby"
import NightVideo from "../assets/bg-video.mp4"
import DayVideo from "../assets/bg-day.mp4"

const HeroContainer = styled.div`
  background: var(--color-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeroH1 = styled.h1`
  color: var(--color-white);
  font-size: 48px;
  text-align: center;
  z-index: 3;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

const HeroP = styled.p`
  margin-top: 24px;
  color: var(--color-white);
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

const HeroBtnWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`

const ArrowForward = styled(MdArrowForward)`
  margin-left: 5px;
  font-size: 20px;
`

const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 5px;
  font-size: 20px;
`

const Hero = () => {
  const [hover, setHover] = useState(false)
  const [initialBgVideo, setInitialBgVideo] = useState()

  const onHover = () => {
    setHover(!hover)
  }

  useEffect(() => {
    // TODO: provide this video from a context
    const videoSrc = document.body.classList.contains('light') ? DayVideo : NightVideo
    setInitialBgVideo(videoSrc)
  }, [])

  return (
    <HeroContainer id="hero">
      <HeroBg>
        <VideoBg id={'bgVideo'} autoPlay loop muted src={initialBgVideo} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Francisco</HeroH1>
        <HeroP>Software Engineer & Tech Lead</HeroP>
        <HeroBtnWrapper>
          <Link to="/about" className="btn" onMouseEnter={onHover} onMouseLeave={onHover}>
            About {hover ? <ArrowForward /> : <ArrowRight />}
          </Link>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
