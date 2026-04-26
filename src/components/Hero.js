import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md"
import { Link } from "gatsby"
import NightVideo from "../assets/bg-video.mp4"
import DayVideo from "../assets/bg-day.mp4"

const getCurrentTheme = () => {
  if (typeof document === "undefined") {
    return "dark"
  }

  if (document.body.classList.contains("light")) {
    return "light"
  }

  return "dark"
}

const heroBackgrounds = {
  dark: `
    radial-gradient(circle at 50% 18%, rgba(71, 112, 173, 0.38), transparent 28%),
    linear-gradient(180deg, #0f2d54 0%, #0b1730 42%, #040b16 100%)
  `,
  light: `
    radial-gradient(circle at 50% 16%, rgba(255, 243, 210, 0.75), transparent 30%),
    linear-gradient(180deg, #c8c9c4 0%, #8f8a79 34%, #2b3426 100%)
  `,
}

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
  background: ${({ themeMode }) => heroBackgrounds[themeMode] || heroBackgrounds.dark};
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 180ms ease;
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
  const [themeMode, setThemeMode] = useState("dark")
  const [shouldRenderVideo, setShouldRenderVideo] = useState(false)
  const [activeVideoSrc, setActiveVideoSrc] = useState(null)
  const [isVideoVisible, setIsVideoVisible] = useState(false)
  const [readyVideos, setReadyVideos] = useState({})

  const onHover = () => {
    setHover(!hover)
  }

  useEffect(() => {
    const nextTheme = getCurrentTheme()
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    setThemeMode(nextTheme)

    const observer = new MutationObserver(() => {
      const updatedTheme = getCurrentTheme()
      setThemeMode(updatedTheme)
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    })

    if (isSmallScreen || prefersReducedMotion) {
      return () => observer.disconnect()
    }

    let idleCallbackId
    const timeoutId = window.setTimeout(() => {
      setShouldRenderVideo(true)
    }, 1200)

    if ("requestIdleCallback" in window) {
      idleCallbackId = window.requestIdleCallback(() => {
        setShouldRenderVideo(true)
      })
    }

    return () => {
      observer.disconnect()
      if (idleCallbackId) {
        window.cancelIdleCallback(idleCallbackId)
      }
      window.clearTimeout(timeoutId)
    }
  }, [])

  const videoSrc = themeMode === "light" ? DayVideo : NightVideo

  useEffect(() => {
    if (!shouldRenderVideo || typeof document === "undefined") {
      return undefined
    }

    const preloaders = [NightVideo, DayVideo].map(src => {
      const video = document.createElement("video")
      const markAsReady = () => {
        setReadyVideos(currentReadyVideos => {
          if (currentReadyVideos[src]) {
            return currentReadyVideos
          }

          return {
            ...currentReadyVideos,
            [src]: true,
          }
        })
      }

      video.preload = "metadata"
      video.muted = true
      video.playsInline = true
      video.addEventListener("loadeddata", markAsReady, { once: true })
      video.src = src
      video.load()

      return { video, markAsReady }
    })

    return () => {
      preloaders.forEach(({ video, markAsReady }) => {
        video.removeEventListener("loadeddata", markAsReady)
        video.src = ""
      })
    }
  }, [shouldRenderVideo])

  useEffect(() => {
    if (!shouldRenderVideo) {
      return
    }

    if (readyVideos[videoSrc]) {
      setActiveVideoSrc(videoSrc)
      setIsVideoVisible(true)
      return
    }

    setIsVideoVisible(false)
  }, [readyVideos, shouldRenderVideo, videoSrc])

  return (
    <HeroContainer id="hero">
      <HeroBg themeMode={themeMode}>
        {shouldRenderVideo && activeVideoSrc && (
          <VideoBg
            id="bgVideo"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            src={activeVideoSrc}
            type="video/mp4"
            aria-hidden="true"
            isVisible={isVideoVisible}
          />
        )}
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
