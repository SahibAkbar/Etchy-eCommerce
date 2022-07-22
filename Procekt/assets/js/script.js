// $(document).ready(function(){
//     $("#click-cod").click(function(){
//       $("#coupon").toggle('show-acc');
//     });
//   });



// Cart Page Minus Start

// Modal img Start


  // Modal img Start

// #region FAQ \\
var faqOpenBtn = document.querySelectorAll(".faq-open-btn");
var faqBody = document.querySelectorAll(".frequently-body");
for (let i = 0; i < faqOpenBtn.length; i++) {
    faqOpenBtn[i].addEventListener("click", function(){
        for (let j = 0; j < faqBody.length; j++) {
            if (j!=i) {
                faqBody[j].classList.remove("active");
            }
        }
        faqBody[i].classList.toggle("active");
    });
}
// #endregion FAQ End \\

$(document).ready(function(){
    $("#user-comment").owlCarousel({
        items:3,
  //      autoplay:false,
        margin:30,
        loop:true,
        dots:true,
        nav: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                loop:true
            },
            600:{
                items:2,
                loop:true
            },
            1000:{
                items:3,
                loop:true
            }
        }
  //      nav:true,
  //      navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>" ]
    });

    $("#img").owlCarousel({
        items:3,
  //      autoplay:false,
        // margin:30,
        loop:true,
        dots:true,
        nav: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                loop:true,
                nav: true
            },
            600:{
                items:2,
                loop:true,
                nav: true
            },
            1000:{
                items:3,
                loop:true,
                nav: true
            }
        },
       navText:["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>" ]
    });
    $('.js-example-basic-single').select2();
});

window.addEventListener("scroll", function () {
    var header = document.querySelector(".head")
    header.classList.toggle("sticky", window.scrollY > 0);
})


// Counter Plus Minus start
$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
