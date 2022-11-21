import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons'

import Typography from '../Typography/Typography'

import './menuItem.css'
import { NavLink } from 'react-router-dom';

const iconList = Object.keys(Icons).filter((key) => key !== 'fas' && key !== 'prefix').map((icon) => Icons[icon]);

library.add(...iconList)

function MenuItem({link, icon, title, color = 'black'}) {
    return (
        <NavLink to={link}>
            <li>
                <FontAwesomeIcon color={color} icon={icon} />
                <Typography varient='p'>
                    {title}
                </Typography>
            </li>
        </NavLink>
    )
}

export default MenuItem