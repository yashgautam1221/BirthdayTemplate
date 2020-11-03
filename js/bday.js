AOS.init();

// window.onload(time);

// function time() {
//     setTimeout(fireworks(), 3000);
// }


setTimeout(function() {
    window.onLoad(fireworks());
}, 2500)



function fireworks() {
    var duration = 20 * 80;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 40, spread: 360, ticks: 50, zIndex: 1 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 300 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        }));
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        }));
    }, 250);
}


/*==========
  Split words and wrap them into span
 =========*/
function wordSplit() {
    $('.word').each(function() {
        var characters = $(this).text().split('');

        $(this).empty();

        $.each(characters, function(index, char) {
            $('.word').append('<span>' + char + '</span>');
        });
    });
}

/*==========
  Count the number of span and apply them in a loop
  =========*/
function countChars() {
    var countChar = $('.word span').length;
    for (var count = 1; count <= countChar; count++) {
        $('.word span:nth-child(' + count + ')').css({ 'animation-delay': 1 + count / 10 + 's' });
    }
}

$(document).ready(function() {
    wordSplit();
    countChars();
});

$('#onDemandText').on('blur', function() {
    var text = "hello";
    $('.word').text(text);
    wordSplit();
    countChars();
});


/*==========
Split words and wrap them into span
=========*/
function wordSplit2() {
    $('.word2').each(function() {
        var characters = $(this).text().split('');

        $(this).empty();

        $.each(characters, function(index, char) {
            $('.word2').append('<span>' + char + '</span>');
        });
    });
}

/*==========
  Count the number of span and apply them in a loop
  =========*/
function countChars2() {
    var countChar = $('.word2 span').length;
    for (var count = 1; count <= countChar; count++) {
        $('.word2 span:nth-child(' + count + ')').css({ 'animation-delay': 1 + count / 10 + 's' });
    }
}

$(document).ready(function() {
    wordSplit2();
    countChars2();
});

$('#onDemandText').on('blur', function() {
    var text = "hello";
    $('.word2').text(text);
    wordSplit2();
    countChars2();
});


function wordSplit3() {
    $('.word3').each(function() {
        var characters = $(this).text().split('');

        $(this).empty();

        $.each(characters, function(index, char) {
            var temp = 1100 + (index * 100);
            if (index % 2 === 0) {
                $('.word3').append('<span  data-aos="zoom-in" data-aos-delay="' + temp + '" data-aos-duration="1200">' + char + '</span>');
            } else {
                $('.word3').append('<span  data-aos="zoom-out"  data-aos-delay="' + temp + '" data-aos-duration="1200">' + char + '</span>');
            }
        });
    });
}

/*==========
  Count the number of span and apply them in a loop
  =========*/
function countChars3() {
    var countChar = $('.word3 span').length;
    for (var count = 1; count <= countChar; count++) {
        $('.word3 span:nth-child(' + count + ')').css({ 'animation-delay': 3 + count / 10 + 's' });
    }
}

$(document).ready(function() {
    wordSplit3();
    countChars3();
});

$('#onDemandText').on('blur', function() {
    var text = "hello";
    $('.word3').text(text);
    wordSplit3();
    countChars3();
});