/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

export default () => {
    return (
        <div id="quickfacts" data-scrollspy="#quickfacts" class={tw`grid-cols-4`}>
            <div class={tw`absolute top-[100vh] left-0 w-screen bg-white h-[25vh] z-0`} />
            <div class={tw`col-span-4 h-[25vh] grid grid-cols-4 grid-rows-2 gap-1 text-blue-dark`}>
                <h1 class={tw`mb-0 mt-auto font-ultralight text-4xl col-span-3 row-start-1 row-end-2 tracking-wide z-40 `}>
                    Results at a Glance
                </h1>
                <div class={tw`col-span-1 my-auto row-start-2 row-end-3 z-40 flex flex-col h-full border-right border-r-2 border-blue-light my-4`}>
                    <h4 class={tw`mx-auto mb-auto mt-auto font-light`}>Verdicts</h4>
                    <p class={tw`mx-auto mt-auto mb-auto font-thin text-2xl`}>XXXX</p>
                </div>
                <div class={tw`col-span-1 my-auto row-start-2 row-end-3 z-40 flex flex-col h-full border-right border-r-2 border-blue-light my-4`}>
                    <h4 class={tw`mx-auto mb-auto mt-auto font-light`}>Settlements</h4>
                    <p class={tw`mx-auto mt-auto mb-auto font-thin text-2xl`}>XXXX</p>
                </div>
                <div class={tw`col-span-1 my-auto row-start-2 row-end-3 z-40 flex flex-col h-full border-right border-r-2 border-blue-light my-4`}>
                    <h4 class={tw`mx-auto mb-auto mt-auto font-light`}>Statistic 3</h4>
                    <p class={tw`mx-auto mt-auto mb-auto font-thin text-2xl`}>XXXX</p>
                </div>
                <div class={tw`col-span-1 my-auto row-start-2 row-end-3 z-40 flex flex-col h-full my-4`}>
                    <h4 class={tw`mx-auto mb-auto mt-auto font-light`}>Statistic 4</h4>
                    <p class={tw`mx-auto mt-auto mb-auto font-thin text-2xl`}>XXXX</p>
                </div>
            </div>

        </div>
    )
}