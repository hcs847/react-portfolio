import React from 'react'


function Navigation(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                {tabs.map(tab => (
                    <li className='nav__item' key={tab}>
                        <a
                            href={'#' + tab.toLowerCase()}
                            onClick={() => props.handlePageChange(tab)}
                            className={
                                props.currentPage === tab ? 'nav-link-active' : 'nav-link'
                            }
                        >
                            {tab}
                        </a>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Navigation;