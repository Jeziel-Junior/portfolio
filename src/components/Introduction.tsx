import degradeCirclesHome from '../assets/degrade-circles-home.png'

export function Introduction() {
  return (
    <>
      <section className="flex flex-col items-start gap-7 h-screen justify-center px-44 absolute top-5">
        <p className="text-white">Introduction</p>
        <h1 className="text-[#E7E7E7] text-6xl">codes & designs.</h1>
        <p className="text-white">
          Hi, my name is Jeziel Junior and I'm completely passionate about{' '}
          <br /> front end development and design.
        </p>
        <img
          className="absolute top-[358px] -z-20 animate-pulse"
          src={degradeCirclesHome}
          alt=""
        />
      </section>
    </>
  )
}
