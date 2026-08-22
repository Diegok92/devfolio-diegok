import matde from "../assets/preview-matde.jpg";
import dph from "../assets/DPH.png";
import tpenergy from "../assets/TPEnergy.png";
import vorterix from "../assets/Vorterix.png";

export const projects = [
	{
		id: "dphidraulica",
		featured: false,
		image: dph,
		repo: null,
		demo: "https://dphidraulica.com.ar/",
		accent: "brand",
	},
	{
		id: "tpenergy",
		featured: true,
		image: tpenergy,
		repo: null,
		demo: "https://shop.tpenergy.com/",
		accent: "brand",
	},
	{
		id: "vorterix",
		featured: false,
		image: vorterix,
		repo: null,
		demo: "https://vorterixshop2.mitiendanube.com/",
		accent: "accent",
	},
	{
		id: "matde",
		featured: false,
		image: matde,
		repo: null,
		demo: "https://matde.com.ar",
		accent: "brand",
	},
	{
		id: "tncrud",
		featured: true,
		image: null,
		hidePreview: true,
		repo: null,
		demo: null,
		accent: "accent",
	},
	{
		id: "chatbot",
		featured: true,
		image: null,
		hidePreview: true,
		repo: null,
		demo: null,
		accent: "accent",
	},
];
