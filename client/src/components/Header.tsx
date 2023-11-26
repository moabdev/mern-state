import {FaSearch} from 'react-icons/fa'; //fa means font awesome
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
        <div className="flex justify-between align-items max-w-6xl m-auto p-3">
            <Link to=''>
                <h1 className="text-2xl font-bold text-gray-900">
                    <span className="text-indigo-600">MERN</span>
                    <span className="text-indigo-600">State</span>
                </h1>
            </Link>
            <form className="bg-slate-100 p-3 rounded-lg flex items-center">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="bg-transparent focus:outline-none w-24 sm:w-64"
                />
                <FaSearch clasName="text-slate-600" />
            </form>
            <ul className='flex gap-4'>
                <Link to='/'>
                    <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
                </Link>
                
                <Link to='/about'>
                    <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
                </Link>
                
                <Link to='/sign-in'>
                <li className='text-slate-700 hover:underline'>Sign in</li>
                </Link>
                
            </ul>
        </div>
    </header>
  )
}
