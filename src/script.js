$(function () {

    //NAV FOR SHORT WIDTH
    const shortWidth = function () {
        
        //different left offsets for different ul
        var navOffset;
        $("nav ul li ul").on("mouseover", function () {
            navOffset = $(this).offset().left;
        });
        
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
            $("nav ul li ul").on("mouseover", function () {
                $(this).children("li").css({
                    'display': 'block',
                    'width': '25vw',
                    'backgroundColor': 'goldenrod'
                }).offset({
                    left: navOffset
                });
            });
            $("nav ul li ul").on("mouseout", function () {
                $(this).children("li").css('display', 'none')
            });
        }
    }
    $(window).on("resize", shortWidth);
    shortWidth();

    //NAV LINKS
    $("nav a, a#footer_contact").on("click", function (e) {
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
    
//Sticky nav
    let oldScroll = $(this).scrollTop;
    $(window).on("scroll", function(){
        let newScroll = $(this).scrollTop;
        if(newScroll < oldScroll)
            {
                $("nav").css("position" , "sticky")
            }
        else{
            $("nav").css("position" , "static")
        }
    });
        
    //SUBPAGES
    $(document).ajaxComplete(function () {

        //TABLE GOLD-PRODUCTION RANKING

        const $rows = $("tbody tr");

        //shows first 10 countries
        let $tableNewContent = "";
        $("tbody").empty();
        for (let i = 0; i <= 9; i++) {
            $tableNewContent = $rows[i];
            $("tbody").append($tableNewContent);
        }
        //shows the number of countries by select input
        $("#countryNumber").on("input", function () {
            let $howMany = $("select").val();
            if ($howMany == "Wszystek") $howMany = `${$rows.length}`;
            const $howManyNumber = parseInt($howMany);
            $("tbody").empty();

            for (let i = 0; i <= $howManyNumber - 1; i++) {
                $tableNewContent = $rows[i];
                $("tbody").append($tableNewContent);
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








});
