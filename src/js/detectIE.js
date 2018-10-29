{
    var detectIE = function() {
        var ua = window.navigator.userAgent;
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

        // Edge 12 (Spartan)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

        // Edge 13
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            alert('您正使用 IE 瀏覽器訪問本站，本站使用多項 modern CSS 及 JavaScript ES6 技術建置，並不完全支援 IE 瀏覽器，請使用 Chrome、FireFox 或 Safari 瀏覽器以獲得最佳瀏覽體驗！');
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            alert('您正使用 IE 瀏覽器訪問本站，本站使用多項 modern CSS 及 JavaScript ES6 技術建置，並不完全支援 IE 瀏覽器，請使用 Chrome、FireFox 或 Safari 瀏覽器以獲得最佳瀏覽體驗！');
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            alert('您正使用 Edge 瀏覽器訪問本站，本站使用多項 modern CSS 技術建置，並不完全支援 Edge 瀏覽器，請使用 Chrome、FireFox 或 Safari 瀏覽器以獲得最佳瀏覽體驗！');
        }
    }
    detectIE();
}