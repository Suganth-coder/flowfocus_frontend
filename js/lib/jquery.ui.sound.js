(function($) {
    $.fn.uiSound = function(options) {
        var loc = $.extend({
            play: '', //name of sound file
            dur: 3, //duration in seconds (optional)
        }, options);

        return this.each(function() {

            var $player = document.createElement("audio");
            var $sound = document.createElement("source");
            var soundBox = document.createElement("section");

            $($player).attr({

                'autoplay': 'true',

            });

            $($sound).attr({
                'type': 'audio/wav',
                'src': 'assets/sound/' + loc.play + '.wav',
            }).appendTo($player);


            $(soundBox).css({
                'width': '0',
                'height': '0',
                'overflow': 'hidden',
            }).append($player).appendTo("body");

            var $du = loc.dur * 1000;

            setTimeout(function() {
                $(soundBox).empty().remove(200);

            }, $du);

        });

    };

})(jQuery);