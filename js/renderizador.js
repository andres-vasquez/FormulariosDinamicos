$(function () {

    /*
        lstFormulario
            id:int
            nombre:string
     */
    renderizar=function(lstFormularios)
    {
        var html='';
        for(var i=0;i<lstFormularios.length;i++)
        {
            if(lstFormularios[i]!=null)
            {
                html+='<fieldset><legend>'+lstFormularios[i].nombre+'</legend>';
                html+='<table>';
                html+='<tr>';
                html+='<td>Prueba</td>';
                html+='</tr>';
                html+='</table>';
                html+='</fieldset>';
            }
        }
        return html;
    };

});

