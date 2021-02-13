import Prismic from "@prismicio/client";

const apiEndpoint = process.env.API_ENDPOINT || "";
const accessToken = process.env.ACCESS_TOKEN;

export const PrismicClient = Prismic.client(apiEndpoint, { accessToken });
