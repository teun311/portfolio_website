
$(window).scroll(function () {
   // $(".bgCus").toggleClass('backgroundChange',$(this).scrollTop()>100);
    $(".colour").toggleClass('backgroundChange',$(this).scrollTop()>150);
    $(".colour1").toggleClass('backgroundChange1',$(this).scrollTop()>520);
    $(".colour2").toggleClass('backgroundChange2',$(this).scrollTop()>1250);
});

$(".part1").waypoint(function () {
        $(".part1").addClass('animated bounceIn')},
    {
        offset:'35%'
    }
);