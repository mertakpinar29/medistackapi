import React from 'react'
import logo from '../img/newslogo.png'

const Header = ({ fetchTechnology, setFetchTechnology }) => {
    return (
        <header className='center'>
            {
                fetchTechnology ? 
                <h1 onClick={ (e) => { setFetchTechnology( prev => !prev ) } }>Technology</h1>
                :
                <h1 onClick={ (e) => { setFetchTechnology( prev => !prev ) } }>Sports</h1>
            }
            <img src={logo} alt='news-logo' />
        </header>
    )
}

export default Header
