export const SITE = {
	title: '葫芦糖',
	description: '记录日常所见',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	Chines:'ch',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string, children?:any }[]>
>;
export const SIDEBAR: Sidebar = {

	ch:{
		'介绍':[
			{ text: 'Introduction', link: 'ch/introduction' },
		],
		'tools':[
			{ text: '网站收录', link: 'ch/website' },
			{ text: '日常记录', link: 'ch/skill'},

			{ text: '博客、周刊收录', link: 'ch/bloggers' },
		],

		'JavaScript高级程序设计':[
			{ text: '第1章 什么是JavaScript', link: 'books/javascript/book1-1' },
			{ text: '第2章 HTML中的JavaScript', link: 'books/javascript/book1-2' },
			{ text: '第3章 JS的基本概念', link: 'books/javascript/book1-3' },
			{ text: '第4章 变量、作用域和内存问题', link: 'books/javascript/book1-4' },

		],
	}
};
