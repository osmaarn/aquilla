window.onload = function () {
    fetch("https://hirng-x2021.glitch.me/api")
        .then((response) => response.json())
        .then((data) => {
        this.name = data.name;
        for (link in data.social_media) {
            link === "email"
            ? (this.links[link] = `mailto:${data.social_media[link]}`)
            : (this.links[
                link
                ] = `https://${link}.com/${data.social_media[link]}`);
        }
        console.log(this.links);
        })
        .catch((error) => console.log(error));
}