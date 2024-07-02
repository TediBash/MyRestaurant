import { useNavigate } from 'react-router-dom';
import './styles.css';
import NavHeader from './navbar';

function Home(){
    const navigate = useNavigate();

    return(
        <div className='container'>
            <div className='home-buttons home-section'>
                <div className="center">
                    <img src='/MyRestaurant/src/images/LOGO.png' className='top_logo'/>
                    <img src='/MyRestaurant/src/images/SLOGAN.png' className='down_logo'/>
                </div>
                <button onClick={() => navigate('/breakfast')}><img src='/MyRestaurant/src/images/COL-TITLE.png'/></button>
                <button onClick={() => navigate('/lunch')}><img src='/MyRestaurant/src/images/PRA-TITLE.png'/></button>
                <button onClick={() => navigate('/dinner')}><img src='/MyRestaurant/src/images/SER-TITLE.png'/></button>
            </div>
        </div>
        
    )
}

export default Home;