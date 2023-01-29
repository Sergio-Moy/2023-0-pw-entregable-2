import donuts from '../../Style/img/icons/donuts.png'
import gogreen from '../../Style/img/icons/gogreen.png'
import momenti from '../../Style/img/icons/momenti.webp'
import starbucks from '../../Style/img/icons/starbucks.png'


function Snacks(props){
    return <table>
    <tbody>
        <tr><td>
            Dunkin' Donuts <img src={donuts} alt="icon" style={props.myStyle}/>
        </td></tr>
        <tr><td>
            GoGreen <img src={gogreen} alt="icon" style={props.myStyle}/>
        </td></tr>
        <tr><td>
            Momenti <img src={momenti} alt="icon" style={props.myStyle}/>
        </td></tr>
        <tr><td className="closed">
            Starbucks <img src={starbucks} alt="icon" style={props.myStyle}/>
        </td></tr>
    </tbody>
</table>
}
 export default Snacks