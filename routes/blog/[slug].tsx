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
            *[_type == "post" && slug.current == "${ctx.params.slug}"][0] {
            title,
            "authorName": author -> name,
            "image": mainImage.asset -> url,
            body,
            publishedAt,
            "slug": slug.current
            }`
        );

        return ctx.render(raw);
    },
};

export default ({ data }: PageProps) => {

    const post: Post = data

    const meta: Meta = {
        title: "Navab Law",
        type: "website",
        description: "The best law firm this side of the Mississippi"
    }

    return (
        <Layout meta={meta}>
            <Nav postArr={[]} hasTicker={false}/>
            <div class={tw`h-[15vh]`} />
            <div class={tw`md:w-11/12 mx-auto`}>
                <div class={tw`grid grid-cols-12`}>
                    <div class={tw`col-span-2 pt-1`}>
                        <a href={'/blog'}>
                            <button class={tw`text-white border-2 border-white ml-auto mr-2 my-auto px-2 py-1 rounded-lg flex bg-blue-dark`}>
                                <img
                                    class={tw`m-auto pr-0.5 align-middle rotate-90`}
                                    src="/svg/down.svg"
                                    width="24"
                                    alt="two down-facing chevrons" />
                                <p class={tw`m-auto pr-0.5 align-middle`}>Blog</p>
                            </button>
                        </a>
                    </div>
                    <div class={tw`col-span-10`}>
                        <h1 class={tw`text-4xl mb-1`}>{post.title}</h1>
                        <p class={tw`mb-4 inline`}>{post.authorName} <p class={tw`font-light inline`}>- {new Date(post.publishedAt).toLocaleDateString()}</p></p>
                        <img src={post.image} class={tw`my-2 rounded-md`} />

                        <BlockContent truncated={false} values={post.body} />
                    </div>
                </div>
            </div>
        </Layout >
    );
}
