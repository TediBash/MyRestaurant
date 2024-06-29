import { useNavigate } from 'react-router-dom';
import './styles.css';
import NavHeader from './navbar';

function Home(){
    const navigate = useNavigate();

    return(
        <div className='container'>
            <NavHeader />
            <div className='home-buttons home-section'>
                <div className="center">
                    <h1 className="alex-brush">Welcome</h1>
                    <h2 className='h2_pad'>the rosa</h2>
                    <span id="asterisk">*</span>
                    <p>ready to be opened</p>
                </div>
                <span className='home-text'>Men&uacute;</span>
                <button onClick={() => navigate('/breakfast')}>Colazione</button>
                <button onClick={() => navigate('/lunch')}>Pranzo</button>
                <button onClick={() => navigate('/dinner')}>Cena</button>
            </div>
        </div>
        
    )
}

export default Home;