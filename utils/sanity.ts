// routes/api/sanity.ts

import { config } from "dotenv";

type SanityClientOptions = {
    projectId: string;
    dataset: string;
    apiVersion: string;
    token?: string;
    useCdn?: boolean;
};

type QueryParameters = Record<string, string | number>;

let sanity_project_id: string;
let sanity_dataset: string;

if (Deno.env.get('DENO_DEPLOYMENT_ID')) {
    // prod
    sanity_project_id = Deno.env.get('SANITY_PROJECT_ID')!;
    sanity_dataset = Deno.env.get('SANITY_DATASET')!;
  } else {
    // dev
    sanity_project_id = config().SANITY_PROJECT_ID!;
    sanity_dataset = config().SANITY_DATASET!;
  }

const sanityCredentials = {
    projectId: sanity_project_id,
    dataset: sanity_dataset,
};

const sanityClient = (options: SanityClientOptions) => {
    const { useCdn, projectId, dataset, token, apiVersion } = options;
    const hasToken = token && token.length > 0;
    const baseHost = useCdn && !hasToken ? "apicdn.sanity.io" : "api.sanity.io";
    const endpoint = `https://${projectId}.${baseHost}/v${apiVersion}/data/query/${dataset}`;

    // Parse JSON and throw on bad responses
    const responseHandler = (response: Response) => {
        if (response.status >= 400) {
            throw new Error([response.status, response.statusText].join(" "));
        }
        return response.json();
    };

    // We need to prefix groq query params with `$` and quote the strings
    const transformedParams = (parameters: QueryParameters) =>
        Object.keys(parameters).reduce<QueryParameters>((prev, key) => {
            prev[`$${key}`] = JSON.stringify(parameters[key]);
            return prev;
        }, {});

    return {
        fetch: async (query: string, parameters?: QueryParameters) => {
            const urlParams = new URLSearchParams({
                query,
                ...(parameters && transformedParams(parameters)),
            });

            const url = new URL([endpoint, urlParams].join("?"));
            const request = new Request(url.toString());

            if (hasToken) {
                request.headers.set("Authorization", `Bearer ${token}`);
            }

            return (
                await fetch(request)
                    .then(responseHandler)
                    // The query results are in the `result` property
                    .then((json) => json.result)
            );
        },
    };
};

export const runQuery = async (
    query: string
) => {
    const client = sanityClient({
        ...sanityCredentials,
        useCdn: false,
        apiVersion: "2022-10-09"
    });
    return await client.fetch(query);
};