async function load() {
  const response = await fetch("gallery/data.json");
  const data = await response.json();
  data.forEach((exhibition) => {
    const article = `
            <article>
                <h2>${exhibition.title}</h2>
                <p>${exhibition.description}</p>
                <img src="gallery/${exhibition.image}" loading="lazy">
            </article>
        `;
    document.querySelector("main").innerHTML += article;
  });
}

window.addEventListener("DOMContentLoaded", load);
