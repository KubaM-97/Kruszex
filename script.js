$(function () {
    $("nav a, footer a").on("click", function (e) {
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
        $rows.hide();
        $("#countryNumber").on("input", function () {
            let $ile = $("select").val();
            if ($ile == "Wszystek") $ile = `${$rows.length}`;
            //$ile=="Wszystek"?$ile = $rows.length:alert(22)
            const $ileile = parseInt($ile);
            $("tbody").empty();
            $tableContent = "";

            for (let i = 0; i <= $ileile - 1; i++) {
                $tableContent = $rows[i];
                $("tbody").append($tableContent);
            }
        });

        //        $(".mine img").hide();
        $(".mine").on("mouseover", function () {
            const $number = this.id;

            for (let i = 0; i < 10; i++) {
                if ($number == i) {
                    $(this).css({
                        'backgroundImage': "url(img/Silver/World/Mines/mine" + [i] + ".png)",
                        'backgroundSize': "cover",
                        'backgroundPosition': "center",
                        'fontSize': '0'
                    })
                }
            }
            $(this).on("mouseout", function () {
                $(this).css({
                    'backgroundColor': 'grey !important',
                    'backgroundImage': 'linear-gradient(to bottom, #d7d9db, #b8bbbf)',
                        'fontSize': '30px';
                })
            });
        });


    });

    //    fetch("https://current-precious-metal-price.p.rapidapi.com/metals/v1/0", {
    //            "method": "GET",
    //            "headers": {
    //                "x-rapidapi-host": "current-precious-metal-price.p.rapidapi.com",
    //                "x-rapidapi-key": "7b23a3fbb8msh3448936b50d2ffbp1103d6jsn8aca62706263"
    //            }
    //        })
    //        .then(response => {
    //            console.log(response);
    //        })
    //        .catch(err => {
    //            console.log(err);
    //        });


});
//fetch('https://jsonplaceholder.typicode.com/todos/1')
//  .then(response => response.json())
//  .then(json => console.log(json))
