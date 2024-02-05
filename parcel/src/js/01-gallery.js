// Import SimpleLightbox
import SimpleLightbox from 'simplelightbox';

// Import imagini din fișierul gallery-items.js
import { galleryItems } from './gallery-items.js';

// Selectăm elementul cu clasa '.gallery'
const gallery = document.querySelector('.gallery');

// Funcție pentru crearea galeriei de imagini
function createGallery() {
    galleryItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('gallery__item');

        const link = document.createElement('a');
        link.classList.add('gallery__link');
        link.href = item.original;

        const img = document.createElement('img');
        img.classList.add('gallery__image');
        img.src = item.preview;
        img.alt = item.description;
        img.setAttribute('data-source', item.original);
        img.setAttribute('href', item.original);

        link.appendChild(img);
        listItem.appendChild(link);
        gallery.appendChild(listItem);
    });
}

// Apelăm funcția pentru crearea galeriei când se încarcă pagina
document.addEventListener('DOMContentLoaded', createGallery);

// Activăm SimpleLightbox pe galerie
const lightbox = new SimpleLightbox('.gallery a');