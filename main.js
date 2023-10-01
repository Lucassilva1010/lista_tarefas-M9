$(document).ready(function () {

    $('form button').on("click", function (e) {
        e.preventDefault();
        const textoInput = $("#texto-tarefa").val();
        const novotexto = $(`<li>${textoInput}</li>`);



        $(novotexto).appendTo('ol')

        $('#texto-tarefa').val('');
    })

    
    $('ol').on('click', 'li', function () {
        $(this).toggleClass('completado')
    });

});