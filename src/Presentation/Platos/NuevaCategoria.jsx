import TopNav from '../Global/TopNav';
function NuevaCategoria(){
    return <div>
        <TopNav category={3}/>
        <br/><br/>
        <h1>Agregar Categoria</h1>
    <form>
        <div className="centrar">
        <input type="text" />
        <input type="submit" value="OK"/>
        </div>
    </form>
    <br/>
    <h2 className="clase_1"> Desayuno </h2>
    <br/>
    <h1>Registrar un nuevo plato</h1>
    <br/>
    <div className="clase_0">
    <a href="/NuevoPlato">Agregar Plato</a>
    </div>
    </div>
}
export default NuevaCategoria