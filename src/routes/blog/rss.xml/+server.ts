import type { RequestHandler } from '@sveltejs/kit';
import { blogPosts } from '$lib/blog-posts.js';

function escapeXml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

export const GET: RequestHandler = async () => {
    const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
    const lastBuildDate = sorted.length > 0 ? new Date(sorted[0].date).toUTCString() : new Date().toUTCString();
    const currentYear = new Date().getFullYear();

    const items = sorted.map(post => `
        <item>
            <title>${escapeXml(post.title)}</title>
            <link>${escapeXml(post.url)}</link>
            <guid isPermaLink="true">${escapeXml(post.url)}</guid>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            ${post.description ? `<description>${escapeXml(post.description)}</description>` : ''}
        </item>`).join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
    <channel>
        <title>Jitse De Smet</title>
        <link>https://jitsedesmet.be/blog</link>
        <description>Blog of Jitse De Smet</description>
        <language>en</language>
        <managingEditor>Jitse De Smet</managingEditor>
        <webMaster>Jitse De Smet</webMaster>
        <copyright>${currentYear} Jitse De Smet, CC BY</copyright>
        <lastBuildDate>${lastBuildDate}</lastBuildDate>
        <image>
            <url>https://jitsedesmet.be/favicon.ico</url>
            <title>Jitse De Smet</title>
            <link>https://jitsedesmet.be/blog</link>
        </image>
        ${items}
    </channel>
</rss>`;

    return new Response(xml, {
        headers: { 'Content-Type': 'application/rss+xml' },
    });
};
