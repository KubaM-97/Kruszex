$(function () {

    fetch("https://api.nbp.pl/api/cenyzlota/last/30")

        .then(response => response.json())
        .then(data => {
            let tabDay = [];
            let tabPrice = [];
            data.forEach(function (gold) {
                let goldPriceInOunces = (Math.round(gold.cena * 31.1034768 * 100) / 100).toFixed(2);
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
                        text: `AKTUALNIE 1 UNCJA ZŁOTA KOSZTUJE: ${(Math.round(data[29].cena*31.1034768 * 100) / 100).toFixed(2)} zł`,
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
                                min: Math.floor(Math.min( ...tabPrice ) / 1000) * 1000,
                                max: Math.ceil(Math.max( ...tabPrice ) / 1000) * 1000
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




    //SILVER
    fetch("https://currencyscoop.p.rapidapi.com/latest", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7b23a3fbb8msh3448936b50d2ffbp1103d6jsn8aca62706263",
                "x-rapidapi-host": "currencyscoop.p.rapidapi.com"
            }
        })
        .then(preResp => {
            if (preResp.ok) {
                return preResp
            } else {
                throw Error($(".canvasContainer").text("Nie połączono z serwerem."))
            }
        })
        .then(res => res.json())
        .then(data => {


            //Platinum Price in USD:
            const howManyPlatinumForOneDollar = data.response.rates.XPT;
            platinumValue = 1 / howManyPlatinumForOneDollar;
            console.log("Cena Platyny: " + platinumValue);

            //Palladium Price in USD:
            const howManyPalladiumForOneDollar = data.response.rates.XPD;
            palladiumValue = 1 / howManyPalladiumForOneDollar;
            console.log("Cena Palladu: " + palladiumValue);

            //Currency converter Silver from USD to PLN
            fetch("https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=PLN&amount=1", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
                        "x-rapidapi-key": "7b23a3fbb8msh3448936b50d2ffbp1103d6jsn8aca62706263"
                    }
                })
                .then(res => res.json())
                .then(converter => {

                    //Silver Price in USD:
                    const howManyAgForOneDollar = data.response.rates.XAG;
                    let silverValueUSD = 1 / howManyAgForOneDollar;
                    console.log("Cena Srebra: " + silverValueUSD);

                    //Silver price in PLN
                    let silverValuePLN = (Math.round(silverValueUSD * converter.rates.PLN.rate * 100) / 100).toFixed(2);
                    $(".silverPrice").text(`Aktualna cena srebra za 1 uncję wynosi: ${silverValuePLN} zł.`);


                    
                    //Platinum Price in USD:
                    const howManyPtForOneDollar = data.response.rates.XPT;
                    let platinumValueUSD = 1 / howManyPtForOneDollar;
                    console.log("Cena Platyny: " + platinumValueUSD);

                    //Platinum price in PLN
                    let platinumValuePLN = (Math.round(platinumValueUSD * converter.rates.PLN.rate * 100) / 100).toFixed(2);
                    $(".platinumPrice").text(`Aktualna cena platyny za 1 uncję wynosi: ${platinumValuePLN} zł.`);



                    //Palladium Price in USD:
                    const howManyPdForOneDollar = data.response.rates.XPD;
                    let palladiumValueUSD = 1 / howManyPdForOneDollar;
                    console.log("Cena Palladu: " + palladiumValueUSD);

                    //Palladium price in PLN
                    let palladiumValuePLN = (Math.round(palladiumValueUSD * converter.rates.PLN.rate * 100) / 100).toFixed(2);
                    $(".palladiumPrice").text(`Aktualna cena palladu za 1 uncję wynosi: ${palladiumValuePLN} zł.`);

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
