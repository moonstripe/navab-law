/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import Layout from "../components/Layout.tsx";
import { Meta, Post } from "../utils/types/index.ts";
import Hero from "../islands/Hero.tsx";
import Nav from "../islands/Nav.tsx";
import About from "../islands/About.tsx";
import Specialities from "../islands/Specialities.tsx";
import QuickFacts from "../islands/QuickFacts.tsx";
import Contact from "../islands/Contact.tsx";
import { PageProps, Handlers } from "fresh/server.ts";

import { runQuery } from "../utils/sanity.ts"

export const handler: Handlers<Post | null> = {
  async GET(_, ctx) {
      const raw = await runQuery(`
      *[_type == "post"] | order(publishedAt desc) {
        title,
        body,
        publishedAt,
        "slug": slug.current
      }
      `);

      return ctx.render(raw);
  },
};

export default function Home({data}: PageProps) {
  const meta: Meta = {
    title: "Navab Law",
    type: "website",
    description: "The best law firm this side of the Mississippi"
  }

  return (
    <Layout meta={meta}>
      {/* ScrollSpy and Nav */}
     <Nav postArr={data} hasTicker/>
     <div class={tw`h-[15vh] mb-1`}/>

      {/* Main content */}
      <main id="content">
        {/* Hero image and text */}
        <Hero/>

        {/* About Navab */}
        <About/>

        {/* Quick Facts */}
        <QuickFacts/>

        {/* Specialities */}
        <Specialities/>

        {/* Contact */}
        <Contact/>
        
      </main>
      {/* Footer */}
    </Layout>
  );
}
