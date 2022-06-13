export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-09fb2f60.js","js":["start-09fb2f60.js","chunks/index-950aed72.js","chunks/index-c6d6b0b6.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "bug",
				pattern: /^\/bug\/?$/,
				names: [],
				types: [],
				path: "/bug",
				shadow: () => import('./server/entries/endpoints/bug/index.ts.js'),
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "bug/[id]",
				pattern: /^\/bug\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: () => import('./server/entries/endpoints/bug/_id_.ts.js'),
				a: [0,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
