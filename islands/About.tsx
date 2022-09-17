/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

export default () => {
    return (
        <div id="about" data-scrollspy="#about" class={tw`grid-cols-5 text-white`}>
            <div class={tw`absolute top-[50vh] left-0 w-screen bg-blue-dark h-[50vh] -z-10`} />
            <div class={tw`col-span-5 h-[30vh] grid grid-cols-5 grid-rows-2 gap-1 z-50`}>
                <h1 class={tw`my-auto font-ultralight text-4xl col-span-3 row-start-1 row-end-2 tracking-wide`}>
                    About Navab Law, APC
                </h1>
                <p class={tw`col-span-5 my-auto row-start-2 row-end-3`}>
                    We advocate for victims of civil rights violations, workplace discrimination, and personal injury. Since its founding in 2016, Navab Law has striven to hold police officers, corporations and institutions accountable for harm they cause. Our passion for and expertise in civil rights have led our cases to the Ninth Circuit of Appeals and many successful verdicts.
                </p>

            </div>

        </div>
    )
}