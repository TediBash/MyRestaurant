import {Link} from 'react-router-dom';

function NavHeader(props){
    return (
        <div className="nav-header">
            <div className='profile'>
                <h2><Link to='/' className='logo'>Home</Link></h2>
                {
                    props.from !== 'allergeni' ? <h2><Link to='/allergeni' className='logo'>Allergeni</Link></h2> : ''
                }
            </div>
        </div>
    )
}

export default NavHeader;