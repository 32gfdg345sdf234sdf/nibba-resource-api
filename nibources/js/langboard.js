window.addEventListener('DOMContentLoaded', function () {

    const setCookie = function (name, val, days, path, domain, secure) {
        if (navigator.cookieEnabled) { //czy ciasteczka są włączone
            const cookieName = encodeURIComponent(name);
            const cookieVal = encodeURIComponent(val);
            let cookieText = cookieName + "=" + cookieVal;

            if (typeof days === "number") {
                const data = new Date();
                data.setTime(data.getTime() + (days * 24*60*60*1000));
                cookieText += "; expires=" + data.toGMTString();
            }

            if (path) {
                cookieText += "; path=" + path;
            }
            if (domain) {
                cookieText += "; domain=" + domain;
            }
            if (secure) {
                cookieText += "; secure";
            }

            document.cookie = cookieText;
        }
    };

    const showCookie = function(name) {
        if (document.cookie !== "") {
            const cookies = document.cookie.split(/; */);

            for (let i=0; i<cookies.length; i++) {
                const cookieName = cookies[i].split("=")[0];
                const cookieVal = cookies[i].split("=")[1];
                if (cookieName === decodeURIComponent(name)) {
                    return decodeURIComponent(cookieVal);
                }
            }
        }
    };


    const themeToggles_en = document.querySelectorAll('#button__lang_en');
    const themeToggles_pl = document.querySelectorAll('#button__lang_pl');

    if(themeToggles_en) {
        [].forEach.call(themeToggles_en, function (themeToggle_en) {
            themeToggle_en.addEventListener('click', function (e) {
                if(document.documentElement.classList.contains('lang--pl')) {
                    document.documentElement.classList.remove('lang--pl');
                    document.documentElement.classList.add('lang--en');
                    setCookie("user__lang", "lang--en", 31, "/", document.domain);
                    window.location.reload(true);
                }
            }, false);
        });
    }

    if(themeToggles_pl) {
        [].forEach.call(themeToggles_pl, function (themeToggle_pl) {
            themeToggle_pl.addEventListener('click', function (e) {
                if(document.documentElement.classList.contains('lang--en')) {
                    document.documentElement.classList.remove('lang--en');
                    document.documentElement.classList.add('lang--pl');
                    setCookie("user__lang", "lang--pl", 31, "/", document.domain);
                    window.location.reload(true);
                }
            }, false);
        });
    }


},false);