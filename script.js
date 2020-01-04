$(function () {
    $("nav a").on("click", function (e) {
        e.preventDefault();
        const url = this.href;
        $(".content").remove();
        const ids = this.id;
        if (ids) {
            $("main").load(url + " .content #" + ids).hide().fadeIn(1000);
        } else {
            $("main").load(url + " .content").hide().fadeIn(1000);
        }
    });
    $(document).ajaxComplete(function () {

        const $rows = $("tbody tr");
        $("#countryNumber").on("input", function () { 
            const $ile = $("select").val();
            const $ileile = parseInt($ile);
            $("tbody").empty();
            $tableContent = "";

            for (let i = 0; i <= $ileile - 1; i++) {
                $tableContent = $rows[i];
                $("tbody").append($tableContent);
            }
        });

    });

});
//fetch('https://jsonplaceholder.typicode.com/todos/1')
//  .then(response => response.json())
//  .then(json => console.log(json))
