import {Link} from 'react-router-dom';

function NavHeader(props){
    return (
        <div className="nav-header">
            <div className='profile'>
                <span><Link to='/' className='logo'>Home</Link></span>
                {
                    props.from !== 'allergeni' ? <span><Link to='/allergeni' className='logo'>Allergeni</Link></span> : ''
                }
            </div>
        </div>
    )
}

export default NavHeader;