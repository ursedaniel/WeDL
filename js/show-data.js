(function () {
    'use strict';

    chrome.storage.local.get('extensions', function (result) {
        showDataFromExtensions(result.extensions);
    });

    chrome.storage.onChanged.addListener(function (changes, namespace) {
        showDataFromExtensions(changes['extensions'].newValue);
    });

    // function showDataFromExtensions(extensions) {
    //     var domExtensions = document.getElementById('wedi-data');
    //     if (extensions)
    //         extensions.forEach(function (extension) {
    //             var domEl = document.getElementById('wedi-data-' + extension.key);
    //             if (domEl) {
    //                 domEl.innerHTML = '<span><i class="fa ' + extension.icon + '" aria-hidden="true"></i> ' + extension.name + '</span>' +
    //                     '<ul class="wedi-data-container"></ul>';
    //             } else {
    //                 var item = '<div class="item" id="wedi-data-' + extension.key + '">' +
    //                     '<span><i class="fa ' + extension.icon + '" aria-hidden="true"></i> ' + extension.name + '</span>' +
    //                     '<ul class="wedi-data-container"></ul>' +
    //                     '</div>';
    //                 domExtensions.innerHTML += item;
    //             }
    //             domEl = document.getElementById('wedi-data-' + extension.key);
    //             var container = domEl.querySelector('.wedi-data-container');
    //             if (extension.data)
    //                 extension.data.forEach(function (data) {
    //                     container.innerHTML = '<li></li>' + container.innerHTML;
    //                     var row = container.querySelectorAll('li')[0];
    //                     Object.keys(data).forEach(function (key) {
    //                         row.innerHTML += '<div title="' + data[key] + '">' + data[key] + '</div>';
    //                     });
    //                 });
    //         });
    // }

    function showDataFromExtensions(extensions) {
        var movie;
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'resources/movie.json', true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                movie = JSON.parse(xobj.responseText);
                console.log(movie);
            }
        };
        xobj.send(null);
    }
}());