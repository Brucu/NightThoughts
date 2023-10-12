import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center"> Thoughts By Everyone</span>
      </h1>
      <p className="desc text-center">
        Night Thoughts is a safe place for sharing thoughts <br /> when no one else is around.
      </p>

      <Feed />
    </section>
  )
}

export default Home