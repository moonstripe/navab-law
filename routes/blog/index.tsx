/** @jsx h */
import { h } from "preact";
import { PageProps, Handlers } from "fresh/server.ts";
import { tw } from 'twind'

import Layout from '../../components/Layout.tsx'
import { Meta, Post } from "../../utils/types/index.ts";
import Nav from "../../islands/Nav.tsx";

import { runQuery } from "../../utils/sanity.ts"
import BlockContent from "../../islands/BlockContent.tsx";


export const handler: Handlers<Post | null> = {
    async GET(_, ctx) {
        const raw = await runQuery(`
        *[_type == "post"] | order(publishedAt desc) {
          title,
          "authorName": author -> name,
          "image": mainImage.asset -> url,
          body,
          publishedAt,
          "slug": slug.current
        }
        `);

        return ctx.render(raw);
    },
};

export default ({ data }: PageProps) => {

    const meta: Meta = {
        title: "Navab Law Blog",
        type: "website",
        description: "Read more about our successes in the courtroom with civil rights, employment, and personal injury cases."
    }

    return (
        <Layout meta={meta}>
            <Nav postArr={[]} hasTicker={false}/>
            <div class={tw`h-[15vh]`} />
            <div class={tw`md:w-3/4 mx-auto`}>
                {
                    data.map((e: Post, i: number) => (
                        <div class={tw`mb-4`}>
                            <div class={tw`flex flex-row`}>
                                <h1 class={tw`font-bold`}>{e.title}</h1>
                                &nbsp;
                                <p>-</p>
                                &nbsp;
                                <h4>{new Date(e.publishedAt).toLocaleDateString()}</h4>
                            </div>
                            <BlockContent values={e.body} truncated />
                            <a href={`/blog/${e.slug}`} class={tw`text-blue-medium inline`}>Read more.</a>
                        </div>
                    ))
                }
            </div>
        </Layout >
    );
}
