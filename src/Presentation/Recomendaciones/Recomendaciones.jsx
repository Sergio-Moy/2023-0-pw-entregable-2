import TopNav from '../Global/TopNav';
import burger from '../../Style/img/burger.png';
import sushi from '../../Style/img/sushi.png';
import lomo from '../../Style/img/lomo.png';
import coffee from '../../Style/img/coffee.png';
import chifa from '../../Style/img/chifa.png';

function Recomendaciones(){
    const myStyle = {
        margin : "2.5%",
        height : "250px"
    }
    return <div>
        <TopNav category ={4}/>
        <br />
        <h1>Recomendaciones</h1>
        <div className='carrousel'>
            <article className='card'>
                <img src={burger} alt="combo_bembos" style={myStyle}/>
                <p style={{textAlign: "center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, unde accusamus, hic iure odit provident quidem, adipisci officia soluta in laborum eos assumenda iusto quod. Perferendis dolore adipisci nemo ipsam.
            </p>
            <button type='button' className='btn btn-outline-light'>¡Lo quiero!</button>
            </article>
            <article className='card'>
                <img src={sushi} alt="combo_sushi" style={myStyle}/>
                <p style={{textAlign: "center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, unde accusamus, hic iure odit provident quidem, adipisci officia soluta in laborum eos assumenda iusto quod. Perferendis dolore adipisci nemo ipsam.
            </p>
            <button type='button' className='btn btn-outline-light'>¡Lo quiero!</button>
            </article>
            <article className='card'>
                <img src={lomo} alt="lomo_saltado" style={myStyle}/>
                <p style={{textAlign: "center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, unde accusamus, hic iure odit provident quidem, adipisci officia soluta in laborum eos assumenda iusto quod. Perferendis dolore adipisci nemo ipsam.
            </p>
            <button type='button' className='btn btn-outline-light'>¡Lo quiero!</button>
            </article>
            <article className='card'>
                <img src={coffee} alt="combo_starbucks" style={myStyle}/>
                <p style={{textAlign: "center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, unde accusamus, hic iure odit provident quidem, adipisci officia soluta in laborum eos assumenda iusto quod. Perferendis dolore adipisci nemo ipsam.
            </p>
            <button type='button' className='btn btn-outline-light'>¡Lo quiero!</button>
            </article>
            <article className='card'>
                <img src={chifa} alt="combo_chifa" style={myStyle}/>
                <p style={{textAlign: "center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, unde accusamus, hic iure odit provident quidem, adipisci officia soluta in laborum eos assumenda iusto quod. Perferendis dolore adipisci nemo ipsam.
            </p>
            <button type='button' className='btn btn-outline-light'>¡Lo quiero!</button>
            </article>
        </div>
    </div>
}

export default Recomendaciones