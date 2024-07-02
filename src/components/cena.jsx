import NavHeader from './navbar';
import './styles.css';

function Cena(){
    return(
        <section>
            <NavHeader />
            <embed className='pdf' src="./Menu-Master-Pranzo.pdf#toolbar=0" width="100%" height="100%" />
        </section>
    )
}

export default Cena;