$(document).ready(function () {
    $(".item-description a").on("click", function (e) {
        e.preventDefault();
        var $this = $(this),
            className = "item-absolute",
            parentItem = $this.parents(".item"),
            isAbsolute = parentItem.hasClass(className);
        if (!isAbsolute) {
            parentItem.addClass(className);
        }
        $this.next(".item-description-text").toggle(1000, function(){
            if (isAbsolute){
                parentItem.removeClass(className);
            }
        });
    });
    $(".filters a").on("click", function (e) {
        e.preventDefault();
        var $this = $(this),
            filterClass = $this.data("filter-class"),
            selector = ".item-wrapper:not(." + filterClass +")";

        $(".item-wrapper").show();
        if (filterClass != 'all') {
            $(selector).hide();
        }

    });
    $(".item-add-favourites").on("click",function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.addClass("my-favorite");
        $(".window").fadeIn();
        setTimeout(function () {
            $(".window").fadeOut();
        }, 2000);
    })

});

