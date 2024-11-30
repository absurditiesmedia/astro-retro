import xml2js from "xml2js";
import dayjs from "dayjs";
import podcastConfig from "../../../podcast.config.json";
import { getCollection } from "astro:content";
import { htmlToText } from "html-to-text"
import  formatTime  from "../../modules/field_formatter";  

let episode = await getCollection("podcast");

episode.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
if (podcastConfig.feedSize) episode = episode.slice(0, podcastConfig.feedSize);
const lastBuildDate = dayjs().format("ddd, DD MMM YYYY hh:mm:ss ZZ");
const cover = isFullUrl(podcastConfig.cover) ? podcastConfig.cover : podcastConfig.link + podcastConfig.cover;
const currentYear = new Date().getFullYear();

export async function GET() {
  let podcast = {
    rss: {
      $: {
        version: "2.0",
        "xmlns:itunes": "http://www.itunes.com/dtds/podcast-1.0.dtd",
        "xmlns:podcast": "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md",
        "xmlns:atom": "http://www.w3.org/2005/Atom",
        "xmlns:content": "http://purl.org/rss/1.0/modules/content/",
      },
      channel: [
        {
          title: podcastConfig.name,
          description: podcastConfig.description,
          link: podcastConfig.link,
          copyright: 'Copyright '+currentYear+' '+podcastConfig.author,
          webMaster: podcastConfig.email,
          generator: ["Astropod"],
          lastBuildDate: lastBuildDate,
          language: podcastConfig.language,
          "itunes:author": podcastConfig.author,
          "itunes:image": { $: { href: cover } },
          "itunes:summary": podcastConfig.description,
          "itunes:type": "episodic",
          "itunes:explicit": podcastConfig.explicit,
          "itunes:owner": {
            "itunes:name": podcastConfig.author,
            "itunes:email": podcastConfig.email,
          },
          image: {
            link: podcastConfig.link,
            title: podcastConfig.name,
            url: cover,
          },
          "atom:link": [
            {
              $: {
                href: `${podcastConfig.link}/rss.xml`,
                rel: "self",
                type: "application/rss+xml",
              },
            },
            {
              $: {
                href: `https://pubsubhubbub.appspot.com/`,
                rel: "hub",
                type: "application/rss+xml",
              },
            },
          ],
        },
      ],
    },
  };

  podcast.rss.channel[0].category = podcastConfig.category.map((category) => category);
  podcast.rss.channel[0]["itunes:category"] = podcastConfig.category.map((category) => ({
    $: {
      text: category,
    },
  }));

  if (podcastConfig.fundingUrl) {
    const fundingUrl = isFullUrl(podcastConfig.fundingUrl)
      ? podcastConfig.fundingUrl
      : podcastConfig.link + podcastConfig.fundingUrl;
    podcast.rss.channel[0]["podcast:funding"] = {
      $: { url: fundingUrl },
      _: podcastConfig.fundingText,
    };
  }

  const items = episode.map((episode) => {
    episode.data.duration = formatTime(episode.data.duration);
    episode.body = htmlToText(episode.body);
    let item = {
      title: episode.data.title,
      description: episode.body,
      pubDate: dayjs(episode.data.pubDate).format("ddd, DD MMM YYYY hh:mm:ss ZZ"),
      link: `${podcastConfig.link}/${episode.slug}`,
      guid: `${podcastConfig.link}/${episode.slug}`,
      author: `${podcastConfig.email}`,
      "itunes:episode": episode.data.episode,
      "itunes:season": episode.data.season,
      "itunes:episodeType": episode.data.episodeType,
      "itunes:explicit": episode.data.explicit === undefined ? podcastConfig.explicit : episode.data.explicit,
      enclosure: {
        $: {
          url: isFullUrl(episode.data.audioUrl) ? episode.data.audioUrl : podcastConfig.link + episode.data.audioUrl,
          length: episode.data.size && episode.data.size * 1000000,
          type: "audio/mpeg",
        },
      },
      "itunes:duration": episode.data.duration,episode
    };
    const cover_url = episode.data.cover ? episode.data.cover : podcastConfig.cover;
    item["itunes:image"] = {
      $: { href: isFullUrl(cover_url) ? cover_url : podcastConfig.link + cover_url },
    };
  
    delete item.episode;
    return item;
  });

  podcast.rss.channel[0].item = items;
  
  let builder = new xml2js.Builder({cdata: true});
  let xml = builder.buildObject(podcast);
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}

function isFullUrl(urlString) {
  try {
    return Boolean(new URL(urlString));
  } catch (e) {
    return false;
  }
}