import  Logo from 'Assets/goodRead.png'
import Layout from '../Layouts/Layout'
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <>
        <Layout>
            <div className=' flex flex-col items-center justify-center gap-24   h-[100vh]'>

                <div  className='w-48 h-48'>
                    <img src={Logo} alt="" />
                </div>

                <div className=' flex  items-center justify-center gap-16 w-3/4 '> 

                    <div className='text-4xl text-center w-2/4 font-bold text-white'>
                    <h1> Book Shelf</h1> 
                    <br />
                    <span className='text-violet-800'>  Your personal library and social network for bookworms</span>
                    </div>

                    <div>
                    <button className='btn btn-accent rounded-lg m-4'>
                    <Link to='/SignUp'>Register</Link>
                    </button>
                    <button className='btn btn-success rounded-lg'>
                        <Link to='/SignIn'>LogIn</Link>
                    </button>
                    </div>
                </div>
            </div>
            </Layout>
        </>
    )
}