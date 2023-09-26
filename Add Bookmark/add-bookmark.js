let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}, ];

let bookmarksLength = bookmarks.length;

let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarkForm = document.getElementById("bookmarkForm");
let bookmarksList = document.getElementById("bookmarksList");

for (let allbookmarks of bookmarks) {
    createAndAppendBookmark(allbookmarks);
}


bookmarkForm.addEventListener("submit", function() {
    event.preventDefault();
});

function createAndAppendBookmark(bookmarks) {
    let bookmarksListOutside = document.createElement("div");
    bookmarksListOutside.classList.add("bookmarkListContainer", "mb-3", "ml-0", "mr-5", "m-4", "pt-3", "pb-2");
    bookmarksList.appendChild(bookmarksListOutside);

    let bookmarkListcontainer = document.createElement("li");
    bookmarkListcontainer.classList.add("d-flex", "flex-column", "justify-content-center");
    bookmarksListOutside.appendChild(bookmarkListcontainer);

    let bookmarkListElContainer = document.createElement("div");
    bookmarkListElContainer.classList.add("d-flex", "flex-row", "w-100");
    bookmarkListcontainer.appendChild(bookmarkListElContainer);

    let bookmarkListEl = document.createElement("p");
    bookmarkListEl.textContent = bookmarks.name;
    bookmarkListEl.classList.add("listElfont", "pl-4");
    bookmarkListElContainer.appendChild(bookmarkListEl);

    let clickParaContainer = document.createElement("div");
    clickParaContainer.classList.add("ml-auto", "pr-4");
    bookmarkListElContainer.appendChild(clickParaContainer);

    let bookmarkAnchorEl = document.createElement("a");
    bookmarkAnchorEl.href = bookmarks.url;
    bookmarkAnchorEl.target = "_blank";
    clickParaContainer.appendChild(bookmarkAnchorEl);



    let clickParaEl = document.createElement("button");
    clickParaEl.textContent = "Visit";
    clickParaEl.classList.add("btn", "btn-primary");
    bookmarkAnchorEl.appendChild(clickParaEl);

}




let bookmarkValue = bookmarksLength;

function createBookmark() {
    bookmarkValue = bookmarkValue + 1;
    let id = "bookmark" + (bookmarkValue);
    let newBookmark = {
        bookmarkId: id,
        name: siteNameInput.value,
        url: siteUrlInput.value
    };

    bookmarks.push(newBookmark);
    createAndAppendBookmark(bookmarks[bookmarksLength]);
    bookmarksLength = bookmarksLength + 1;
    console.log(bookmarks);
}



let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function() {
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
        siteUrlErrMsg.textContent = "Required*";
        if (siteUrlInput.value === "") {
            siteUrlErrMsg.textContent = "Required*";
        }
    } else {
        siteNameErrMsg.textContent = "";

        createBookmark();
    }
});



siteNameInput.addEventListener("blur", function() {
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
        siteNameInput.style.borderStyle = "none";
    } else {
        siteNameErrMsg.textContent = "";
        siteNameInput.style.borderStyle = "none";
    }
});

siteUrlInput.addEventListener("blur", function() {
    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
        siteUrlInput.style.borderStyle = "none";
    } else {
        siteUrlErrMsg.textContent = "";
        siteUrlInput.style.borderStyle = "none";
    }
});

siteNameInput.addEventListener("change", function() {
    siteNameInput.style.borderStyle = "solid";
    siteNameInput.style.borderColor = "#dc3545";
    siteNameInput.style.borderWidth = "3px";
});

siteUrlInput.addEventListener("change", function() {
    siteUrlInput.style.borderStyle = "solid";
    siteUrlInput.style.borderColor = "#dc3545";
    siteUrlInput.style.borderWidth = "3px";
});
