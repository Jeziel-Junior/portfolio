import degradeCircles from '../assets/degrade-circles.png'

export function AboutMe() {
  return (
    <>
      <section className="h-screen relative">
        <h2 className="text-white text-center text-4xl mt-12">About Me</h2>
        <h1 className="text-[#FFFFFF21] text-center text-8xl absolute left-1/2 -translate-x-1/2 -top-12 -z-10">
          ABOUT ME
        </h1>
        <img
          className="absolute left-1/2 -translate-x-1/2 top-4 -z-10 animate-pulse"
          src={degradeCircles}
          alt=""
        />
      </section>
    </>
  )
}
