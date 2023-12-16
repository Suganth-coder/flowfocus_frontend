$(document).ready(function() {

    // Manual Bar Coding
    var bar1 = new ldBar("#bar1", {});
    bar1.set(100, true);
    bar1.pause();

})

$('.start').click(function() { $('.timer').countimer('start'); })
$('.pause').click(function() {
    $('.timer').countimer('stop');
    $('.ldBar path.mainline').css("animation-play-state", "paused");
})
$('.continue').click(function() { $('.timer').countimer('resume'); })



$('.timer').countimer({ autoStart: false });
$('.pause').click(function() {
    console.log(bar1);
})