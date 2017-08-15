var createSongRow = function(songNumber, songName, songLength) {
    var template =
    '<tr class="album-view-song-item">'
    + ' <td class="song-item-number" data-song-number="' + songNumber + '">' +songNumber + '</td>'
    + ' <td class="song-item-title">' + songName + '</td>'
    + ' <td class="song-item-duration">' + songLength + '</td>'
    + '</tr>'
    ;

    var $row = $(template);

    var clickHandler = function() {
        var songNumber = parseInt($(this).attr('data-song-number'));

        if (currentlyPlayingSongNumber !== null) {
            var currentlyPlayingBox = $('.song-item-number[data-song-number="' + currentlyPlayingSongNumber + '"]');
            currentlyPlayingBox.html(currentlyPlayingSongNumber);
        }
        if (currentlyPlayingSongNumber !== songNumber) {
            $(this).html(pauseButtonTemplate);
            currentlyPlayingSongNumber = songNumber;
            currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
            updatePlayerBarSong();
        } else if (currentlyPlayingSongNumber === songNumber) {
            $(this).html(playButtonTemplate);
            $('.main-controls .play-pause').html(playerBarPlayButton);
            currentlyPlayingSongNumber = null;
            currentSongFromAlbum = null;
        }
    };

    var onHover = function(event) {
        var songNumberBox = $(this).find('.song-item-number');
        var songNumber = parseInt(songNumberBox.attr('data-song-number'));

        if (songNumber !== currentlyPlayingSongNumber) {
            songNumberBox.html(playButtonTemplate);
        }
    };

    var offHover = function(event) {
        var songNumberBox = $(this).find('.song-item-number');
        var songNumber = parseInt(songNumberBox.attr('data-song-number'));

        if (songNumber !== currentlyPlayingSongNumber) {
            songNumberBox.html(songNumber);
        }
    };

    $row.find('.song-item-number').click(clickHandler);
    $row.hover(onHover, offHover);

    return $row;
    // console.log("songNumber type is " + typeof songNumber + "\n and currentlyPlayingSongNumber type is " + typeof currentlyPlayingSongNumber);
};

var setCurrentAlbum = function(album) {
    currentAlbum = album;
    var $albumTitle = $('.album-view-title');
    var $albumArtist = $('.album-view-artist');
    var $albumReleaseInfo = $('.album-view-release-info');
    var $albumImage = $('.album-cover-art');
    var $albumSongList = $('.album-view-song-list');

    $albumTitle.text(album.title);
    $albumArtist.text(album.artist);
    $albumReleaseInfo.text(album.year + ' ' + album.label);
    $albumImage.attr('src', album.albumArtUrl);
    $albumSongList.empty();

    for (var i = 0; i < album.songs.length; i++) {
    var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    $albumSongList.append($newRow);
    }
}

var trackIndex = function(album, song) {
    return album.songs.indexOf(song);
};

var nextSong = function() {
    var currentSongNum = trackIndex(currentAlbum, currentSongFromAlbum);
    currentSongNum++;

    if (currentSongNum >= currentAlbum.songs.length) {
        currentSongNum = 0;
    }

    var lastSongNum = currentlyPlayingSongNumber;

    currentlyPlayingSongNumber = currentSongNum + 1;
    currentSongFromAlbum = currentAlbum.songs[currentSongNum];

    updatePlayerBarSong();
    var $nextSongInfo = $('.song-item-number[data-song-number="' + currentlyPlayingSongNumber + '"]');
    var $lastSongInfo = $('.song-item-number[data-song-number="' + lastSongNum + '"]');

    $nextSongInfo.html(pauseButtonTemplate);
    $lastSongInfo.html(lastSongNum);
};

var previousSong = function() {
    var currentSongNum = trackIndex(currentAlbum, currentSongFromAlbum);
    currentSongNum--;

    if (currentSongNum < 0) {
        currentSongNum = currentAlbum.songs.length - 1;
    }

    var lastSongNum = currentlyPlayingSongNumber;

    currentlyPlayingSongNumber = currentSongNum + 1;
    currentSongFromAlbum = currentAlbum.songs[currentSongNum];

    updatePlayerBarSong();

    $('.main-controls .play-pause').html(playerBarPauseButton);

    var $prevSongInfo = $('.song-item-number[data-song-number="' + currentlyPlayingSongNumber + '"]');
    var $lastSongInfo = $('.song-item-number[data-song-number="' + lastSongNum + '"]');

    $prevSongInfo.html(pauseButtonTemplate);
    $lastSongInfo.html(lastSongNum);
};

var updatePlayerBarSong = function() {
    $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.title + ' - ' + currentAlbum.artist);
    $('.currently-playing .song-name').text(currentSongFromAlbum.title);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.main-controls .play-pause').html(playerBarPauseButton);
};

var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
var playerBarPlayButton = '<span class="ion-play"></span>';
var playerBarPauseButton = '<span class="ion-pause"></span>';

var currentAlbum = null;
var currentlyPlayingSongNumber = null;
var currentSongFromAlbum = null;

var $previousButton = $('.main-controls .previous');
var $nextButton = $('.main-controls .next');

$(document).ready(function() {
    setCurrentAlbum(albumXx);
    $previousButton.click(previousSong);
    $nextButton.click(nextSong);
});
