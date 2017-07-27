var collectionItemTemplate =
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

window.onload = function() {

  var collectionContainer = document.getElementsByClassName('album-covers')[0];

  collectionContainer.innerHTML = '';

  for (var i = 0; i < 12; i++) {
    collectionContainer.innerHTML += collectionItemTemplate;
  }
}
