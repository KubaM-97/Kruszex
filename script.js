$(function () {

    //NAV FOR SHORT WIDTH
    const shortWidth = function () {
        if ($(window).width() < 864) {
            $("header span").hide();
            $("nav ul li ul:eq(0) span").html("<img src='img/billetGold.png'>");
            $("nav ul li ul:eq(1) span").html("<img src='img/billetSilver.png'>");
            $("nav ul li ul:eq(2) span").html("<img src='img/tips.png'>");
            $("nav ul li ul:eq(3) span").html("<img src='img/Contact.png'>");
            $("nav ul li ul").on("mouseover", function () {
                $(this).children("li").css({
                    'display': 'block',
                    'width': '100vw',
                    'backgroundColor': 'goldenrod'
                }).offset({
                    left: 0
                });
            });
            $("nav ul li ul").on("mouseout", function () {
                $(this).children("li").css('display', 'none')
            });
        } else {
            $("header span").show();
            $("nav ul li ul:eq(0) span").html("Złoto");
            $("nav ul li ul:eq(1) span").html("Srebro");
            $("nav ul li ul:eq(2) span").html("Porady");
            $("nav ul li ul:eq(3) span").html("Kontakt");

            //            Odtąd
            $("nav ul li ul").on("mouseover", function () {
                $(this).children("li").css({
                    'width': '25vw',
                    'backgroundColor': 'goldenrod'
                })
            });
            $("nav ul li ul").on("mouseout", function () {
                $(this).children("li").css('display', 'none')
            });
            //            Dotąd
        }
    }
    $(window).on("resize", shortWidth);
    shortWidth();

    //NAV LINKS
    $("nav a").on("click", function (e) {
        e.preventDefault();
        const url = this.href;
        $(".content").remove();
        const ids = this.id;
        if (ids) {
            $(".package").load(url + " .content #" + ids).hide().fadeIn(1000);
        } else {
            $(".package").load(url + " .content").hide().fadeIn(1000);
        }
    });

    //OTHER SUBPAGES
    $(document).ajaxComplete(function () {

        //TABLE GOLD-PRODUCTION RANKING
        const $rows = $("tbody tr");

        //shows first 10 countries
        let $tableContent = "";
        for (let i = 1; i <= 10; i++) {
            $tableContent = $rows[i];
            $("tbody").append($tableContent);
        }
        //shows the number of countries by select input
        $("#countryNumber").on("input", function () {
            let $howMany = $("select").val();
            if ($howMany == "Wszystek") $howMany = `${$rows.length}`;
            const $howManyNumber = parseInt($howMany);
            $("tbody").empty();

            for (let i = 0; i <= $howManyNumber - 1; i++) {
                $tableContent = $rows[i];
                $("tbody").append($tableContent);
            }
        });

        //MINES - silverWorld
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
                    'fontSize': '30px'
                });
            });
        });


    });

    //    fetch("https://gold-and-silver-price-in-nepal.p.rapidapi.comhttps//www.sourcenepal.com/gold-silver-price-in-nepal/", {
    //            "method": "GET",
    //            "headers": {
    //                "x-rapidapi-host": "gold-and-silver-price-in-nepal.p.rapidapi.com",
    //                "x-rapidapi-key": "7b23a3fbb8msh3448936b50d2ffbp1103d6jsn8aca62706263"
    //            }
    //        })
    //        .then(response => {
    //            console.log(response);
    //        })
    //        .catch(err => {
    //            console.log(err);
    //        });
    fetch("http://api.nbp.pl/api/cenyzlota/last/30")
        .then(res => res.json())
        .then(data => {
                        console.log(data)
            let tabDay = [];
            let tabPrice = [];
            data.forEach(function (user) {
                tabDay.push(user.data)
                tabPrice.push(user.cena)
            })
            let chartLabel = `CENA ZŁOTA`;
            let $myChart = $("#myChart")[0].getContext('2d');
            Chart.defaults.global.defaultFontFamily = "Lato";
            Chart.defaults.global.defaultFontSize = 18;
            Chart.defaults.global.defaultFontColor = "#000";
            let massPopChart = new Chart($myChart, {
                type: "line",
                data: {
                    labels: tabDay,
                    datasets: [{
                        label: chartLabel,
                        data: tabPrice,
                        backgroundColor: "goldenrod",
                        borderWidth: 1,
                        borderColor: "#777",
                        hoverborderWidth: 3,
                        hoverborderColor: "#000",
                        pointBorderColor: 'white',
                        fill: true,
                        pointRadius: 4,
                        pointBorderWidth: 1,
                        pointBackgroundColor: 'red',
                        //ustawienia punktu hover
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 33,
                        pointHoverBackgroundColor: 'rgba(255,255,255,1)',
                        pointHoverBorderColor: 'rgba(236,115,87, 1)'
                            }]
                },
                options: {
                    title: {
                        display: true,
                        text: `OBECNIE 1 GRAM ZŁOTA KOSZTUJE: ${data[29].cena} zł`,
                        fontSize: 25
                    },
                    hover: {
                        mode: 'label' //jak pokazywać tooltipy po najechaniu na punkty wykresu
                        //mode: 'dataset',
                    },
                    legend: {
                        display: false,
                        position: "right",
                        labels: {
                            fontColor: "#000",
                        }
                    },
//                    layout: {
//                        padding: {
//                            left: 0,
//                            right: 0,
//                            bottom: 0,
//                            top: 0
//                        }
//                    },
                    tooltips: {
                        enabled: true
                    },
                    scales: {
                        yAxes: [{
                            stacked: true,
                            display: true,
                            ticks: {
                                fontSize: 12,
                                min: 175,
                                max: 200
                            }
                                }]
                    },
                    animation: {
                        easing: "easeOutCubic",
//                        duration: 2000
                    },
                    responsive: true
                }

            })
        })
        .catch(error => console.log(error));




});
