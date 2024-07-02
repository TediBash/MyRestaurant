import { useNavigate } from 'react-router-dom';
import './styles.css';
import NavHeader from './navbar';

function Home(){
    const navigate = useNavigate();

    return(
        <div className='container'>
            <div className='home-buttons home-section'>
                <div className="center">
                    <div className='top_logo'></div>
                    <div className='down_logo'></div>
                </div>
                <div className='btn-home-container'>
                    <button onClick={() => navigate('/breakfast')}><span className='home-text'>Men&#249; Colazione</span></button>
                    <button onClick={() => navigate('/lunch')}><span className='home-text'>Men&#249; Pranzo</span></button>
                    <button onClick={() => navigate('/dinner')}><span className='home-text'>Men&#249; Serale</span></button>
                </div>
                <div className='allegeni'>
                    <button onClick={() => navigate('/allergeni')}><span className='home-text'>Allergeni</span></button> 
                </div>
            </div>
        </div>
    )
}

export default Home;