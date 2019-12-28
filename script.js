$(function () {
    $("a").on("click", function (e) {
        e.preventDefault();
        const url = this.href;
        $(".content").remove();
        const ids = this.id;
        if(ids){
            $("main").load(url + " .content #" + ids).hide().fadeIn(1000);
        }
        else{
            $("main").load(url + " .content").hide().fadeIn(1000);
        }
    });
});
//fetch('https://jsonplaceholder.typicode.com/todos/1')
//  .then(response => response.json())
//  .then(json => console.log(json))
