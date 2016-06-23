/**
 * Created by mac on 16/6/22.
 */
var i=0;
(function () {

    function init() {

        $.get("question.json").done(function (data) {
            new question(data);
        });
    }

    init();
})();