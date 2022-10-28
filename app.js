function limpiarFormulario() {
let campos= document.querySelectorAll("input[type='text'], input[type='number']");
    for(let x=0; x<campos.length; x++){
        campos[x].value='';
    }
}
let curso=[];
function agregarAlumno(){

    let alumno=[];
    alumno.push(document.getElementById('txtAlumno').value);
    alumno.push(document.getElementById('txtMateria').value);
    alumno.push(document.getElementById('txtNota').value);
    alumno.push(document.getElementById('txtProfesor').value);
    alumno.push(document.getElementById('txtComision').value);

    let validarFormulario=true;
    for(let x=0; x<alumno.length; x++){
        if(alumno[x]=="")
        {
            validarFormulario=false;
        }
    }
    if(validarFormulario){
        curso.push(alumno);
        let datos=JSON.stringify(curso);
        localStorage.setItem('listadoAlumnos', datos);
        limpiarFormulario();
        mostrarCurso();

    }else {
        alert("Por favor llenar los campos requeridos");
    }
    
}
function mostrarCurso(){
    let llenarTabla= document.getElementById("tbDatos");
    llenarTabla.innerHTML="";
    for(x= 0; x<curso.length; x++){
        tr=document.createElement('tr');
        alumno= curso[x];
        for(y=0; y<alumno.length; y++){
            celda=alumno[y];
            td=document.createElement('td');
            td.innerHTML=celda;
            tr.appendChild(td);

        }
        llenarTabla.appendChild(tr);
    }
}
datos=localStorage.getItem('listadoAlumnos');
if(datos!=null){
    curso=JSON.parse(datos);
    mostrarCurso();
}