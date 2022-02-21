$(document).ready(function () {
    console.log("ready!");

    $(".btn-size").click(function () {
        $(".btn-size").removeClass("active");
        $(this).toggleClass("active");
        if ($(this).hasClass("sml")) {
            $(".size-selected").html("S");
        }
        if ($(this).hasClass("md")) {
            $(".size-selected").html("M");
        }
        if ($(this).hasClass("lg")) {
            $(".size-selected").html("L");
        }
    });

    var cart = 0;
    var Addsm = 0;
    var Addmd = 0;
    var Addlg = 0;

    $(".item-sml").hide();
    $(".item-md").hide();
    $(".item-lg").hide();

    $("#addtoCart").click(function () {
        if ($(".sml").hasClass("active")) {
            cart = cart + 1;
            Addsm = Addsm + 1;
            $(".cart-count").html(cart);
            $(".count-sml").html(Addsm);
            $(".item-sml").show();
        }
        if ($(".md").hasClass("active")) {
            cart = cart + 1;
            Addmd = Addmd + 1;
            $(".cart-count").html(cart);
            $(".count-md").html(Addmd);
            $(".item-md").show();
        }
        if ($(".lg").hasClass("active")) {
            cart = cart + 1;
            Addlg = Addlg + 1;
            $(".cart-count").html(cart);
            $(".count-lg").html(Addlg);
            $(".item-lg").show();
        }
        if (!$(".btn-size").hasClass("active")) {
            alert("Error no Selected Size");
        }

        $(".btn-cart").mouseover(function () {
            if (cart) {
                $(".btn-cart").addClass("active");
                $(".cart-container").show();
            }
        });

        $(".cart-container").mouseleave(function () {
            $(".btn-cart").removeClass("active");
            $(".cart-container").hide();
        });
    });


});

