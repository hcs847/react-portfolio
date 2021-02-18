import React from 'react';
import coverImage from '../../assets/cover/gears.png';
import nameSvg from '../../assets/svg/name.svg';


function Header() {
    return (
        <header>
            <div className='hero-img' style={{ backgroundImage: `url(${coverImage})` }}>

                <div className="name-container">

                    <img className='name-svg' src={nameSvg} alt='name' />


                </div>

            </div>
        </header>
    )
}

export default Header;