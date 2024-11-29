/* SmtpJS.com - v3.0.0 */
var Email = {
    send: function (a) {
        return new Promise(function (n, e) {
            a.nocache = Math.floor(1e6 * Math.random() + 1);
            a.Action = "Send";
            var t = JSON.stringify(a);
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
                n(e);
            });
        });
    },
    ajaxPost: function (e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        a.onload = function () {
            var e = a.responseText;
            if (t) t(e);
        };
        a.send(n);
    },
    createCORSRequest: function (e, n) {
        var t = new XMLHttpRequest();
        if ("withCredentials" in t) {
            t.open(e, n, true);
        } else if (typeof XDomainRequest !== "undefined") {
            t = new XDomainRequest();
            t.open(e, n);
        } else {
            t = null;
        }
        return t;
    }
};
