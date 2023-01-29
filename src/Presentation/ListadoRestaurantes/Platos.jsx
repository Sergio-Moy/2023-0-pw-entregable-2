import bembos from '../../Style/img/icons/bembos.webp'
import chifa from '../../Style/img/icons/chifa.png'
import sushi from '../../Style/img/icons/sushi.webp'
import nevera from '../../Style/img/icons/nevera.png'

function Platos(props){
    return <table>
    <tbody>
        <tr><td>
            Bembos <img src={bembos} alt="icon" style={props.myStyle}/>
        </td></tr>
        <tr><td className="closed">
            Chifa Express <img src={chifa} alt="icon" style={props.myStyle}/>
        </td></tr>
        <tr><td className="closed">
            Mr. Sushi <img src={sushi} alt="icon" style={props.myStyle}/>
        </td></tr>
        <tr><td>
            Nevera Fit <img src={nevera} alt="icon" style={props.myStyle}/>
        </td></tr>
    </tbody>
</table>
}
 export default Platos