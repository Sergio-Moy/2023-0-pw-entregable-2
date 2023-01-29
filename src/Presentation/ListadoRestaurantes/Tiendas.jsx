import listo from '../../Style/img/icons/listo.webp'
import quiosco from '../../Style/img/icons/quiosco.png'

function Tiendas(props){
    return <table>
        <tbody>
            <tr><td>
                Listo <img src={listo} alt="icon" style={props.myStyle}/>
            </td></tr>
            <tr><td className='closed'>
                Quiosco D <img src={quiosco} alt="icon" style={props.myStyle}/>
            </td></tr>
            <tr><td>
                Quiosco N <img src={quiosco} alt="icon" style={props.myStyle}/>
            </td></tr>
        </tbody>
    </table>
}
 export default Tiendas