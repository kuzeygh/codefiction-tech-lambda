const PodcastModel = require('./models/Podcast.model');

class PodcastController {
    constructor(app, parser) {
        this.app = app;
        this.parser = parser;
    }

    getPodcasts() {
        this.parser.parseURL(rssUrl, (err, rss) => {
            let items = [],
                list = rss.feed.entries;

            for (let i = 0; i < list.length; i++) {
                let listItem = list[i];
                let podcast = new PodcastModel(
                    listItem.title,
                    listItem.link,
                    listItem.itunes.duration,
                    listItem.itunes.image,
                    listItem.pubDate,
                    listItem.content
                );

                items.push(podcast);
            }
        });
    }
}

module.exports = PodcastController;