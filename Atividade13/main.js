document.addEventListener("DOMContentLoaded", () =>{
    var cursos = document.getElementById("courses");

    cursos.addEventListener("change", () =>{
        if(!confirm(`Deseja visitar a página do curso selecionado ?`)) return;

        window.open(`./curso.html?curso=${cursos.value}`, "_popup", "menubar=0,resizable=no,width=600,height=300");
    })
})