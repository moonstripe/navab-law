/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { PageProps, Handlers } from "fresh/server.ts";
import { Meta, Post } from "../utils/types/index.ts";
import Layout from "../components/Layout.tsx";

import { runQuery } from "../utils/sanity.ts"
import Nav from "../islands/Nav.tsx";


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

export default ({ data }: PageProps) => {

    const meta: Meta = {
        title: "Navab Law",
        type: "website",
        description: "The best law firm this side of the Mississippi"
    }

    return (
        <Layout meta={meta}>
            {/* ScrollSpy and Nav */}
            <Nav postArr={data} hasTicker />
            <div class={tw`h-[15vh] mb-1`} />

            {/* Main content */}
            <main id="content">
                <div class={tw`my-8`}>
                    <h1 class={tw`text-4xl text-blue-medium`}>
                        About Kaveh Navab
                    </h1>
                    <div class={tw`h-[0.5vh] bg-blue-dark mt-4 mb-4`} />
                    <div class={tw`lg:grid lg:grid-cols-3`}>
                        <div class={tw`col-span-1`}>
                            <div class={tw`mx-2`}>
                                <h1 class={tw`text-2xl mt-4 mb-2 text-blue-medium`}>
                                    Education
                                </h1>
                                <ol class={tw`ml-1 list-inside`}>
                                    <li>
                                        BA UCLA
                                    </li>
                                    <li>
                                        JD/MELP Vermont Law School
                                    </li>
                                </ol>
                                <h1 class={tw`text-2xl mt-4 mb-2 text-blue-medium`}>
                                    Admissions
                                </h1>
                                <ol class={tw`ml-1 list-inside`}>
                                    <li>California State Courts</li>
                                    <li>Central District of California</li>
                                    <li>Eastern District of California</li>
                                    <li>Southern District of California</li>
                                    <li>Northern District of California</li>
                                    <li>Ninth Circuit Court of Appeals</li>
                                </ol>
                                <div class={tw`mt-4 mb-2 grid grid-cols-2 gap-2`}>
                                    <img class={tw`col-span-1 mx-auto w-full`} src="img/mybadge.png"/>
                                    <img class={tw`col-span-1 mx-auto w-full`} src="img/sl-badge-l-w-2021.png"/>
                                </div>
                            </div>
                        </div>

                        <div class={tw`col-span-2`}>
                            <div class={tw`mx-2`}>
                                <h1 class={tw`text-2xl mt-4 mb-2 text-blue-medium`}>Biography</h1>
                                <p class={tw`mt-4 mb-2 ml-1`}>
                                    Kaveh Navab is the founder and lead attorney at Navab Law. Mr. Navab has always been dedicated to giving a voice to the voiceless. Mr. Navab is devoted to providing representation to individuals who have been harmed or had their rights violated by government entities, police, insurance companies and corporations, and discriminatory employers.
                                </p>
                                <p class={tw`my-2 ml-1`}>
                                    Mr. Navab stands by his clients and guides them through difficult times, providing them with dedicated and aggressive advocacy for their rights. He personally oversees all cases from beginning to the end. Mr. Navab has recovered millions for his clients and is responsible for several seven-figure and six-figure verdicts and settlements.
                                </p>
                                <p class={tw`my-2 ml-1`}>
                                    Mr. Navab is an experienced trial lawyer and advocate and has successfully litigated cases through trial in both Federal and State Court against public entities and corporations. In 2016, Mr. Navab represented Yowan Yang in an employment retaliation case and obtained a $7,393,540.00 jury award. In the area of civil rights, Mr. Navab has successfully worked on, and litigated dozens of cases involving police brutality and achieved significant verdicts for his clients including a case that resulted in an $8.8-million verdict for excessive force against the Culver City Police Department. Mr. Navab experience in the civil rights litigation has allowed him to work on several high-profile cases over the years involving serious injury or death. Mr. Navab’s civil rights cases have been featured in the Los Angeles Times and other publications over the years. He has further taken cases up on appeal to the Ninth Circuit Court of Federal Appeals and doesn’t shy from taking on some of the most complex cases.
                                </p>
                                <p class={tw`my-2 mb-4 ml-1`}>
                                    Mr. Navab has been selected to Super Lawyers “Rising Star” for five years in a row from 2017-2021. He graduated from University of California, Los Angeles in 2005 with a Bachelor of Arts in History. He went on to graduate from Vermont Law School where he received his J.D/M.E.L.P in 2010. With over a decade of significant litigation and trial experience, Mr. Navab is committed to achieving justice for his clients who have been harmed by discrimination, harassment, and excessive force.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </Layout>
    )

}