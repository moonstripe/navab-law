/** @jsx h */
import { h } from "preact";
import { useState, useCallback, useEffect } from "preact/hooks";
import { tw } from "@twind";
import Layout from "../components/Layout.tsx";
import { Meta } from "../utils/types/index.ts";
import ScrollSpy from "../islands/ScrollSpy.tsx";
import Hero from "../islands/Hero.tsx";
import Nav from "../islands/Nav.tsx";
import About from "../islands/About.tsx";
import Specialities from "../islands/Specialities.tsx";
import QuickFacts from "../islands/QuickFacts.tsx";

export default function Home() {
  const meta: Meta = {
    title: "Navab Law",
    type: "website",
    description: "The best law firm this side of the Mississippi"
  }

  return (
    <Layout meta={meta}>
      {/* ScrollSpy and Nav */}
     <Nav/>

      {/* Main content */}
      <section id="content">
        {/* Hero image and text */}
        <Hero/>

        {/* About Navab */}
        <About/>

        {/* Quick Facts */}
        <QuickFacts/>

        {/* Specialities */}
        <Specialities/>

        {/* Contact */}

      </section>
      {/* Footer */}

      {/* Todo Implement Footer (contact) */}
    </Layout>
  );
}
