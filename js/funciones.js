/*
    objNodo:
        id: int
        nombre: string
        agregar: bool
        editar: bool
        eliminar: bool
        contenido: html
*/
crearNodo = function(objNodo)
{
    var html = '';
    html += '<div class="nodo" id="objNodo.id">';
    html += '<h3><font>' + objNodo.nombre + '</font>';
    if(objNodo.agregar)
    html += '<a id="eliminar_' + objNodo.id + '" class="eliminar" style="float: right; font-size: 12px">&nbsp; Eliminar </a>';
    if(objNodo.editar)
    html += '<a id="editar_' + objNodo.id + '" class="editar" style="float: right; font-size: 12px">&nbsp; Editar </a>';
    if(objNodo.eliminar)
    html += '<a id="agregar_' + objNodo.id + '" class="agregar" style="float: right; font-size: 12px">&nbsp; Agregar </a>';
    html += '</h3>';
    html += '<div>';
    html += objNodo.contenido;
    html += '</div>';
    html += '</div>';
    return html;
};



