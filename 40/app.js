function make_album(artist_name, album_title, no_tracks) {
  if (no_tracks) {
    return {
      name: artist_name,
      title: album_title,
      tracks: no_tracks,
    };
  }

  return {
    name: artist_name,
    title: album_title,
  };
}

console.log(make_album("ahsan", "good songs"));
console.log(make_album("ahsan1", "good songs twice"));
console.log(make_album("ahsan2", "good songs third", 3));
