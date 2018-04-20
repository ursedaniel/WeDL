var movie = {
    "id":1,
    "tmdbId": 399055,
    "title": "The Shape of Water",
    "quality": "HD",
    "subtitle": "romana",
    "metaDescription": "Într-o instalație de cercetare extrem de secrete în anii 1960, un portar singuratic formează o relație unică cu o creatură amfibie care este ținută în captivitate. O poveste de altă natură, pusă pe ... The Shape of Water online. The Shape of Water subtitrat. The Shape of Water online subtitrat. The Shape of Water rosub",
    "description": "(The Shape of Water). Într-o instalație de cercetare extrem de secrete în anii 1960, un portar singuratic formează o relație unică cu o creatură amfibie care este ținută în captivitate. O poveste de altă natură, pusă pe fundalul războiului rece din America în jurul anului 1962, în care un slujitor mute care lucrează într-un laborator se îndrăgostește de un om amfibiu fiind ținut captiv acolo și creează un plan care să-l ajute să scape. Forma apei este un film de dramă fantastică americană romantică din 2017, regizat de Guillermo del Toro și scris de del Toro și Vanessa Taylor. Este vorba de Sally Hawkins, Michael Shannon, Richard Jenkins, Doug Jones, Michael Stuhlbarg și Octavia Spencer. Situat în Baltimore în 1962, povestea urmează unui custode mut la un laborator guvernamental de înaltă securitate care se îndrăgostește de o creatură amfibiană umanoasă capturată. Forma apei a fost prezentată în cadrul principalei secțiuni de concurs a celui de-al 74-lea Festival de Film Internațional de la Veneția, unde a avut premiera la 31 august 2017 și a fost premiat cu Leul de Aur pentru cel mai bun film din competiție. De asemenea, a fost prezentat la Festivalul Internațional de Film de la Toronto din 2017. A început o lansare limitată în două teatre din New York City pe 1 decembrie 2017, înainte de a se extinde după 8 decembrie 2017, și a încasat 193 milioane de dolari în întreaga lume. O noutate a lui Del Toro și a lui Daniel Kraus a fost publicată pe 6 martie 2018. Forma apei a primit o apreciere critică pentru performanțele, scenariul, direcția, imaginile, designul de producție și scorurile muzicale, numeroși critici numind cea mai bună lucrare a lui del Toro de la Labirintul lui Pan; Institutul American de Film a selectat-o ​​ca fiind unul dintre primele 10 filme ale anului. Filmul a primit numeroase premii și nominalizări, printre care cele 13 nominalizări la Premiile Academiei 90, unde a câștigat cel mai bun design de producție, cel mai bun scenariu original, cel mai bun regizor și cel mai bun film. A fost nominalizat pentru șapte premii la cele 75 de premii Globul de Aur, câștigând pentru cel mai bun regizor și cel mai bun scor original. La cea de-a 71-a ediție a Academiei Britanice de Film, a primit doisprezece nominalizări și a câștigat trei premii, inclusiv cel mai bun regizor. Filmul a câștigat, de asemenea, paisprezece nominalizări la cele 23 de premii ale criticilor și a câștigat patru premii, inclusiv cea mai bună imagine și cel mai bun regizor. The Shape of Water online. The Shape of Water subtitrat. The Shape of Water rosub. The Shape of Water online subtitrat. <h6><a href='http://serialefilmeonline.org'>serialefilmeonline.org</a></h6>",
    "posted": 0,
    "urls": [
        {"id":1, "url":"https://vidoza.net/embed-qebjiwu538w1.html"},
        {"id":2, "url":"https://hqq.tv/player/embed_player.php?vid=240262274240231238257233266232271271194271217261258&autoplay=no"},
        {"id":3, "url":"https://www.rapidvideo.com/e/FPVHT76EFW"},
        {"id":4, "url":"https://openload.co/embed/1bpymJ3sdCk/%5Btt5580390%5D_The_Shape_of_Water_%282017%29_%5Borg%5D.mp4"}
    ],
    "keywords": [
        {"id":1, "keyword":"The Shape of Water"},
        {"id":2, "keyword":"The Shape of Water online"},
        {"id":3, "keyword":"The Shape of Water subtitrat"},
        {"id":4, "keyword":"The Shape of Water rosub"},
        {"id":5, "keyword":"The Shape of Water online subtitrat"}
    ]
};

console.log(movie);

document.getElementById('content').innerHTML = movie.description;
document.getElementById('snippet-editor-meta-description').innerHTML = movie.metaDescription;
document.getElementById('tr_quick_links_content').style.display = "block";
//document.getElementById('yoast_wpseo_focuskw_text_input').innerHTML = movie.keywords[0].keyword;
var finalquery = "";
for(var i = 0 ; i < movie.urls.length; i++) {
    finalquery = finalquery + "\n" + movie.urls[i].url;
}
document.querySelector('.lgtbxbd textarea').innerHTML = movie.subtitle + "\n" + movie.quality + finalquery;

//document.querySelector('.wpseo_tab wpseo_keyword_tab .active a').setAttribute("data-keyword", movie.keywords[0].keyword);