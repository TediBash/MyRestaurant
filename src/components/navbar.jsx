import {Link} from 'react-router-dom';

function NavHeader(){
    return (
        <div className="nav-header">
            <div className='profile'>
                <h2><Link to='/MyRestaurant/' className='logo'>Home</Link></h2>
            </div>
        </div>
    )
}

export default NavHeader;