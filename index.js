document.addEventListener("mousemove", paralaxe)

function paralaxe(e){
    document.querySelectorAll(".flutua").forEach(function(mover){

        var velocidade = mover.getAttribute("data-value")
        var x = ((e.clientX * velocidade) / 50) *-1
        var y = ((e.clientY * velocidade) / 50) *-1

        mover.style.transform = "translateX(" + x + "px) translateY(" + y + "px)"

    }

    )
}


function carregarPagina(pagina){

    switch (pagina){
    case "cursos":
        document.querySelector("#pagina").innerHTML="<object type='text/html' data='cursos.html' id='carregamento'>"
        break
    }
}