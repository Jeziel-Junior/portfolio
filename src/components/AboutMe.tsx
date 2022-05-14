import degradeCircles from '../assets/degrade-circles.png'
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn
} from 'react-scroll-motion'

export function AboutMe() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())
  const FadeUp = batch(Fade(), Move(), Sticky())

  return (
    <>
      <section className="">
        <ScrollContainer>
          <ScrollPage page={3}>
            <Animator
              animation={batch(
                Move(0, 350, 0, -450),
                Fade(-1, 3),
                Sticky(),
                FadeIn(),
                ZoomIn()
              )}
            >
              <h2 className="text-white text-center text-4xl absolute left-1/2 -translate-x-1/2 -bottom-20 w-[500px] ">
                About Me
              </h2>
              <h1 className="text-[#FFFFFF21] text-center text-8xl absolute left-1/2 -translate-x-1/2 -bottom-24 -z-10 w-[500px] ">
                ABOUT ME
              </h1>
              <img
                className="absolute left-1/2 -translate-x-1/2 -bottom-24 -z-10 animate-pulse"
                src={degradeCircles}
                alt=""
              />
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </section>
    </>
  )
}
