import { createClient } from "contentful";

const Client = createClient({
	accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
	space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
	environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
});

export {
	Client
};
