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
                    <p className='down_logo'>Dall'alba al tramonto</p>
                </div>
                <div className='btn-home-container'>
                    <button onClick={() => navigate('/breakfast')}><span className='home-text'>COLAZIONE</span></button>
                    <button onClick={() => navigate('/lunch')}><span className='home-text'>PRANZO</span></button>
                    <button onClick={() => navigate('/dinner')}><span className='home-text'>MEN&#217; SERALE</span></button>
                </div>
                <div className='allegeni'>
                    <button onClick={() => navigate('/allergeni')}><span className='home-text'>ALLERGENI</span></button> 
                </div>
            </div>
        </div>
    )
}

export default Home;