import './content.css'

function Content({children}) {
    return (
        <div className="app-content">
            {children}
        </div>        
    )
}

export default Content