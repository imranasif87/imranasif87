
$(document).ready(function () {
    "use strict";

    var window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;


    $(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);

    //------- Active Nice Select --------//

    //$('select').niceSelect();


    $('.navbar-nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

    // $('.img-pop-up').magnificPopup({
    //     type: 'image',
    //     gallery: {
    //         enabled: true
    //     }
    // });

    // Search Toggle
    $("#search_input_box").hide();
    $("#search").on("click", function () {
        $("#search_input_box").slideToggle();
        $("#search_input").focus();
    });
    $("#close_search").on("click", function () {
        $('#search_input_box').slideUp(500);
    });

    /*==========================
        javaScript for sticky header
        ============================*/
    $(".sticky-header").sticky();

    // -------   Mail Send ajax

    $(document).ready(function () {
        var form = $('#booking'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message

        // form submit event
        form.on('submit', function (e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'booking.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function () {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function (data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.attr("style", "display: none !important");; // reset submit button text
                },
                error: function (e) {
                    console.log(e)
                }
            });
        });
    });


    /*----------------------------------------------------*/
    /*  Google map js
      /*----------------------------------------------------*/

    if ($("#mapBox").length) {
        var $lat = $("#mapBox").data("lat");
        var $lon = $("#mapBox").data("lon");
        var $zoom = $("#mapBox").data("zoom");
        var $marker = $("#mapBox").data("marker");
        var $info = $("#mapBox").data("info");
        var $markerLat = $("#mapBox").data("mlat");
        var $markerLon = $("#mapBox").data("mlon");
        var map = new GMaps({
            el: "#mapBox",
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
            styles: [
                {
                    featureType: "water",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#dcdfe6"
                        }
                    ]
                },
                {
                    featureType: "transit",
                    stylers: [
                        {
                            color: "#808080"
                        },
                        {
                            visibility: "off"
                        }
                    ]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [
                        {
                            visibility: "on"
                        },
                        {
                            color: "#dcdfe6"
                        }
                    ]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#ffffff"
                        }
                    ]
                },
                {
                    featureType: "road.local",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            visibility: "on"
                        },
                        {
                            color: "#ffffff"
                        },
                        {
                            weight: 1.8
                        }
                    ]
                },
                {
                    featureType: "road.local",
                    elementType: "geometry.stroke",
                    stylers: [
                        {
                            color: "#d7d7d7"
                        }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            visibility: "on"
                        },
                        {
                            color: "#ebebeb"
                        }
                    ]
                },
                {
                    featureType: "administrative",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#a7a7a7"
                        }
                    ]
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#ffffff"
                        }
                    ]
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#ffffff"
                        }
                    ]
                },
                {
                    featureType: "landscape",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            visibility: "on"
                        },
                        {
                            color: "#efefef"
                        }
                    ]
                },
                {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#696969"
                        }
                    ]
                },
                {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            visibility: "on"
                        },
                        {
                            color: "#737373"
                        }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "labels.icon",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry.stroke",
                    stylers: [
                        {
                            color: "#d6d6d6"
                        }
                    ]
                },
                {
                    featureType: "road",
                    elementType: "labels.icon",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                },
                {},
                {
                    featureType: "poi",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#dadada"
                        }
                    ]
                }
            ]
        });
    }

    /////////////////////////////////////////////////////////////////
    /// count down
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = new Date(Date.parse(new Date()) + 30 * 24 * 60 * 60 * 1000);
    initializeClock('clockdiv', deadline);
});