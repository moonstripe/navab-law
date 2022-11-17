/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "fresh/runtime.ts";
import { Meta, LayoutProps } from "../utils/types/index.ts"

const SEO = ({ customMeta }: Meta) => {

    const meta: Meta = {
        title: customMeta.meta.title ? customMeta.meta.title : "Navab Law, APC",
        type: customMeta.meta.type ? customMeta.meta.type : "website",
        description: customMeta.meta.description ? customMeta.meta.description : "The best law firm this side of the Mississippi.",
        url: customMeta.meta.url ? customMeta.meta.url : "https://www.navablaw.com/",
        image: customMeta.meta.image ? customMeta.meta.image : "https://www.navablaw.com/logo.png",
        ...customMeta.meta
    }

    return (
        <Head>
            <title>{meta.title}</title>

            {/* Robots.txt */}
            <meta name="robots" content="index, follow" />

            {/* Open Graph */}

            <meta property="og:type" content={meta.type} />

            <meta property="og:title" content={meta.title} />

            <meta property="og:description" content={meta.description} />

            <meta property="og:image" content={meta.image} />

            <meta property="og:image:secure_url" content={meta.image} />

            <meta property="og:url" content={meta.url} />

            <meta property="og:site_name" content={meta.title} />

            <meta property="og:image:type" content="image/svg" />

            <meta property="og:image:alt" content="The Navab Law Logo" />

            {/* Twitter */}

            <meta name="twitter:title" content={meta.title} />

            <meta name="twitter:description" content={meta.description} />

            {/* <meta name="twitter:site" content="@kojinglick" />

            <meta name="twitter:creator" content="@kojinglick" /> */}

            {/* Canonical */}

            <link rel="canonical" href="https://www.navablaw.com/" />

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

        </Head>
    )
}

export default ({ children, ...customMeta }: LayoutProps) => {
    return (
        <div class={tw`w-4/6 mx-auto pb-4 max-w-screen-md overscroll-contain overscroll-y-none`}>
            <SEO customMeta={customMeta} />
            <main>
                {children}
            </main>
        </div>
    )
}