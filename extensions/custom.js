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
var meta = "";
var prevdescription = "empty";
var tmdbId;

// http://www.omdbapi.com/?apikey=d0a42b9c&t=Jumanji:%20Welcome%20to%20the%20Jungle&plot=full&year=2017
var omdbapi = 'http://www.omdbapi.com/?apikey=d0a42b9c&t="' + title + '&plot=full&year=2017';
var wikiapi = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + title;
var tmdbapi = 'https://api.themoviedb.org/3/search/movie?api_key=bd47870aff1eacea745ecf31ea71963d&language=en-US&query=' + title + '&page=1&include_adult=false&primary_release_year=' + year;

getJSON(omdbapi,
    function (err, data) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            if (description != prevdescription) {
                description = description + data.Plot;
                prevdescription = description;

                getJSON(tmdbapi,
                    function (err, data) {
                        if (err !== null) {
                            alert('Something went wrong: ' + err);
                        } else {
                            description = description + " " + data.results[0].overview;
                            tmdbId = data.results[0].id;

                            getJSON(wikiapi,
                                function (err, data) {
                                    if (err !== null) {
                                        alert('Something went wrong: ' + err);
                                    } else {
                                        var keyVar = Object.keys(data.query.pages)[0];
                                        console.log(typeof (keyVar));
                                        description = description + " " + data.query.pages[keyVar].extract;

                                        opts = {
                                            "q": description,
                                            "target": 'ro'
                                        };
                                        fetch('https://translation.googleapis.com/language/translate/v2?key=AIzaSyDNXESHdS0yAvXPYuL1mbPE3DWX82frPg0', {
                                            method: 'post',
                                            body: JSON.stringify(opts)
                                        }).then(function(response) {
                                            return response.json();
                                        }).then(function(data) {
                                            finalmeta = title + " online. " + title + " subtitrat. " + title + " online subtitrat. " + title + " rosub";
                                            remainwords = 316 - finalmeta.length;
                                            meta = data.data.translations[0].translatedText.substring(0,remainwords) + "... " + finalmeta;
                                            description = "(" + title + "). " + data.data.translations[0].translatedText;
                                            description = description + "\n" + title + " online.";
                                            description = description + " " + title + " subtitrat.";
                                            description = description + " " + title + " rosub.";
                                            description = description + " " + title + " online subtitrat.\n";
                                            description = description + "<h6><a href='http://serialefilmeonline.org'>serialefilmeonline.org</a></h6>";
                                            console.log(description);
                                            console.log(meta);
                                            alert('intra');
                                        });


                                    }
                                });
                        }
                    });

            }
        }
    });

console.log(data);
