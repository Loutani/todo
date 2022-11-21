import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import menuItems from '../../__mock__/menu_items';

import MenuItem from '../MenuItem/MenuItem';

import './menu.css'

function Menu() {
    /**
     * handle the open menu state
     */
    const [open, setOpen] = useState(false);

    /**
     * handle click on menu icon
     */
    const handleMenuClick = (e) => {
        setOpen(open => !open)
    }

    /**
     * handle close menu
     */
    const handleCloseMenu = (e) => {
        const clickItem = e.target.closest('div');

        if(!clickItem.classList.contains('menu-component') && !clickItem.classList.contains('menu-item')) {
            setOpen(open => false)
        }
    }

    /**
     * when the click is outside the menu hide it
     */
    useEffect(() => {
        window.addEventListener('click', handleCloseMenu);

        return () => {
            window.removeEventListener('click', handleCloseMenu);
        }
    }, []);

    return (
        <div className='menu-component'>
            <FontAwesomeIcon icon={faBars} className='white' onClick={handleMenuClick} />

            <div className={!open ? `menu-item` : `menu-item open`}>
                <ul>
                    {
                        menuItems.map(
                            menuItem => menuItem.type === 'link' ? <MenuItem 
                                            key={menuItem.id} 
                                            link={menuItem.link}
                                            icon={menuItem.icon} 
                                            title={menuItem.title} 
                                            color={menuItem.color} /> : <></>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu