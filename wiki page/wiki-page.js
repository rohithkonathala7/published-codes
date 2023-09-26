let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");


let createResult = function(result) {
    let {
        link,
        title,
        description
    } = result;

    let anchrContainer = document.createElement("div");
    anchrContainer.classList.add("result-item");

    let anchrEl = document.createElement("a");
    anchrEl.href = link;
    anchrEl.textContent = title;
    anchrEl.target = "_blank";
    anchrEl.classList.add("result-title");
    anchrContainer.appendChild(anchrEl);

    let breakEl = document.createElement("br");
    anchrContainer.appendChild(breakEl);

    let linkEl = document.createElement("a");
    linkEl.href = link;
    linkEl.textContent = link;
    linkEl.target = "_blank";
    linkEl.classList.add("result-url");
    anchrContainer.appendChild(linkEl);

    console.log(anchrContainer);

    let linkBreakEl = document.createElement("br");
    anchrContainer.appendChild(linkBreakEl);

    let paraEl = document.createElement("p");
    paraEl.textContent = description;
    paraEl.classList.add("link-description");
    anchrContainer.appendChild(paraEl);

    searchResults.appendChild(anchrContainer);
};


let showResults = function(search_results) {
    spinner.classList.add("d-none");

    for (let result of search_results) {
        createResult(result);
    }
};


let wikiSearch = function(event) {
    if (event.key === "Enter") {
        searchResults.textContent = "";
        spinner.classList.remove("d-none");
        let url = "https://apis.ccbp.in/wiki-search?search=" + (searchInput.value);
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                console.log(jsonData);
                let {
                    search_results
                } = jsonData;
                showResults(search_results);
            });
    }
};




searchInput.addEventListener("keydown", wikiSearch);
