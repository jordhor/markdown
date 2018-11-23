
$(document).ready(function () {

    $(".private").each(function (index) { $(this).html($(this).html() + '<sup data-toggle="tooltip" data-placement="top" title="Private"><i class="glyphicon glyphicon-lock"></i></sup>'); });
    $(".novedad").each(function (index) { $(this).html($(this).html() + '<i class="glyphicon glyphicon-asterisk novedad-asterisk" data-toggle="tooltip" data-placement="top" title="Novedad"></i>'); });
    $(".actualizado").each(function (index) { $(this).html($(this).html() + '<i class="glyphicon glyphicon-asterisk actualizado-asterisk" data-toggle="tooltip" data-placement="top" title="Actualización"></i>'); });
    $(".push-tip").each(function (index) { $(this).html($(this).html() + '<div class="push-notification" data-toggle="tooltip" data-placement="top" title="Push notification"><i class="glyphicon glyphicon-phone"></i><i class="glyphicon glyphicon-flash"></i></div>'); });

});

$(document).ready(function () {

    // All : añadimos el btn al título de la sección.
    $("#Especificacion").append($('<i id="btn-expand-collapse-all" class="btn-expand-collapse glyphicon glyphicon-chevron-up"></i>'));

    // Entity : añadimos el btn al <h3> nombre de la entidad.
    $(".entity").each(function (index) { $(this).find("h3").append($('<i class="btn-expand-collapse glyphicon glyphicon-chevron-up"></i>')); });

    // All -> Expand / Collapse
    $('#btn-expand-collapse-all').click(function (e) {
        if ($(this).hasClass("glyphicon-chevron-down")) {
            // expand
            $(this).removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
            $(".entity").each(function (index) { expandEntity($(this), null, "slow"); });
            $(".entities-index").show('slow');
        } else {
            //collapse
            $(this).removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
            $(".entity").each(function (index) { collapseEntity($(this), null, "slow"); });
            $(".entities-index").hide('slow');
        }
        return false;
    });

    // Entity -> Expand / Collapse
    $('.entity h3').click(function (e) {
        e.preventDefault();
        var entity = $(this).closest(".entity");
        if (entity.find(".entity-content").css("display") === "none") { expandEntity(entity, afterExpandEntity); } else { if ($(this).prop("tagName").toLowerCase() !== "h3") collapseEntity(entity, afterCollapseEntity); }
        return false;
    });
    $('.entity .btn-expand-collapse').click(function (e) {
        e.preventDefault();
        var entity = $(this).closest(".entity");
        if (entity.find(".entity-content").css("display") === "none") { expandEntity(entity, afterExpandEntity); } else { collapseEntity(entity, afterCollapseEntity); }
        return false;
    });
    var expandEntity = function (entity, after_effects_callback, effect_velocity) {
        if (typeof effect_velocity === 'undefined') effect_velocity = "fast";
        entity.find(".entity-content").show(effect_velocity, function () {
            entity.find(".goto-top").remove();
            entity.find(".goto-next").remove();
            entity.find("h3").append($('<i class="goto-top glyphicon glyphicon-hand-up"></i>').on("click", gotoTop));
            entity.find("h3").append($('<i class="goto-next glyphicon glyphicon-arrow-down"></i>').on("click", gotoNext));
            entity.find(".btn-expand-collapse").removeClass("glyphicon-chevron-up").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
            entity.removeClass("entity-expanded").removeClass("entity-collapsed").addClass("entity-expanded");
            if (after_effects_callback) after_effects_callback(entity);
        });
    }
    var collapseEntity = function (entity, after_effects_callback, effect_velocity) {
        if (typeof effect_velocity === 'undefined') effect_velocity = "fast";
        entity.find(".entity-content").hide(effect_velocity, function () {
            entity.find(".goto-top").remove();
            entity.find(".goto-next").remove();
            entity.find(".btn-expand-collapse").removeClass("glyphicon-chevron-up").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-down");
            entity.removeClass("entity-expanded").removeClass("entity-collapsed").addClass("entity-collapsed");
            if (after_effects_callback) after_effects_callback(entity);
        });
    }
    var afterExpandEntity = function (entity) {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        var top = Math.max(0, h / 2 - entity.height() / 2);
        if ($(document).scrollTop() + top < entity.offset().top) $('html,body').animate({ scrollTop: entity.offset().top - top }, 'slow');
    }
    var afterCollapseEntity = function (entity) {
        if (entity.offset().top - $(document).scrollTop() < 20) {
            $('html,body').animate({ scrollTop: entity.offset().top - 30 }, 'slow');
        }
    }

    var gotoTop = function (e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    };

    var gotoNext = function (e) {
        e.preventDefault();
        // $next = $(this).parent().nextAll().find('.goto-next').parent();
        $next = $(this).closest('.entity').nextAll().find('.goto-next');
        if ($next.length) $('html,body').animate({ scrollTop: $next.offset().top - 30 }, 'slow');
        return false;
    };

    $('[data-toggle="tooltip"]').tooltip();

    // goto-top
    $("h1, h2, h3, h4").each(function (index) {
        var id = $(this).attr("id");
        if (typeof id !== 'undefined' && id !== false) {
            $(this).append($('<i class="goto-top glyphicon glyphicon-hand-up"></i>'));
        }
    });

    // goto-next
    $("h3, h4").each(function (index) {
        var id = $(this).attr("id");
        if (typeof id !== 'undefined' && id !== false) {
            $(this).append($('<i class="goto-next glyphicon glyphicon-arrow-down"></i>'));
        }
    });

    $('.goto-top').on("click", gotoTop);
    $('.goto-next').on("click", gotoNext);

    $('a').click(function (e) {
        var a = $(this);
        var href = a.attr("href");
        if (href[0] == "#") {
            e.preventDefault();
            $('html,body').animate({ scrollTop: $(href).offset().top }, 'slow');
            return false;

        } else {
            if (typeof ImageZoom === 'function') {
                if (href.slice(0, "layouts/".length) == "layouts/" || href.slice(0, "docs/layouts/".length) == "docs/layouts/") {
                    e.preventDefault();
                }                
            }

            // if (typeof Modal === 'function') {
            //     var path = "docs/layouts/";
            //     if (href.slice(0, path.length) == path) {
            //     if (href.slice(0, path.length) == path) {
            //         e.preventDefault();
            //         var doc = document.documentElement;
            //         var w = Math.max(doc.clientWidth, window.innerWidth || 0)
            //         var h = Math.max(doc.clientHeight, window.innerHeight || 0)
            //         var dialog = $('<div class="dialog">');
            //         dialog.append($('<img src="' + href + '" alt="" style="max-height: ' + h * 0.96 + 'px;" >'));
            //         $('body').append(dialog);
            //         var modal = new Modal({ content: dialog[0], className: "zoom", closeButton: false });
            //         modal.open(function (context) {
            //             var win = context.modal;
            //             $(win).css({ "min-width": "100px" });
            //             $(win).find("img").one("click", function () { context.close(); return false; })
            //             $(context).on("closed", function () { dialog.remove(); });
            //         });
            //     }
            //     //return false;                
            // }
        }
    });


});

var flash = function (el, delay) { if (typeof delay === "undefined") { delay = 100; }; for (i = 0; i < 3; i++) { el.fadeOut(delay).fadeIn(delay); delay += 50; } }

