import {BsSearch} from 'react-icons/bs'

function Navbar() {
  return (
    <div className="container">
        <nav className="flex">
            <ul>
                <li><a href="/" >Home</a></li>
                <li><a href="/about" className='inactive'>About</a></li>
                <li><a href="/about" className='inactive'>Business</a></li>
                <li><a href="/about" className='inactive'>Featured</a></li>
            </ul>
            <div className="search-bar">
                <form action="" className='flex'>
                    <input type="text" placeholder='Search'/>
                    <button type="submit">
                        {<BsSearch />}
                    </button>
                </form>
            </div>
        </nav>
    </div>
  )
}

export default Navbar