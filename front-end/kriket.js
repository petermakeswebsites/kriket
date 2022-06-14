"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function kriket(_a) {
    var path = _a.path, custom = _a.custom;
    var open = false;
    function spring(e) {
        if (open)
            return;
        open = true;
        var error = {
            colno: e.colno,
            error: e.error,
            filename: e.filename,
            lineno: e.lineno,
            message: e.message
        };
        var template = "<div style=\"position:absolute;background-color:#0005;left:0px;top:0px;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;\">\n            <div style=\"background-color:white\">\n                <h2>Uh oh!</h2>\n                <p>Looks like we've encountered an error. It would be really helpful to write down some steps you took before this happened.</p>\n                <form id=\"kriketForm\">\n                    <textarea id=\"kriketMessage\" style=\"min-height: 200px\"></textarea>\n                    <button id=\"kriketSubmit\" type=\"submit\">Submit</button>\n                </form>\n            </div>\n        </div>        \n        ";
        var d = document.createElement('div');
        d.innerHTML = template;
        var element = d.firstChild;
        document.body.appendChild(element);
        var form = document.getElementById("kriketForm");
        form.addEventListener("submit", function (e) {
            var _a;
            e.preventDefault();
            var newBug = {
                error: error,
                domain: window.location.hostname
            };
            var message = (_a = document.getElementById("kriketMessage")) === null || _a === void 0 ? void 0 : _a.textContent;
            if (message)
                newBug.message = message;
            if (custom)
                newBug = __assign(__assign({}, newBug), { custom: custom() });
            document.getElementById("kriketSubmit").disabled = true;
            fetch(path, {
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                method: "post",
                body: JSON.stringify(newBug)
            }).then(function () {
                form.innerHTML = "<p>Thank you for submitting. Please close this webpage or app and restart it.</p>";
            })["catch"](function (e) {
                console.error(e);
                form.innerHTML = "<p>Well, this is embarassing. There was an error submitting the error message.</p>";
            });
        });
    }
    window.addEventListener("error", spring);
}
// @ts-ignore
window.kriket = kriket;
