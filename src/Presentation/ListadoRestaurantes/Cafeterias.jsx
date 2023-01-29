import cafeteria from '../../Style/img/icons/cafeteria.png'

function Cafeterias(props){
    return <table>
    <tbody>
        <tr><td>
            Cafetería F <img src={cafeteria} alt="icon" style={props.myStyle}/>
        </td></tr>
        <tr><td>
            Cafetería O <img src={cafeteria} alt="icon" style={props.myStyle}/>
        </td></tr>
    </tbody>
</table>
}
 export default Cafeterias