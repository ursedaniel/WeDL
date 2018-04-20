(function () {
    return function (param) {
        var data = [];
        var el = document.createElement('div');
        el.innerHTML = param.text;
        el.style.display = 'none';
        var title = el.querySelectorAll('li.detay-aciklama-sol span.movie-item');
        if (title[title.length - 1].innerText != null) {
            title = title[title.length - 1].innerText;
        } else {
            title = 'Fara titlu';
        }
        var iframe = el.querySelectorAll('iframe');
        for (var i = 0; i < iframe.length; i++) {
            data.push({movie: title, url: iframe[i].src})
        }
        return data;
    };
}());