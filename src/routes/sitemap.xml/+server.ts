import {response} from 'super-sitemap/sveltekit';
import type {RequestHandler} from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
    return await response({
        origin: 'https://jitsedesmet.be',
    });
};
