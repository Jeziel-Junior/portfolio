import degradeCircles from '../assets/degrade-circles.png'

export function Portifolio() {
  return (
    <>
      <section className="h-screen">
        <h2 className="text-white text-center text-4xl mt-12">Portfolio</h2>
        <h1 className="text-[#FFFFFF21] text-center text-8xl absolute left-1/2 -translate-x-1/2 -bottom-24 -z-10">
          PORTFOLIO
        </h1>
        <img
          className="absolute left-1/2 -translate-x-1/2 -bottom-24 -z-10 animate-pulse"
          src={degradeCircles}
          alt=""
        />
      </section>
    </>
  )
}
