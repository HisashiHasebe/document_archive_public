/* ==========================================================
[ 目次 ]

<body>クラス設定
スムース スクロール
Header Float
objectFitImages
SP Menu
modal

========================================================== */

/* ---------------------------------------------
*   <body>クラス設定
--------------------------------------------- */
/**
 * <body>要素に、ユーザーのOS・デバイスとブラウザ等に関数情報をクラスとして付与する
 * OS・デバイス: ios, iphone, ipad, android, androidphone, androidtablet, windows, mac
 * ブラウザ: ie, edge, chrome, firefox, safari
 */
$(function () {
    'use strict';

    $('body').addClass(function () {
        var bodyClasses = '';

        // プラットフォーム判定
        if (is.ios()) {
            bodyClasses += ' ios';

            if (is.iphone()) {
                bodyClasses += ' iphone';
            } else if (is.ipad()) {
                bodyClasses += ' ipad';
            }
        } else if (
            window.navigator.userAgent.toLowerCase().indexOf('macintosh') >
                -1 &&
            'ontouchend' in document
        ) {
            bodyClasses += ' ipad';
        } else if (is.android()) {
            bodyClasses += ' android';

            if (is.androidPhone()) {
                bodyClasses += ' androidphone';
            } else if (is.androidTablet()) {
                bodyClasses += ' androidtablet';
            }
        } else if (is.windows()) {
            bodyClasses += ' windows';
        } else if (is.mac()) {
            bodyClasses += ' mac';
        }

        // ブラウザ判定
        if (is.ie()) {
            bodyClasses += ' ie';

            if (is.ie(10)) {
                bodyClasses += ' ie10';
            } else if (is.ie(11)) {
                bodyClasses += ' ie11';
            }
        } else if (
            is.edge() ||
            window.navigator.userAgent.toLowerCase().indexOf('edg') > -1
        ) {
            bodyClasses += ' edge';
        } else if (is.chrome()) {
            bodyClasses += ' chrome';
        } else if (is.firefox()) {
            bodyClasses += ' firefox';
        } else if (is.safari()) {
            bodyClasses += ' safari';
        }

        return bodyClasses;
    });
});

/* ---------------------------------------------
*   スムース スクロール
--------------------------------------------- */
$(function () {
    'use strict';

    $('a[href^="#"]').on('click.smoothScroll', function () {
        var href = $(this).attr('href');
        var $target;

        if (is.ie(9) || is.ie(10)) {
            $target = $(href === '#' ? 'body' : href);
        } else {
            $target = $(href === '#' ? 'html' : href);
        }

        var offset;

        if ($(window).width() <= 750) {
            offset = -70;
        } else {
            offset = 0;
        }

        // スクロール位置をずらす場合は、
        // ここで条件分岐等を行う

        $target.velocity('scroll', {
            duration: 400,
            easing: 'swing',
            offset: offset
        });

        return false;
    });
});

/* ---------------------------------------------
*   Header Float
--------------------------------------------- */
$(window).on('load scroll', function () {
    var $scrollTarget = $('.header');
    var threshold = 50;

    if ($(window).scrollTop() > threshold) {
        $scrollTarget.addClass('is-scroll');
    } else {
        $scrollTarget.removeClass('is-scroll');
    }
});

/* ---------------------------------------------
*   objectFitImages
--------------------------------------------- */
objectFitImages('.js-object-fit');

/* ---------------------------------------------
*   SP Menu
--------------------------------------------- */
$(function () {
    'use strict';

    var $trigger = $('.js-open-menu-trigger');
    var $target = $('.js-open-menu-target');
    var $body = $('body');
    var currentClass = 'is-active'; //背景固定に使用
    var $links = $('.global-nav__link');
    var flag = false; //背景固定に使用
    var scrollPosition; //背景固定に使用

    $trigger.on('click.menu', function () {
        if (flag == false) {
            //背景固定に必要な分岐
            scrollPosition = $(window).scrollTop(); //背景固定に必要な処理
            $trigger.addClass(currentClass);
            $body.addClass(currentClass).css({ top: -scrollPosition }); //背景固定に必要な処理
            $target.fadeIn();

            flag = true; //背景固定に必要な処理
        } else {
            $body.removeClass(currentClass).css({ top: 0 }); //背景固定に必要な処理
            $(window).scrollTop(scrollPosition); //背景固定に必要な処理
            $trigger.removeClass(currentClass);
            $target.fadeOut();

            flag = false; //背景固定に必要な処理
        }
    });

    $links.on('click', function () {
        $body.removeClass(currentClass).css({ top: 0 }); //背景固定に必要な処理
        $(window).scrollTop(scrollPosition); //背景固定に必要な処理
        $trigger.removeClass(currentClass);
        $target.fadeOut();

        flag = false; //背景固定に必要な処理
    });
});

/* ---------------------------------------------
*   modal
--------------------------------------------- */
$(function () {
    'use strict';
    var $modalItem = $('.js-mfp-inline');

    $modalItem.magnificPopup({
        type: 'inline'
    });
});
