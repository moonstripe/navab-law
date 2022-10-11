/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

export default () => {
    return (
        <div id="about" data-scrollspy="#about" class={tw`lg:grid-cols-5 text-white`}>
            <div class={tw`absolute top-[115vh] lg:top-[65vh] left-0 w-screen bg-blue-dark h-[100vh] lg:h-[50vh] -z-10`}>
                <div id="about-off" class={tw`relative t-[-100px]`}/>
            </div>
            <div class={tw`col-span-5 h-[100vh] lg:h-[50vh] my-auto lg:grid lg:grid-cols-5 lg:grid-rows-2 lg:gap-1 z-50 flex flex-col`}>
                <h1 class={tw`my-auto font-ultralight text-4xl lg:col-span-5 lg:row-start-1 lg:row-end-2 tracking-wide`}>
                    About Navab Law, APC
                </h1>
                <p class={tw`my-auto lg:col-span-5 lg:row-start-2 lg:row-end-3`}>
                    We advocate for victims of civil rights violations, workplace discrimination, and negligence. Since its founding in 2015, Navab Law has striven to hold police officers, corporations and government entities accountable for harm they cause. Our passion for and expertise in civil rights and personal injury have led to many successful verdicts and millions of dollars in compensation to deserving clients.                </p>

            </div>

        </div>
    )
}