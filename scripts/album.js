var albumXx = {
  title: 'I See You',
  artist: 'The XX',
  label: 'Young Turks',
  year: '2017',
  albumArtUrl: 'assets/images/album_covers/01.jpg',
  songs: [
    { title: 'Dangerous', duration: '4:10' },
    { title: 'Say Something Loving', duration: '3:58' },
    { title: 'Lips', duration: '3:20' },
    { title: 'A Violent Noise', duration: '3:47' },
    { title: 'Performance', duration: '4:06' },
    { title: 'Replica', duration: '4:09' },
    { title: 'Brave For You', duration: '4:13' },
    { title: 'On Hold', duration: '4:10' },
    { title: 'I Dare You', duration: '3:53' },
    { title: 'Test Me', duration: '3:55' },
  ]
};

var albumKendrick = {
  title: 'Damn',
  artist: 'Kendrick Lamar',
  label: 'Top Dawg Entertainment',
  year: '2017',
  albumArtUrl: 'assets/images/album_covers/05.jpeg',
  songs: [
    { title: 'Blood', duration: '1:58' },
    { title: 'DNA', duration: '3:05' },
    { title: 'Yah', duration: '2:40' },
    { title: 'Element', duration: '3:28' },
    { title: 'Feel', duration: '3:34' },
    { title: 'Loyalty', duration: '3:47' },
    { title: 'Pride', duration: '4:35' },
    { title: 'Humble', duration: '2:57' },
    { title: 'Lust', duration: '5:07' },
    { title: 'Love', duration: '3:33' },
    { title: 'XXX', duration: '4:14' },
    { title: 'Fear', duration: '7:40' },
    { title: 'God', duration: '4:08' },
    { title: 'Duckworth', duration: '4:08' },
  ]
};

var createSongRow = function(songNumber, songName, songLength) {
  var template =
    '<tr class="album-view-song-item">'
  + ' <td class="song-item-number">' + songNumber + '</td>'
  + ' <td class="song-item-title">' + songName + '</td>'
  + ' <td class="song-item-duration">' + songLength + '</td>'
  + '</tr>'
  ;

  return template;
};

var setCurrentAlbum = function(album) {
  var albumTitle = document.getElementsByClassName('album-view-title')[0];
  var albumArtist = document.getElementsByClassName('album-view-artist')[0];
  var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
  var albumImage = document.getElementsByClassName('album-cover-art')[0];
  var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

  albumTitle.firstChild.nodeValue = album.title;
  albumArtist.firstChild.nodeValue = album.artist;
  albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
  albumImage.setAttribute('src', album.albumArtUrl);

  albumSongList.innerHTML = '';

  for (var i = 0; i < album.songs.length; i++) {
    albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
  }
};

window.onload = function() {
  setCurrentAlbum(albumXx);
};
