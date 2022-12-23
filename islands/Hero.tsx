/** @jsx h */
import { IS_BROWSER } from "fresh/runtime.ts"
import { h } from "preact"
import { tw } from "twind"

export default () => {

    return (
        <div id="hero" data-scrollspy="#hero" class={tw`grid grid-cols-5 group`}>
            <div class={tw`absolute top-[15vh] mt-1 left-0 w-screen bg-gradient-to-b from-blue-medium via-blue-medium via-blue-medium to-blue-dark h-[100vh] lg:h-[50vh] z-0`} />
            <div class={tw`col-span-full h-[100vh] lg:h-[50vh] grid grid-cols-5 grid-rows-4 lg:grid-rows-6 lg:grid-rows-3 pt-12 gap-0 z-10`}>

                <img
                    class={tw`mb-0 mt-8 border-8 rounded-full col-span-full row-start-1 row-end-2 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-4 w-auto justify-end`}
                    src="/img/linkedinpic.jpeg"
                    alt="A headshot of Kaveh Navab, APC" />

                <img
                    src="/svg/text_white.svg"
                    width="350"
                    alt="Navab Law Text in White"
                    class={tw`mt-32 lg:mt-auto lg:mr-0 lg:mb-[-4vh] lg:ml-16 color-white border-transparent border-2 rounded-lg text-center lg:text-right col-span-full row-start-2 row-end-3 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-2 font-semibold text-2xl font-bold lg:text-4xl text-white`}
                />

                {/* <p class={tw`text-center lg:text-right col-span-full row-start-2 row-end-3 lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-2 mt-auto mb-0 font-semibold text-2xl font-bold lg:text-4xl text-white`}>
                    Navab Law,
                </p> */}
                <p class={tw`mt-8 lg:mt-0 mb-auto ml-4 lg:ml-0 text-left col-span-full row-start-3 row-end-4 lg:col-start-4 lg:col-end-6 lg:row-start-2 lg:row-end-3 text-2xl font-bold text-white`}>
                    in the pursuit of justice.
                </p>
                <p class={tw`text-left col-span-full invisible lg:visible lg:col-start-3 lg:col-end-6 row-start-2 row-start-3 lg:row-start-2 lg:row-end-4 mt-12 mx-auto w-full lg:w-2/3 text-md font-light text-white`}>
                    Kaveh Navab founded Navab Law, APC with the goal of bringing justice to individuals affected by discrimination, civil rights violations, and injury from negligence.
                </p>
                <div class={tw`col-span-full row-start-3 row-end-4 lg:row-start-4 lg:row-end-5 lg:col-start-3 lg:col-end-6 flex flex-col pt-4`}>
                    <div class={tw`flex flex-row mb-0 mt-auto`}>
                        <button class={tw`bg-white ml-auto mr-2 my-auto px-4 py-2 h-full rounded-lg lg:group-hover:animate-down animate-none flex grow`}>
                            <a href='/#about-off' class={tw`flex flex-row my-auto`}>
                                <img
                                    class={tw`m-auto pr-0.5 align-middle`}
                                    src="/svg/down.svg"
                                    width="24"
                                    alt="two down-facing chevrons" />
                            </a>
                        </button>
                        <button class={tw`text-white border-2 border-white mr-auto ml-2 my-auto px-4 py-2 rounded-lg flex`}>
                            <a href='/#contact' class={tw`flex flex-row`}>
                                <p class={tw`m-auto pr-0.5 align-middle`}>Free Case Evaluation</p>
                                <img class={tw`m-auto pl-0.5 align-middle`}
                                    src="/svg/phone.svg"
                                    width="24"
                                    alt="phone icon" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}