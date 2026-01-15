import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { DEFAULT_LANG, SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const getPathSlug = (post) => {
		if (post.data.path) return post.data.path;
		if (post.data.slug?.startsWith(`${post.data.lang}-`)) {
			return post.data.slug.slice(post.data.lang.length + 1);
		}
		return post.data.slug ?? post.slug ?? post.id;
	};
	const posts = (await getCollection('blog')).filter((post) => post.data.lang === DEFAULT_LANG);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${DEFAULT_LANG}/${getPathSlug(post)}/`,
		})),
	});
}
