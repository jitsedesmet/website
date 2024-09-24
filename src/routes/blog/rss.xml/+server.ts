import RSS from 'rss';
import type {RequestHandler} from '@sveltejs/kit';

const rssXml: string = new RSS({
    title: 'Jitse De Smet',
    site_url: 'https://jitsedesmet.be',
    feed_url: 'https://jitsedesmet.be/blog/rss.xml',
    image_url: 'https://jitsedesmet.be/favicon.ico',
    managingEditor: 'Jitse De Smet',
    webMaster: 'Jitse De Smet',
    copyright: '2024 Jitse De Smet, CC BY',
    language: 'en',
    pubDate: new Date().toISOString(),
}).xml();

export const GET: RequestHandler = async () => {
    return new Response(rssXml, {
        headers: {
            'Content-Type': 'text/xml',
        },
    });
};
