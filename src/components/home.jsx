import { useNavigate } from 'react-router-dom';
import './styles.scss';
import NavHeader from './navbar';

function Home(){
    const navigate = useNavigate();

    return(
        <div>
            <NavHeader />
            <section className='home-section'>
                <div className="center">
                    <h1 className="alex-brush">Welcome</h1>
                    <h2>the rosa</h2>
                    <span id="asterisk">*</span>
                    <p>ready to be opened</p>
                </div>
            </section>
            <section className='home-buttons'>
                <span className='home-text'>Men&uacute;</span>
                <button onClick={() => navigate('/breakfast')}>Colazione</button>
                <button onClick={() => navigate('/lunch')}>Pranzo</button>
                <button onClick={() => navigate('/dinner')}>Cena</button>
            </section>
        </div>
        
    )
}

export default Home;