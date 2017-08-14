var buildCollectionItemTemplate = function() {
    var template =
      '<div class="collection-album-container column fourth">'
    + '    <img src="assets/images/album_covers/01.jpg"/>'
    + '    <div class="collection-album-info caption">'
    + '        <p>'
    + '            <a class="album-name" href="album.html">I See You</a>'
    + '            <br/>'
    + '            <a class="album-artist" href="album.html">The xx</a>'
    + '            <br/>'
    + '        </p>'
    + '    </div>'
    + '</div>'
    ;

    return $(template);
};

$(window).load(function() {

    var $collectionContainer = $(".album-covers");
    $collectionContainer.empty();

    for (var i = 0; i < 12; i++) {
    var $newThumbnail = buildCollectionItemTemplate();
    $collectionContainer.append($newThumbnail);
    }
});
