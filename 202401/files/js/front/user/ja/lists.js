/* ---------------------------------------------
*   Load More
--------------------------------------------- */
function setLoadingMore(showItem) {
    $('.js-loading-item:hidden').addClass('is-nowatch');

    const $targetArea = $('.js-loading-container');
    const $targetElement = $targetArea.find('.js-loading-item:not(.is-nowatch)');
    const elementNumber = $targetElement.length;
    const $trigger = $('.js-loading-trigger');
    const $triggerArea = $trigger.parent();
    if (!showItem) {
        showItem = 8;
    }

    if (elementNumber <= showItem) {
        $triggerArea.hide();
    } else {
        $triggerArea.show();
        $targetElement.not(':lt(' + showItem + ')').addClass('is-hidden');
        $trigger.off('click').on('click', function () {
            const $hiddenItem = $targetArea.find('.js-loading-item.is-hidden');
            const hiddenNumber = $hiddenItem.length;

            if (hiddenNumber <= showItem) {
                $hiddenItem.removeClass('is-hidden');
                $triggerArea.hide();
            } else {
                $targetArea
                    .find('.js-loading-item.is-hidden:lt(' + showItem + ')')
                    .removeClass('is-hidden');
            }
        });
    }
}

/* ---------------------------------------------
*   Mixitup
--------------------------------------------- */
$(function () {
    $.getJSON(
        // '../btnlist.json',
        'https://rcms.g.kuroco.app/rcms-api/1/ourclients/category?_lang=' + document.documentElement.lang,
        function (tagsData) {
            const tagsList = tagsData.list;

            for (let i = 0; i < tagsList.length; i++) {
                const tagTtl = tagsList[i].category_nm;
                const tagId = tagsList[i].topics_category_id;

                // DOMの生成
                const tagHtml =
                    '<li class="c-list-tags__item">' +
                    '<button type="button" class="c-list-tags__link" data-toggle=".genre-' +
                    tagId +
                    '">' +
                    tagTtl +
                    '</button>' +
                    '</li>';

                $('.js-taglist').append(tagHtml);
            }
        }
    );

    // Jsonデータ読み込み
    $.getJSON(
        // '../ourclients.json',
        'https://rcms.g.kuroco.app/rcms-api/1/ourclients?_lang=' + document.documentElement.lang,
        function (companyData) {
            const companyList = companyData.list;
            for (let i = 0; i < companyList.length; i++) {
                const companyTtl = companyList[i].subject;
                const companyUrl = companyList[i].link.url;
                const companyThum = companyList[i].thumbnail.url;
                const companyTag1 = companyList[i].contents_type_nm;
                const companyTag2 = companyList[i].contents_type_nm_2;
                const companyTag3 = companyList[i].contents_type_nm_3;
                const companyGenre1 = companyList[i].contents_type;
                const companyGenre2 = companyList[i].contents_type_2;
                const companyGenre3 = companyList[i].contents_type_3;
                const companyUseLink = companyList[i].use_link;
                let listItem;
                let listCategory;

                // カテゴリが1つだけの時
                if (companyTag2 === undefined) {
                    listItem =
                        '<ul class="c-card__tags">' +
                        '<li class="c-card__tags-item">' +
                        '<p class="c-card__tags-link">' +
                        companyTag1 +
                        '</p>' +
                        '</li>' +
                        '</ul>';
                    listCategory =
                        '<li class="c-card-list__item mix js-loading-item genre-' +
                        companyGenre1 +
                        '">';

                    // カテゴリが2つあるの時
                } else if (companyTag3 === undefined) {
                    listItem =
                        '<ul class="c-card__tags">' +
                        '<li class="c-card__tags-item">' +
                        '<p class="c-card__tags-link">' +
                        companyTag1 +
                        '</p>' +
                        '</li>' +
                        '<li class="c-card__tags-item">' +
                        '<p class="c-card__tags-link">' +
                        companyTag2 +
                        '</p>' +
                        '</li>' +
                        '</ul>';
                    listCategory =
                        '<li class="c-card-list__item mix js-loading-item genre-' +
                        companyGenre1 +
                        ' genre-' +
                        companyGenre2 +
                        '">';
                    // カテゴリが3つある時
                } else {
                    listItem =
                        '<ul class="c-card__tags">' +
                        '<li class="c-card__tags-item">' +
                        '<p class="c-card__tags-link">' +
                        companyTag1 +
                        '</p>' +
                        '</li>' +
                        '<li class="c-card__tags-item">' +
                        '<p class="c-card__tags-link">' +
                        companyTag2 +
                        '</p>' +
                        '</li>' +
                        '<li class="c-card__tags-item">' +
                        '<p class="c-card__tags-link">' +
                        companyTag3 +
                        '</p>' +
                        '</li>' +
                        '</ul>';
                    listCategory =
                        '<li class="c-card-list__item mix js-loading-item genre-' +
                        companyGenre1 +
                        ' genre-' +
                        companyGenre2 +
                        ' genre-' +
                        companyGenre3 +
                        '">';
                }

                let html = '';
                if (document.documentElement.lang === 'ja') {
                // DOMの生成
                    html =
                    listCategory +
                    '<section class="c-card">' +
                    (companyUseLink.length > 0 ? '<a href="'+companyUrl+'" class="c-card__link" target="blank"></a>' : '') +
                    '<div class="c-card__img" style="background-image: url(' +
                    companyThum +
                    '?width=722' +
                    ')"></div>' +
                    '<div class="c-card__content">' +
                    '<h3 class="c-card__ttl">' +
                    companyTtl +
                    ' 様</h3>' +
                    listItem +
                    '<div class="c-btn-txt">' +
                    (companyUseLink.length > 0 ? '<a href="'+companyUrl+'" class="c-btn-txt__link">サイトを見る</a>' : '') +
                    '</div>' +
                    '</div>' +
                    '</section>' +
                    '</li>';
                } else {
                // DOMの生成
                    html =
                    listCategory +
                    '<section class="c-card">' +
                    (companyUseLink.length > 0 ? '<a href="'+companyUrl+'" class="c-card__link" target="blank"></a>' : '') +
                    '<div class="c-card__img" style="background-image: url(' +
                    companyThum +
                    '?width=722' +
                    ')"></div>' +
                    '<div class="c-card__content">' +
                    '<h3 class="c-card__ttl">' +
                    companyTtl +
                    '</h3>' +
                    listItem +
                    '<div class="c-btn-txt">' +
                    (companyUseLink.length > 0 ? '<a href="'+companyUrl+'" class="c-btn-txt__link">View site</a>' : '') +
                    '</div>' +
                    '</div>' +
                    '</section>' +
                    '</li>';
                }

                $('.js-json').append(html);
            }

            mixitupSet();
            setLoadingMore(16);
        }
    );

    // mixitup（絞り込み）
    function mixitupSet() {
        const config = {
            multifilter: {
                enable: true
            },
            animation: {
                enable: false
            },
            callbacks: {
                onMixStart (state, futureState) {
                    $('.js-loading-item').removeClass('is-hidden is-nowatch');
                },
                onMixEnd (state, futureState) {
                    setLoadingMore(16);
                }
            }
        };
        const mixer = mixitup('.js-json', config);
    }
});
