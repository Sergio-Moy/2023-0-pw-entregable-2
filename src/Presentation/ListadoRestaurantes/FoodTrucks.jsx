import truck from '../../Style/img/icons/truck.png'

function FoodTrucks(props){
    return <table>
    <tbody>
        <tr><td>
            Capirotes <img src={truck} alt="icon" style={props.myStyle}/>
        </td></tr>
        <tr><td>
            Cayetana <img src={truck} alt="icon" style={props.myStyle}/>
        </td></tr>
    </tbody>
</table>
}
 export default FoodTrucks