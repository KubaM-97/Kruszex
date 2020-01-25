$(function () {

    fetch("http://api.nbp.pl/api/cenyzlota/last/30")

        .then(response => response.json())
        .then(data => {
            //console.log(data)
            let tabDay = [];
            let tabPrice = [];
            data.forEach(function (gold) {
                let goldPriceInOunces = (Math.round(gold.cena * 28.3495231 * 100) / 100).toFixed(2);
                tabDay.push(gold.data);
                tabPrice.push(goldPriceInOunces);
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

                        //point
                        pointRadius: 4,
                        pointBorderWidth: 1,
                        pointBackgroundColor: 'red',

                        //point hover
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 33,
                        pointHoverBackgroundColor: 'rgba(255,255,255,1)',
                        pointHoverBorderColor: 'rgba(236,115,87, 1)'
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: `AKTUALNIE 1 UNCJA ZŁOTA KOSZTUJE: ${(Math.round(data[29].cena*28.3495231 * 100) / 100).toFixed(2)} zł`,
                        fontSize: 20
                    },
                    hover: {
                        mode: 'label' //how to show tooltips after hover on points                //mode: 'dataset',
                    },
                    legend: {
                        display: false,
                        position: "right",
                        labels: {
                            fontColor: "#000",
                        }
                    },
                    tooltips: {
                        enabled: true
                    },
                    scales: {
                        yAxes: [{
                            stacked: true,
                            display: true,
                            ticks: {
                                fontSize: 12,
                                min: 5000,
                                max: 5500
                            }
                        }]
                    },
                    animation: {
                        easing: "easeOutCubic",
                        //duration: 2000
                    },
                    responsive: true
                }

            })
        })
        .catch(err => {
            console.log(err);
            $(".canvasContainer").text("Nie połączono z serwerem.");
        });






    //Limit 10 metal prices' requests per day



    //SILVER
    let silverValue;
    fetch("https://current-precious-metal-price.p.rapidapi.com/metals/v1/1", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "current-precious-metal-price.p.rapidapi.com",
                "x-rapidapi-key": "7b23a3fbb8msh3448936b50d2ffbp1103d6jsn8aca62706263"
            }
        })
        .then(preResp => {
            if (preResp.ok) {
                console.log("HURA")
                return preResp
            } else {
                throw Error($(".canvasContainer").text("Nie połączono z serwerem."))
            }
        })
        .then(res => res.json())
        .then(data => {

            //Silver Price in USD:
            console.log("Cena Srebra: " + data);
            silverValue = data;

            //Currency converter Silver from USD to PLN
            fetch("https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=PLN&amount=1", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
                        "x-rapidapi-key": "7b23a3fbb8msh3448936b50d2ffbp1103d6jsn8aca62706263"
                    }
                })
                .then(res => res.json())
                .then(data2 => {
                    //console.log(data2.amount);

                    ////USD to PLN rate
                    //console.log(data2.rates.PLN.rate);

                    //Silver price in PLN
                    let silverValueConverted = (Math.round(silverValue * data2.rates.PLN.rate * 100) / 100).toFixed(2);

                    //add text
                    $(".silverPrice").text(`Aktualna cena srebra za 1 uncję wynosi: ${silverValueConverted} zł.`);

                })
                .catch(err => {
                    $("div[class$='-$Price']").text("Wykorzystano dzienny limit 10 zapytań. Proszę spróbować jutro.");
                    console.log(err);
                });

        })
        .catch(err => {
            console.log(err);
            $(".canvasContainer").text("Nie połączono z serwerem.");
        });









    //PLATINUM
    let platinumValue;
    fetch("https://current-precious-metal-price.p.rapidapi.com/metals/v1/2", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "current-precious-metal-price.p.rapidapi.com",
                "x-rapidapi-key": "7b23a3fbb8msh3448936b50d2ffbp1103d6jsn8aca62706263"
            }
        })
        .then(res => res.json())
        .then(data => {

            //Platinum Price in USD:
            console.log("Cena Platyny: " + data);
            platinumValue = data;

            //Currency converter Platinum from USD to PLN
            fetch("https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=PLN&amount=1", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
                        "x-rapidapi-key": "7b23a3fbb8msh3448936b50d2ffbp1103d6jsn8aca62706263"
                    }
                })
                .then(res => res.json())
                .then(data2 => {
                    //console.log(data2.amount);

                    ////USD to PLN rate
                    //console.log(data2.rates.PLN.rate);

                    //Platinum price in PLN
                    let platinumValueConverted = (Math.round(platinumValue * data2.rates.PLN.rate * 100) / 100).toFixed(2);


                    //add text
                    $(".platinumPrice").text(`Aktualna cena platyny za 1 uncję wynosi: ${platinumValueConverted} zł.`);

                })
                .catch(err => {
                    $("div[class$='-$Price']").text("Wykorzystano dzienny limit 10 zapytań. Proszę spróbować jutro.");
                    console.log(err);
                });

        })
        .catch(err => {
            console.log(err);
            $(".canvasContainer").text("Nie połączono z serwerem.");
        });


    //PALLADIUM
    let palladiumValue;
    fetch("https://current-precious-metal-price.p.rapidapi.com/metals/v1/3", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "current-precious-metal-price.p.rapidapi.com",
                "x-rapidapi-key": "7b23a3fbb8msh3448936b50d2ffbp1103d6jsn8aca62706263"
            }
        })
        .then(res => res.json())
        .then(data => {

            //Palladium Price in USD:
            console.log("Cena Palladu: " + data);
            palladiumValue = data;

            //Currency converter Palladium from USD to PLN
            fetch("https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=PLN&amount=1", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
                        "x-rapidapi-key": "7b23a3fbb8msh3448936b50d2ffbp1103d6jsn8aca62706263"
                    }
                })
                .then(res => res.json())
                .then(data2 => {

                    //USD to PLN rate
                    console.log(`Kurs USD -> PLN: ${data2.rates.PLN.rate}`);

                    //Palladium price in PLN
                    let palladiumValueConverted = (Math.round(palladiumValue * data2.rates.PLN.rate * 100) / 100).toFixed(2);

                    //add text
                    $(".palladiumPrice").text(`Aktualna cena palladu za 1 uncję wynosi: ${palladiumValueConverted} zł.`);

                })
                .catch(err => {
                    $("div[class$='-$Price']").text("Wykorzystano dzienny limit 10 zapytań. Proszę spróbować jutro.");
                    console.log(err);
                });

        })
        .catch(err => {
            console.log(err);
            $(".canvasContainer").text("Nie połączono z serwerem.");
        });
});
