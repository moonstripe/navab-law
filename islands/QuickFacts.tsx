/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

export default () => {
    return (
        <div id="quickfacts" data-scrollspy="#quickfacts" class={tw`grid-cols-4`}>
            <div class={tw`absolute top-[215vh] lg:top-[115vh] left-0 w-screen bg-white h-[75vh] lg:h-[35vh] z-0`}>
                <div id="quickfacts-off" class={tw`relative top-[-100px]`} />
            </div>
            <div class={tw`flex flex-col h-[75vh] lg:h-[35vh] text-blue-dark mb-1`}>
                <h1 class={tw`mt-8 mb-auto font-ultralight text-4xl tracking-wide z-40 `}>
                    Results at a Glance
                </h1>
                <div class={tw`flex flex-col lg:flex-row mt-0 mb-auto`}>
                    <div class={tw`mx-auto z-40 flex flex-col h-full border-right my-auto`}>
                        <h4 class={tw`mx-auto mb-auto mt-auto font-light`}>Verdicts</h4>
                        <p class={tw`mx-auto mt-auto mb-auto font-thin text-2xl`}>XXXX</p>
                    </div>
                    <div class={tw`mx-auto z-40 flex flex-col h-full border-right my-auto`}>
                        <h4 class={tw`mx-auto mb-auto mt-auto font-light`}>Settlements</h4>
                        <p class={tw`mx-auto mt-auto mb-auto font-thin text-2xl`}>XXXX</p>
                    </div>
                    <div class={tw`mx-auto z-40 flex flex-col h-full border-right my-auto`}>
                        <h4 class={tw`mx-auto mb-auto mt-auto font-light`}>Statistic 3</h4>
                        <p class={tw`mx-auto mt-auto mb-auto font-thin text-2xl`}>XXXX</p>
                    </div>
                    <div class={tw`mx-auto z-40 flex flex-col h-full my-auto`}>
                        <h4 class={tw`mx-auto mb-auto mt-auto font-light`}>Statistic 4</h4>
                        <p class={tw`mx-auto mt-auto mb-auto font-thin text-2xl`}>XXXX</p>
                    </div>
                </div>
            </div>

        </div>
    )
}