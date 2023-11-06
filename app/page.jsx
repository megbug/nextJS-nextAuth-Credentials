import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Discover and Share<br className='max-md:hidden'/>
            <span className='green_gradient text-center'>What you know</span>
        </h1>
        <p className="desc text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus tempore iure ipsa repellat, ratione tenetur placeat nemo non voluptatibus aut.</p>
        <Feed />
    </section>
  )
}

export default Home