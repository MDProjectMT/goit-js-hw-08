import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector("ul.gallery");
for (const item of galleryItems) {
    const contentHtml = `<li>
  <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
      title="${item.description}"
    />
  </a>
</li>`;
    gallery.insertAdjacentHTML("beforeend", contentHtml);
};

new SimpleLightbox(".gallery a", {captions: true, captionSelector: 'img', captionsData: 'alt', captionDelay: 250});

console.log(galleryItems);