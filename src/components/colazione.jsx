import NavHeader from './navbar';
import './styles.css';

function Colazione(){
    return(
        <section>
            <NavHeader />
            <div className='colazioneContainer'>
                <p><span>Caffe Espresso</span> <span>&#8364; 1.20</span></p>
                <p><span>Caffe Corretto</span> <span>&#8364; 1.20</span></p>
                <p><span>Caffe Decaffeinato</span> <span>&#8364; 1.20</span></p>
                <p><span>Caffe Ginseng</span> <span>&#8364; 1.20</span></p>
                <p><span>Caffe D'orzo</span> <span>&#8364; 1.20</span></p>
                <p><span>Caffe Americano</span> <span>&#8364; 1.20</span></p>
                <p><span>Caffe Macchiato Soia</span> <span>&#8364; 1.20</span></p>
                <p><span>Caffe Shakerato corretto</span> <span>&#8364; 1.20</span></p>
                <p><span>Marocchino / Collino</span> <span>&#8364; 1.20</span></p>
                <p><span>Cioccolata calda</span> <span>&#8364; 1.20</span></p>
                <p><span>Marocchino con Nutella</span> <span>&#8364; 1.20</span></p>
                <p><span>Marocchino con crema di pistacchio</span> <span>&#8364; 1.20</span></p>
                <p><span>Marocchino Dec / Ginseng / Orzo / Soia e chi ne ha piu ne metta</span> <span>&#8364; 1.20</span></p>
                <p><span>Irish Coffee</span> <span>&#8364; 1.20</span></p>
                <p><span>Cappuccino</span> <span>&#8364; 1.20</span></p>
                <p><span>Cuppuccino Dec / Ginseng / Orzo / Soia</span> <span>&#8364; 1.20</span></p>
                <p><span>Latte macchiato</span> <span>&#8364; 1.20</span></p>
                <p><span>Latte macchiato di soia</span> <span>&#8364; 1.20</span></p>
                <p><span>Spremuta</span> <span>&#8364; 1.20</span></p>
            </div>
        </section>
    )
}

export default Colazione;