
function setLoaclStorage() {
    if(location.search === "?storage=true") {
        console.log("we write into the local storage");
        window.localStorage.setItem("test", "im_here");
    }
}

setTimeout(setLoaclStorage, 1000);
