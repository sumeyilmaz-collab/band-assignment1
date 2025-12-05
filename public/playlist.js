// Simple Playlist – add & shuffle songs

let list = document.getElementsByClassName("list");
const songs = [];

for (let i = 0; i < list.length; i++) {
  songs.push(list[i].innerHTML);
}

function renderList(items) {
  const listEl = document.getElementById("newList");
  // Delete old items
  listEl.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    const li = document.createElement("li");
    li.innerText = items[i];
    listEl.appendChild(li);
  }
}


renderList(songs);

// New song add
document.getElementById("addMusic").addEventListener("click", function () {
  const input = document.getElementById("musicInput");
  const value = input.value.trim();

  if (value !== "") {
    songs.push(value);
    renderList(songs);
    input.value = "";
  }
});

// Fisher–Yates shuffle
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// Shuffle button
document.getElementById("shufflebtn").addEventListener("click", function () {
  shuffleArray(songs);
  renderList(songs);
});
