/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

export default () => {
    return (
        <div id="about" data-scrollspy="#about" class={tw`lg:grid-cols-5 text-white`}>
            <div class={tw`absolute top-[65vh] lg:top-[65vh] left-0 w-screen bg-blue-dark h-[115vh] lg:h-[50vh] -z-10`}>
                <div id="about-off" class={tw`relative t-[-100px]`} />
            </div>
            <div class={tw`col-span-5  h-[50vh] lg:h-[50vh] my-auto lg:grid lg:grid-cols-5 lg:grid-rows-2 lg:gap-1 z-50 flex flex-col`}>
                <div class={tw`my-auto lg:col-span-5 lg:row-start-1 lg:row-end-3`}>
                    <h1 class={tw`mt-auto mb-8 font-ultralight text-4xl lg:col-span-5 lg:row-start-1 lg:row-end-2 tracking-wide`}>
                        About Navab Law, APC
                    </h1>
                    <p class={tw`my-8`}>
                        We advocate for victims of civil rights violations, workplace discrimination, and negligence. Since its founding in 2015, Navab Law has striven to hold corporations and government entities accountable for harm they cause. Our passion for and expertise in civil rights and personal injury have led to many successful verdicts and millions of dollars in compensation to deserving clients.
                    </p>
                    <button class={tw`text-white border-2 border-white mt-8 mb-auto px-4 py-2 rounded-lg lg:group-hover:animate-down animate-none flex col-start-3 col-end-4`}>
                        <a href='/about' class={tw`flex flex-row`}>
                            <p class={tw`m-auto pr-0.5 align-middle`}>Read More</p>
                            <img
                                class={tw`m-auto pr-0.5 align-middle`}
                                src="/svg/more.svg"
                                width="24"
                                alt="read more ellipsis" />
                        </a>
                    </button>
                </div>
            </div>

        </div>
    )
}