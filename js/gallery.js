const images = [
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
        description: "Hokkaido Flower",
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
        description: "Container Haulage Freight",
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
        description: "Aerial Beach View",
    },
    {
        preview: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
        original: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
        description: "Flower Blooms",
    },
    {
        preview: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
        original: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
        description: "Alpine Mountains",
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
        description: "Mountain Lake Sailing",
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
        description: "Alpine Spring Meadows",
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
        description: "Nature Landscape",
    },
    {
        preview: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
        original: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
        description: "Lighthouse Coast Sea",
    },
];

const createGalleryImageTemplate = ({ original, preview, description }) => {
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
};

const galleryImagesTemplate = images.map((el) => createGalleryImageTemplate(el)).join("");
const galleryList = document.querySelector(".gallery");
galleryList.innerHTML = galleryImagesTemplate;

galleryList.style.listStyleType = "none";
galleryList.style.width = "1128px";
galleryList.style.height = "648px";
galleryList.style.padding = "24px 156px";
galleryList.style.display = "grid";
galleryList.style.gridTemplateColumns = "repeat(3, 1fr)";
galleryList.style.gap = "24px";
galleryList.style.background = "#FFF";
galleryList.style.position = "relative";

const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach((galleryItem) => {
    galleryItem.style.width = "360px";
    galleryItem.style.height = "200px";

    const img = galleryItem.querySelector("img");
    if (img) {
        img.style.width = "360px";
        img.style.height = "200px";
        img.style.objectFit = "cover";
    }
});

galleryList.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target === event.currentTarget) {
        return;
    }

    const galleryImage = event.target.closest(".gallery-image");

    if (!galleryImage) {
        return;
    }

    basicLightbox.create(`<img width="1112" height="640" src="${galleryImage.dataset.source}">`).show();

    const lightboxOverlay = document.querySelector(".basicLightbox");
    if (lightboxOverlay) {
        galleryList.appendChild(lightboxOverlay);
        lightboxOverlay.style.backgroundColor = "rgba(46, 47, 66, 0.80)";
        lightboxOverlay.style.position = "absolute";
        lightboxOverlay.style.width = "1440px";
        lightboxOverlay.style.height = "696px";
        lightboxOverlay.style.display = "flex";
        lightboxOverlay.style.alignItems = "center";
        lightboxOverlay.style.justifyContent = "center";

        const modalImage = lightboxOverlay.querySelector("img");
        modalImage.style.width = "1112px";
        modalImage.style.height = "640px";
        modalImage.style.objectFit = "cover";
    }
});
