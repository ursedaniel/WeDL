// alert('test');
var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

var iframe = document.querySelectorAll('#datamovie iframe');
var title = document.querySelector('.data h1').innerHTML;
var quality = document.querySelector('.calidad2').innerHTML;
var subtitle = document.querySelector('.icon-pencil2');
var year = document.querySelector('[itemprop=contentRating]').nextElementSibling.querySelector('a').innerHTML;
var data;
// console.log(iframe);
var listIframe = [];
for (var i = 0; i < iframe.length; i++) {
    listIframe.push(iframe[i].src);
}
data = {
    movie: title,
    quality: quality,
    year: year,
    subtitle: subtitle.nextElementSibling.innerHTML,
    urls: listIframe
};

var description = "";

// http://www.omdbapi.com/?apikey=d0a42b9c&t=Jumanji:%20Welcome%20to%20the%20Jungle&plot=full&year=2017

getJSON('http://www.omdbapi.com/?apikey=d0a42b9c&t=Jumanji:%20Welcome%20to%20the%20Jungle&plot=full&year=2017',
    function (err, data) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            description = description + data.Plot;
            console.log(description);
        }
    });

console.log(data);