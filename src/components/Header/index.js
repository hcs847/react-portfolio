import React from 'react';
import coverImage from '../../assets/cover/gears.png';
import nameSvg from '../../assets/svg/name.svg';
import gearOne from '../../assets/svg/gear1.svg';
import gearTwo from '../../assets/svg/gear2.svg';
import gearThree from '../../assets/svg/gear3.svg';
import svgText from '../../assets/svg/text.svg';
import Navigation from '../Navigation';


function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <div className="nav-bar flex-between">
                <img className='svg-text' src={nameSvg} alt='name' />
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
            <div className='hero-img' style={{ backgroundImage: `url(${coverImage})` }}>

                <div className="gears-container">
                    <div className='flex-center-gears'>
                        <img className='gear-one' src={gearOne} alt='gear 1' />
                        <img className='gear-two' src={gearTwo} alt='gear 2' />
                        <img className='gear-three' src={gearThree} alt='gear 3' />
                    </div>
                </div>

                <div className='flex-end container'>
                    <img className='svg-text-gears' src={svgText} alt='switching gears text' />
                </div>

            </div>
        </header >
    )
}

export default Header;