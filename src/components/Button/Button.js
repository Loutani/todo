import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './button.css'

function Button({classnames, iconColor, icon, onclick = () => {}}) {
  return (
        <button onClick={onclick} className={classnames}>
            <FontAwesomeIcon color={iconColor} icon={icon} />
        </button>
  )
}

export default Button