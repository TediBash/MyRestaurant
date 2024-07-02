import { useNavigate } from 'react-router-dom';
import './styles.css';
import NavHeader from './navbar';

function Home(){
    const navigate = useNavigate();

    return(
        <div className='container'>
            <div className='home-buttons home-section'>
                <div className="center">
                    <h1 className='h2_pad'></h1>
                    <p className='p_pad'>ready to be opened</p>
                </div>
                <button onClick={() => navigate('/breakfast')}><span className='home-text'>Men&uacute; Colazione</span></button>
                <button onClick={() => navigate('/lunch')}><span className='home-text'>Men&uacute; Pranzo</span></button>
                <button onClick={() => navigate('/dinner')}><span className='home-text'>Men&uacute; Serale</span></button>
            </div>
        </div>
        
    )
}

export default Home;