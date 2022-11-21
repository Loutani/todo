import './header.css'

function Header({children}) {
    return (
        <div className='app-header'>
            {children}
        </div>
    )
}

export default Header