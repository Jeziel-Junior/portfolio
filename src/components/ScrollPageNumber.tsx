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

export function ScrollPageNumber() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())
  const FadeUp = batch(Fade(), Move(), Sticky())
  return (
    <div className="relative -z-20">
      <ScrollContainer>
        <div className="w-[2px] h-44 left-[70px] top-64 bg-white fixed rounded-full -z-10"></div>
        <ScrollPage page={0}>
          <Animator animation={batch(Sticky())}>
            <div className="rounded-full border-2 w-12 h-12 flex justify-center items-center fixed top-1/2 -left-[912px]">
              <p className="text-white">01</p>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={batch(Sticky())}>
            <div className="rounded-full border-2 w-12 h-12 flex justify-center items-center fixed top-1/2 -left-[912px]">
              <p className="text-white">02</p>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={batch(Sticky())}>
            <div className="rounded-full border-2 w-12 h-12 flex justify-center items-center fixed top-1/2 -left-[912px]">
              <p className="text-white">03</p>
            </div>
          </Animator>
        </ScrollPage>
        <div className="w-[2px] h-44 left-[70px] bottom-52 bg-white fixed rounded-full"></div>
      </ScrollContainer>
    </div>
  )
}
