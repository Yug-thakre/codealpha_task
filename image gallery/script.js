/* =========================================================
   PHOTO LIBRARY
========================================================= */

const defaultPhotos = [

  {
    id: 1,
    name: "Mountain Morning",
    category: "nature",
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
    favorite: true,
    private: false,
    deleted: false,
    created: Date.now() - 1000 * 60 * 20,
    filters: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      grayscale: 0,
      sepia: 0,
      rotate: 0
    }
  },

  {
    id: 2,
    name: "City Evening",
    category: "city",
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=85",
    favorite: false,
    private: false,
    deleted: false,
    created: Date.now() - 1000 * 60 * 60,
    filters: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      grayscale: 0,
      sepia: 0,
      rotate: 0
    }
  },

  {
    id: 3,
    name: "Wild Fox",
    category: "animals",
    src: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=85",
    favorite: true,
    private: false,
    deleted: false,
    created: Date.now() - 1000 * 60 * 60 * 3,
    filters: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      grayscale: 0,
      sepia: 0,
      rotate: 0
    }
  },

  {
    id: 4,
    name: "Coastal Escape",
    category: "travel",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    favorite: false,
    private: false,
    deleted: false,
    created: Date.now() - 1000 * 60 * 60 * 5,
    filters: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      grayscale: 0,
      sepia: 0,
      rotate: 0
    }
  },

  {
    id: 5,
    name: "Forest Path",
    category: "nature",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",
    favorite: false,
    private: true,
    deleted: false,
    created: Date.now() - 1000 * 60 * 60 * 8,
    filters: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      grayscale: 0,
      sepia: 0,
      rotate: 0
    }
  },

  {
    id: 6,
    name: "Urban Streets",
    category: "city",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=85",
    favorite: false,
    private: false,
    deleted: false,
    created: Date.now() - 1000 * 60 * 60 * 12,
    filters: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      grayscale: 0,
      sepia: 0,
      rotate: 0
    }
  },

  {
    id: 7,
    name: "Lake View",
    category: "nature",
    src: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1200&q=85",
    favorite: false,
    private: false,
    deleted: false,
    created: Date.now() - 1000 * 60 * 60 * 18,
    filters: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      grayscale: 0,
      sepia: 0,
      rotate: 0
    }
  },

  {
    id: 8,
    name: "Desert Road",
    category: "travel",
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85",
    favorite: false,
    private: false,
    deleted: false,
    created: Date.now() - 1000 * 60 * 60 * 24,
    filters: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      grayscale: 0,
      sepia: 0,
      rotate: 0
    }
  },

  {
    id: 9,
    name: "Mountain Lake",
    category: "nature",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    favorite: true,
    private: false,
    deleted: false,
    created: Date.now() - 1000 * 60 * 60 * 30,
    filters: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      grayscale: 0,
      sepia: 0,
      rotate: 0
    }
  },

  {
    id: 10,
    name: "Morning Road",
    category: "travel",
    src: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=85",
    favorite: false,
    private: false,
    deleted: false,
    created: Date.now() - 1000 * 60 * 60 * 40,
    filters: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      grayscale: 0,
      sepia: 0,
      rotate: 0
    }
  },

  {
    id: 11,
    name: "City Architecture",
    category: "city",
    src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85",
    favorite: false,
    private: false,
    deleted: false,
    created: Date.now() - 1000 * 60 * 60 * 48,
    filters: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      grayscale: 0,
      sepia: 0,
      rotate: 0
    }
  },

  {
    id: 12,
    name: "Golden Hour",
    category: "travel",
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
    favorite: false,
    private: false,
    deleted: false,
    created: Date.now() - 1000 * 60 * 60 * 60,
    filters: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      grayscale: 0,
      sepia: 0,
      rotate: 0
    }
  }

];


/* =========================================================
   STATE
========================================================= */

let photos =
  JSON.parse(
    localStorage.getItem("photoLibrary")
  ) || defaultPhotos;

let currentPage = "photos";

let currentCategory = "all";

let currentViewerIndex = 0;

let currentEditId = null;

let pendingDeleteId = null;

let deletePermanently = false;


/* =========================================================
   ELEMENTS
========================================================= */

const gallery =
  document.getElementById("gallery");

const emptyState =
  document.getElementById("emptyState");

const pageTitle =
  document.getElementById("pageTitle");

const photoTotal =
  document.getElementById("photoTotal");

const searchInput =
  document.getElementById("searchInput");

const clearSearch =
  document.getElementById("clearSearch");

const sortSelect =
  document.getElementById("sortSelect");

const navItems =
  document.querySelectorAll(".nav-item");

const categoryButtons =
  document.querySelectorAll(".chip");


/* =========================================================
   SAVE
========================================================= */

function savePhotos() {

  localStorage.setItem(
    "photoLibrary",
    JSON.stringify(photos)
  );

}


/* =========================================================
   GET ACTIVE PHOTOS
========================================================= */

function getVisiblePhotos() {

  let result = [...photos];


  /* Page */

  if (currentPage === "favorites") {

    result =
      result.filter(
        photo =>
          photo.favorite &&
          !photo.deleted
      );

  }

  else if (currentPage === "recent") {

    result =
      result.filter(
        photo =>
          !photo.deleted
      );

    result.sort(
      (a, b) =>
        b.created - a.created
    );

  }

  else if (currentPage === "private") {

    result =
      result.filter(
        photo =>
          photo.private &&
          !photo.deleted
      );

  }

  else if (currentPage === "trash") {

    result =
      result.filter(
        photo =>
          photo.deleted
      );

  }

  else {

    result =
      result.filter(
        photo =>
          !photo.deleted
      );

  }


  /* Category */

  if (
    currentCategory !== "all" &&
    currentPage !== "trash"
  ) {

    result =
      result.filter(
        photo =>
          photo.category === currentCategory
      );

  }


  /* Search */

  const search =
    searchInput.value
      .trim()
      .toLowerCase();


  if (search) {

    result =
      result.filter(photo =>

        photo.name
          .toLowerCase()
          .includes(search)

        ||

        photo.category
          .toLowerCase()
          .includes(search)

      );

  }


  /* Sort */

  if (
    currentPage !== "recent"
  ) {

    if (
      sortSelect.value === "newest"
    ) {

      result.sort(
        (a, b) =>
          b.created - a.created
      );

    }

    else if (
      sortSelect.value === "oldest"
    ) {

      result.sort(
        (a, b) =>
          a.created - b.created
      );

    }

    else if (
      sortSelect.value === "name"
    ) {

      result.sort(
        (a, b) =>
          a.name.localeCompare(b.name)
      );

    }

  }


  return result;

}


/* =========================================================
   RENDER GALLERY
========================================================= */

function renderGallery() {

  const visiblePhotos =
    getVisiblePhotos();


  gallery.innerHTML = "";


  visiblePhotos.forEach(
    (photo, index) => {

      const card =
        createPhotoCard(
          photo,
          index
        );

      gallery.appendChild(card);

    }
  );


  updateCounts();

  updateHeading(
    visiblePhotos.length
  );


  if (
    visiblePhotos.length === 0
  ) {

    gallery.style.display = "none";

    emptyState.hidden = false;

  }

  else {

    gallery.style.display = "grid";

    emptyState.hidden = true;

  }

}


/* =========================================================
   CREATE PHOTO CARD
========================================================= */

function createPhotoCard(
  photo,
  visibleIndex
) {

  const card =
    document.createElement("article");

  card.className =
    "photo-card";

  if (photo.deleted) {
    card.classList.add("trash-card");
  }


  card.style.animationDelay =
    `${visibleIndex * 35}ms`;


  const image =
    document.createElement("img");

  image.src = photo.src;

  image.alt = photo.name;

  applyImageFilter(
    image,
    photo.filters
  );


  card.appendChild(image);


  /* Favorite badge */

  if (photo.favorite && !photo.deleted) {

    const favoriteBadge =
      document.createElement("div");

    favoriteBadge.className =
      "favorite-badge";

    favoriteBadge.textContent =
      "♥";

    card.appendChild(
      favoriteBadge
    );

  }


  /* Private badge */

  if (
    photo.private &&
    !photo.deleted
  ) {

    const privateBadge =
      document.createElement("div");

    privateBadge.className =
      "private-badge";

    privateBadge.textContent =
      "PRIVATE";

    card.appendChild(
      privateBadge
    );

  }


  /* Bottom */

  const bottom =
    document.createElement("div");

  bottom.className =
    "photo-bottom";


  const info =
    document.createElement("div");

  info.innerHTML = `
    <div class="photo-name">
      ${escapeHtml(photo.name)}
    </div>

    <div class="photo-category">
      ${capitalize(photo.category)}
    </div>
  `;


  bottom.appendChild(info);


  /* Actions */

  const actions =
    document.createElement("div");

  actions.className =
    "card-actions";


  if (!photo.deleted) {

    const favorite =
      document.createElement("button");

    favorite.className =
      "card-action favorite";

    if (photo.favorite) {
      favorite.classList.add("active");
    }

    favorite.innerHTML =
      photo.favorite ? "♥" : "♡";

    favorite.title =
      "Favorite";

    favorite.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        toggleFavorite(photo.id);

      }
    );


    const edit =
      document.createElement("button");

    edit.className =
      "card-action";

    edit.innerHTML =
      "✎";

    edit.title =
      "Edit";

    edit.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        openEditor(photo.id);

      }
    );


    const privateButton =
      document.createElement("button");

    privateButton.className =
      "card-action";

    privateButton.innerHTML =
      photo.private ? "♙" : "♧";

    privateButton.title =
      photo.private
        ? "Make public"
        : "Make private";

    privateButton.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        togglePrivate(photo.id);

      }
    );


    const deleteButton =
      document.createElement("button");

    deleteButton.className =
      "card-action";

    deleteButton.innerHTML =
      "⌫";

    deleteButton.title =
      "Delete";

    deleteButton.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        openDeleteConfirmation(
          photo.id,
          false
        );

      }
    );


    actions.appendChild(favorite);

    actions.appendChild(edit);

    actions.appendChild(privateButton);

    actions.appendChild(deleteButton);

  }


  bottom.appendChild(actions);

  card.appendChild(bottom);


  /* Trash actions */

  if (photo.deleted) {

    const trashActions =
      document.createElement("div");

    trashActions.className =
      "trash-actions";


    const restore =
      document.createElement("button");

    restore.className =
      "restore-btn";

    restore.textContent =
      "Restore";

    restore.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        restorePhoto(photo.id);

      }
    );


    const permanent =
      document.createElement("button");

    permanent.className =
      "permanent-delete-btn";

    permanent.textContent =
      "Delete Forever";

    permanent.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        openDeleteConfirmation(
          photo.id,
          true
        );

      }
    );


    trashActions.appendChild(
      restore
    );

    trashActions.appendChild(
      permanent
    );


    card.appendChild(
      trashActions
    );

  }


  /* Open viewer */

  card.addEventListener(
    "click",
    () => {

      openViewer(photo.id);

    }
  );


  return card;

}


/* =========================================================
   VIEWER
========================================================= */

const viewer =
  document.getElementById("viewer");

const viewerImage =
  document.getElementById("viewerImage");

const viewerTitle =
  document.getElementById("viewerTitle");

const viewerDetails =
  document.getElementById("viewerDetails");

const viewerFavorite =
  document.getElementById("viewerFavorite");

const viewerEdit =
  document.getElementById("viewerEdit");

const viewerDelete =
  document.getElementById("viewerDelete");


function openViewer(id) {

  const visiblePhotos =
    getVisiblePhotos();

  const index =
    visiblePhotos.findIndex(
      photo =>
        photo.id === id
    );

  if (index === -1) {
    return;
  }

  currentViewerIndex = index;

  updateViewer();

  viewer.classList.add("show");

  document.body.style.overflow =
    "hidden";

}


function updateViewer() {

  const visiblePhotos =
    getVisiblePhotos();

  const photo =
    visiblePhotos[
      currentViewerIndex
    ];


  if (!photo) {
    return;
  }


  viewerImage.src =
    photo.src;

  viewerImage.alt =
    photo.name;


  applyImageFilter(
    viewerImage,
    photo.filters
  );


  viewerTitle.textContent =
    photo.name;


  viewerDetails.textContent =
    `${capitalize(photo.category)} · ${formatDate(photo.created)}`;


  viewerFavorite.textContent =
    photo.favorite ? "♥" : "♡";


  viewerFavorite.classList.toggle(
    "active",
    photo.favorite
  );


  viewerEdit.style.display =
    photo.deleted
      ? "none"
      : "block";


  viewerDelete.textContent =
    photo.deleted
      ? "Delete Forever"
      : "Delete";

}


document
  .getElementById("viewerClose")
  .addEventListener(
    "click",
    closeViewer
  );


function closeViewer() {

  viewer.classList.remove("show");

  document.body.style.overflow =
    "";

}


document
  .getElementById("viewerNext")
  .addEventListener(
    "click",
    () => {

      const list =
        getVisiblePhotos();

      if (!list.length) return;

      currentViewerIndex =
        (currentViewerIndex + 1)
        % list.length;

      updateViewer();

    }
  );


document
  .getElementById("viewerPrev")
  .addEventListener(
    "click",
    () => {

      const list =
        getVisiblePhotos();

      if (!list.length) return;

      currentViewerIndex =
        (currentViewerIndex - 1 + list.length)
        % list.length;

      updateViewer();

    }
  );


viewerFavorite.addEventListener(
  "click",
  () => {

    const list =
      getVisiblePhotos();

    const photo =
      list[currentViewerIndex];

    if (!photo) return;

    toggleFavorite(photo.id);

    updateViewer();

  }
);


viewerEdit.addEventListener(
  "click",
  () => {

    const list =
      getVisiblePhotos();

    const photo =
      list[currentViewerIndex];

    if (!photo) return;

    closeViewer();

    openEditor(photo.id);

  }
);


viewerDelete.addEventListener(
  "click",
  () => {

    const list =
      getVisiblePhotos();

    const photo =
      list[currentViewerIndex];

    if (!photo) return;

    closeViewer();

    openDeleteConfirmation(
      photo.id,
      photo.deleted
    );

  }
);


/* =========================================================
   FAVORITE
========================================================= */

function toggleFavorite(id) {

  const photo =
    photos.find(
      item =>
        item.id === id
    );

  if (!photo) return;

  photo.favorite =
    !photo.favorite;

  savePhotos();

  renderGallery();

}


/* =========================================================
   PRIVATE
========================================================= */

function togglePrivate(id) {

  const photo =
    photos.find(
      item =>
        item.id === id
    );

  if (!photo) return;

  photo.private =
    !photo.private;

  savePhotos();

  renderGallery();

}


/* =========================================================
   DELETE
========================================================= */

const confirmModal =
  document.getElementById(
    "confirmModal"
  );

const confirmTitle =
  document.getElementById(
    "confirmTitle"
  );

const confirmText =
  document.getElementById(
    "confirmText"
  );


function openDeleteConfirmation(
  id,
  permanent
) {

  pendingDeleteId = id;

  deletePermanently =
    permanent;


  if (permanent) {

    confirmTitle.textContent =
      "Delete permanently?";

    confirmText.textContent =
      "This photo will be removed from your library.";

  }

  else {

    confirmTitle.textContent =
      "Move to Recently Deleted?";

    confirmText.textContent =
      "You can restore this photo later.";

  }


  document.getElementById(
    "confirmDelete"
  ).textContent =
    permanent
      ? "Delete Forever"
      : "Delete";


  confirmModal.classList.add(
    "show"
  );

}


document
  .getElementById("confirmCancel")
  .addEventListener(
    "click",
    closeDeleteConfirmation
  );


function closeDeleteConfirmation() {

  confirmModal.classList.remove(
    "show"
  );

  pendingDeleteId = null;

}


document
  .getElementById("confirmDelete")
  .addEventListener(
    "click",
    () => {

      if (
        pendingDeleteId === null
      ) {
        return;
      }


      if (deletePermanently) {

        photos =
          photos.filter(
            photo =>
              photo.id !==
              pendingDeleteId
          );

      }

      else {

        const photo =
          photos.find(
            item =>
              item.id ===
              pendingDeleteId
          );

        if (photo) {
          photo.deleted = true;
        }

      }


      savePhotos();

      closeDeleteConfirmation();

      renderGallery();

    }
  );


/* =========================================================
   RESTORE
========================================================= */

function restorePhoto(id) {

  const photo =
    photos.find(
      item =>
        item.id === id
    );

  if (!photo) return;

  photo.deleted = false;

  savePhotos();

  renderGallery();

}


/* =========================================================
   EDITOR
========================================================= */

const editModal =
  document.getElementById(
    "editModal"
  );

const editImage =
  document.getElementById(
    "editImage"
  );

const brightness =
  document.getElementById(
    "brightness"
  );

const contrast =
  document.getElementById(
    "contrast"
  );

const saturation =
  document.getElementById(
    "saturation"
  );

const grayscale =
  document.getElementById(
    "grayscale"
  );

const sepia =
  document.getElementById(
    "sepia"
  );


let editRotation = 0;


function openEditor(id) {

  const photo =
    photos.find(
      item =>
        item.id === id
    );

  if (!photo) return;

  currentEditId = id;


  const filters =
    photo.filters || createDefaultFilters();


  brightness.value =
    filters.brightness;

  contrast.value =
    filters.contrast;

  saturation.value =
    filters.saturation;

  grayscale.value =
    filters.grayscale;

  sepia.value =
    filters.sepia;

  editRotation =
    filters.rotate || 0;


  editImage.src =
    photo.src;


  updateEditLabels();

  updateEditPreview();


  editModal.classList.add(
    "show"
  );

}


function createDefaultFilters() {

  return {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    grayscale: 0,
    sepia: 0,
    rotate: 0
  };

}


function updateEditLabels() {

  document.getElementById(
    "brightnessValue"
  ).textContent =
    `${brightness.value}%`;


  document.getElementById(
    "contrastValue"
  ).textContent =
    `${contrast.value}%`;


  document.getElementById(
    "saturationValue"
  ).textContent =
    `${saturation.value}%`;


  document.getElementById(
    "grayscaleValue"
  ).textContent =
    `${grayscale.value}%`;


  document.getElementById(
    "sepiaValue"
  ).textContent =
    `${sepia.value}%`;

}


function updateEditPreview() {

  editImage.style.filter = `
    brightness(${brightness.value}%)
    contrast(${contrast.value}%)
    saturate(${saturation.value}%)
    grayscale(${grayscale.value}%)
    sepia(${sepia.value}%)
  `;


  editImage.style.transform =
    `rotate(${editRotation}deg)`;

}


[
  brightness,
  contrast,
  saturation,
  grayscale,
  sepia
].forEach(
  control => {

    control.addEventListener(
      "input",
      () => {

        updateEditLabels();

        updateEditPreview();

      }
    );

  }
);


/* Rotate */

document
  .getElementById("rotateButton")
  .addEventListener(
    "click",
    () => {

      editRotation += 90;

      if (editRotation >= 360) {
        editRotation = 0;
      }

      updateEditPreview();

    }
  );


/* Reset */

document
  .getElementById("resetEdit")
  .addEventListener(
    "click",
    () => {

      brightness.value = 100;
      contrast.value = 100;
      saturation.value = 100;
      grayscale.value = 0;
      sepia.value = 0;

      editRotation = 0;

      updateEditLabels();

      updateEditPreview();

    }
  );


/* Save */

document
  .getElementById("saveEdit")
  .addEventListener(
    "click",
    () => {

      const photo =
        photos.find(
          item =>
            item.id ===
            currentEditId
        );

      if (!photo) return;


      photo.filters = {

        brightness:
          Number(brightness.value),

        contrast:
          Number(contrast.value),

        saturation:
          Number(saturation.value),

        grayscale:
          Number(grayscale.value),

        sepia:
          Number(sepia.value),

        rotate:
          editRotation

      };


      savePhotos();

      closeEditor();

      renderGallery();

    }
  );


/* Close */

document
  .getElementById("editClose")
  .addEventListener(
    "click",
    closeEditor
  );


function closeEditor() {

  editModal.classList.remove(
    "show"
  );

  currentEditId = null;

}


/* =========================================================
   SEARCH
========================================================= */

searchInput.addEventListener(
  "input",
  () => {

    document
      .querySelector(".search-box")
      .classList.toggle(
        "has-value",
        searchInput.value.length > 0
      );

    renderGallery();

  }
);


clearSearch.addEventListener(
  "click",
  () => {

    searchInput.value = "";

    document
      .querySelector(".search-box")
      .classList.remove(
        "has-value"
      );

    renderGallery();

  }
);


/* =========================================================
   SORT
========================================================= */

sortSelect.addEventListener(
  "change",
  renderGallery
);


/* =========================================================
   NAVIGATION
========================================================= */

navItems.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        navItems.forEach(
          item =>
            item.classList.remove(
              "active"
            )
        );

        button.classList.add(
          "active"
        );


        currentPage =
          button.dataset.page;


        currentCategory =
          "all";


        categoryButtons.forEach(
          chip =>
            chip.classList.remove(
              "active"
            )
        );


        categoryButtons[0]
          .classList.add("active");


        updatePageTitle();

        renderGallery();

      }
    );

  }
);


/* =========================================================
   CATEGORIES
========================================================= */

categoryButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        categoryButtons.forEach(
          chip =>
            chip.classList.remove(
              "active"
            )
        );

        button.classList.add(
          "active"
        );


        currentCategory =
          button.dataset.category;


        currentPage =
          "photos";


        navItems.forEach(
          item =>
            item.classList.toggle(
              "active",
              item.dataset.page ===
              "photos"
            )
        );


        updatePageTitle();

        renderGallery();

      }
    );

  }
);


/* =========================================================
   PAGE TITLE
========================================================= */

function updatePageTitle() {

  const titles = {

    photos: "Photos",

    favorites: "Favorites",

    recent: "Recent",

    private: "Private",

    trash: "Recently Deleted"

  };


  pageTitle.textContent =
    titles[currentPage];

}


function updateHeading(count) {

  photoTotal.textContent =
    `${count} ${
      count === 1
        ? "photo"
        : "photos"
    }`;

}


/* =========================================================
   COUNTS
========================================================= */

function updateCounts() {

  const active =
    photos.filter(
      photo =>
        !photo.deleted
    );

  const favorites =
    active.filter(
      photo =>
        photo.favorite
    );

  const privatePhotos =
    active.filter(
      photo =>
        photo.private
    );

  const trash =
    photos.filter(
      photo =>
        photo.deleted
    );


  document.getElementById(
    "photosCount"
  ).textContent =
    active.length;


  document.getElementById(
    "favoriteCount"
  ).textContent =
    favorites.length;


  document.getElementById(
    "privateCount"
  ).textContent =
    privatePhotos.length;


  document.getElementById(
    "trashCount"
  ).textContent =
    trash.length;

}


/* =========================================================
   IMAGE UPLOAD
========================================================= */

const fileInput =
  document.getElementById(
    "fileInput"
  );


function openFilePicker() {

  fileInput.click();

}


document
  .getElementById("uploadButton")
  .addEventListener(
    "click",
    openFilePicker
  );


document
  .getElementById("topUpload")
  .addEventListener(
    "click",
    openFilePicker
  );


document
  .getElementById("emptyAddButton")
  .addEventListener(
    "click",
    openFilePicker
  );


fileInput.addEventListener(
  "change",
  event => {

    const files =
      Array.from(
        event.target.files
      );


    files.forEach(
      file => {

        if (
          !file.type.startsWith(
            "image/"
          )
        ) {
          return;
        }


        const reader =
          new FileReader();


        reader.onload =
          function (e) {

            const newPhoto = {

              id:
                Date.now() +
                Math.random(),

              name:
                file.name.replace(
                  /\.[^/.]+$/,
                  ""
                ),

              category:
                "travel",

              src:
                e.target.result,

              favorite:
                false,

              private:
                false,

              deleted:
                false,

              created:
                Date.now(),

              filters:
                createDefaultFilters()

            };


            photos.unshift(
              newPhoto
            );


            savePhotos();

            renderGallery();

          };


        reader.readAsDataURL(file);

      }
    );


    fileInput.value = "";

  }
);


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      viewer.classList.contains(
        "show"
      )
    ) {

      if (
        event.key ===
        "ArrowRight"
      ) {

        document
          .getElementById(
            "viewerNext"
          )
          .click();

      }

      else if (
        event.key ===
        "ArrowLeft"
      ) {

        document
          .getElementById(
            "viewerPrev"
          )
          .click();

      }

      else if (
        event.key ===
        "Escape"
      ) {

        closeViewer();

      }

    }


    if (
      editModal.classList.contains(
        "show"
      ) &&
      event.key === "Escape"
    ) {

      closeEditor();

    }


    if (
      confirmModal.classList.contains(
        "show"
      ) &&
      event.key === "Escape"
    ) {

      closeDeleteConfirmation();

    }

  }
);


/* =========================================================
   CLICK OUTSIDE MODALS
========================================================= */

viewer.addEventListener(
  "click",
  event => {

    if (
      event.target === viewer
    ) {

      closeViewer();

    }

  }
);


editModal.addEventListener(
  "click",
  event => {

    if (
      event.target === editModal
    ) {

      closeEditor();

    }

  }
);


confirmModal.addEventListener(
  "click",
  event => {

    if (
      event.target === confirmModal
    ) {

      closeDeleteConfirmation();

    }

  }
);


/* =========================================================
   HELPERS
========================================================= */

function applyImageFilter(
  image,
  filters
) {

  if (!filters) {
    filters =
      createDefaultFilters();
  }


  image.style.filter = `
    brightness(${filters.brightness}%)
    contrast(${filters.contrast}%)
    saturate(${filters.saturation}%)
    grayscale(${filters.grayscale}%)
    sepia(${filters.sepia}%)
  `;


  image.style.transform =
    `rotate(${filters.rotate || 0}deg)`;

}


function capitalize(text) {

  return text.charAt(0).toUpperCase()
    + text.slice(1);

}


function formatDate(timestamp) {

  const date =
    new Date(timestamp);

  return date.toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric"
    }
  );

}


function escapeHtml(text) {

  const div =
    document.createElement("div");

  div.textContent = text;

  return div.innerHTML;

}


/* =========================================================
   INITIAL LOAD
========================================================= */

updatePageTitle();

renderGallery();
