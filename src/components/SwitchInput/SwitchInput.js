import { useContext, useState } from 'react'
import { ApplicationThemeContext } from '../../providers/ThemeProvider'
import Typography from '../Typography/Typography'
import './switchInput.css'

function SwitchInput({title, classname = ''}) {
    const {appTheme, setAppTheme} = useContext(ApplicationThemeContext)
    
    const [active, setActive] = useState(appTheme)

    const changeThemeHandle = () => {
        setAppTheme(active => !active)
        setActive(active => !active)
    }

    return (
        <div className='checkbox-input'>
            <input className='checkbox' type='checkbox' value={active} />
            <div onClick={changeThemeHandle} className='checkbox-design'>
                <div className={active ? 'checkbox-design-switch active' : 'checkbox-design-switch'} ></div>
            </div>
            <Typography classname={classname} varient='p'>{title}</Typography>
        </div>
    )
}

export default SwitchInput