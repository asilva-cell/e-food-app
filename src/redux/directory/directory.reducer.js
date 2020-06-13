const INITIAL_STATE = {
	sections: [
		{
			title: "appetizer",
			imageUrl: "https://i.ibb.co/C1wJyp0/drew-beamer-FUuts51p47-E-unsplash.jpg",
			id: 1,
			linkUrl: "shop/appetizers"
		},
		{
			title: "breakfast",
			imageUrl: "https://i.ibb.co/3yhQwyR/maria-labanda-t-G0-Fdjr-H0-E-unsplash.jpg",
			id: 2,
			linkUrl: "shop/breakfast"
		},
		{
			title: "burgers",
			imageUrl: "https://i.ibb.co/PTzYqXv/amirali-mirhashemian-j-MPEw-H9-LM4-unsplash.jpg",
			id: 3,
			linkUrl: "shop/burgers"
		},
		{
			title: "salads",
			imageUrl: "https://i.ibb.co/RDHjfkB/alina-chernysheva-oj2h-Bf5-TOFM-unsplash.jpg",
			size: "large",
			id: 4,
			linkUrl: "shop/salads"
		},
		{
			title: "desserts",
			imageUrl: "https://i.ibb.co/BVYTSWX/after-emile-mbunzama-c-Lpd-EA23-Z44-unsplash.png",
			size: "large",
			id: 5,
			linkUrl: "shop/desserts"
		}
	]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
