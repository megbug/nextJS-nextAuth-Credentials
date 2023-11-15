import Link from 'next/link';


const Home = () => {
    return (
        <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'>NextAuth.js</h1>
            <Link href='/register' className='black_btn desc text-center'>Register Page</Link>
            <Link href='/login' className='black_btn desc text-center'>Login Page</Link>
        </section>
    )
}

export default Home