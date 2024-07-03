import NavHeader from './navbar';
import './styles.css';

function Cena(){
    return(
        <section>
            <NavHeader />
            <img className='allergeni-img' src="https://i.imgur.com/aPTKNGG.png" />
            <img className='allergeni-img' src="https://i.imgur.com/NrAe6zR.png" />
            <img className='allergeni-img' src="https://i.imgur.com/VTjjYos.png" />
            <img className='allergeni-img' src="https://i.imgur.com/3g0Q61e.png" />
        </section>
    )
}

export default Cena;