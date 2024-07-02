import NavHeader from './navbar';
import './styles.css';

function Colazione(){
    return(
        <section>
            <NavHeader />
            <img className='allergeni-img' src="https://i.imgur.com/aSzUFct.png" />
            <img className='allergeni-img' src="https://i.imgur.com/rgmbDau.png" />
        </section>
    )
}

export default Colazione;