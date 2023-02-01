import TopNav from '../Global/TopNav';
function NuevoPlato(){
    return <div>
        <TopNav category={3}/>
        <br/><br/>
    <h1>Agregar Plato</h1>
    <form>
        <br/>
        <div class="centrar">
            <input
            class="form-control bg-light"
            type="text"
            placeholder="Nombre"
          />
        </div>
        <div class="centrar">
            <input
            class="form-control bg-light"
            type="text"
            placeholder="Precio"
          />
        </div>
        <div class="centrar">
           
            <form name="subida-imagenes" type="POST" enctype="multipart/formdata" >
                
                <input type="file" name="imagen1" />
            </form>
        </div>
        <br/>
        <div class="centrar">
            <input type="submit" name="subir-plato" value="OK"/>
            <br/><br/>
            <input type="submit" name="subir-plato" value="Cancelar"/>
        </div>
        
    </form>
    </div>
}
export default NuevoPlato