const searchInput = document.getElementById("wikiSearchInput");
const searchButton = document.getElementById("wikiSearchBtn");

function aramaYap() {
    let aranan = searchInput.value.trim().toLowerCase();

    if (aranan === "") {
        alert("Please write something!");
        return;
    }
    
    if (aranan.includes("elmas") || aranan.includes("blok") || aranan.includes("diamond")) {
        window.location.href = "elmas-bloku.html";
    }
    // yeni bişey eklediğinde sadece else if i kopyala yapıştır ve düzenle:
    else if (aranan.includes("boliy") || aranan.includes("karakter") || aranan.includes("kahraman")) {
        window.location.href = "boliy.html";
    }

    }
    

    else {
        alert('No results found for "' + aranan + '"');
    }
}

searchButton.addEventListener("click", aramaYap);
searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        aramaYap();
    }
});