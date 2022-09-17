/** @jsx h */
import { IS_BROWSER } from "fresh/runtime.ts"
import { h } from "preact"
import { tw } from "twind"

export default () => {

    const handleAbout = () => {
        if (IS_BROWSER) {
            const t: number | undefined = document.getElementById("nav-scroll")?.offsetHeight;

            const dest: number | undefined = document.getElementById("about")?.offsetHeight;

            console.log(t, dest)

            if (typeof t === "number" && typeof dest === "number") {
                window.scrollTo({
                    top: dest - t,
                    behavior: 'smooth'
                })
            }
        }
    }

    return (
        <div id="hero" data-scrollspy="#hero" class={tw`grid grid-cols-5 group`}>
            <div class={tw`absolute top-0 left-0 w-screen bg-gradient-to-b from-blue-medium via-blue-medium via-blue-medium to-blue-dark h-[66vh] z-0`} />
            <div class={tw`col-span-5 h-[66vh] grid grid-cols-5 grid-rows-5 gap-1 z-10`}>
                <img
                    class={tw`mb-0 mt-auto border-8 rounded-full col-start-1 col-end-3 row-start-2 row-end-6 w-auto justify-end`}
                    src="/img/linkedinpic.jpeg"
                    alt="A headshot of Kaveh Navab, APC" />
                <p class={tw`text-right col-start-3 col-end-5 row-start-3 row-end-4 mt-0 font-semibold text-4xl text-white`}>
                At Navab Law,
                </p>
                <p class={tw`mb-2 mt-auto text-left col-start-4 col-end-6 row-start-3 row-end-4 text-2xl font-bold text-white`}>
                we will do what it takes.
                </p>
                <p class={tw`mt-0 text-left col-start-3 col-end-6 row-start-4 row-end-5 my-auto mx-auto w-2/3 text-md font-light text-white`}>
                Kaveh Navab founded Navab Law, APC in 2016 with the goal of bringing justice to individuals affected by discrimination, civil rights violations, and personal injury.
                </p>
                <div class={tw`row-start-5 row-end-6 col-start-3 col-end-6 flex flex-col`}>
                    <div class={tw`flex flex-row my-auto`}>
                        <button onClick={handleAbout} class={tw`text-white border-2 border-white ml-auto mr-2 my-auto px-4 py-2 rounded-lg group-hover:animate-down animate-none flex`}>
                            <p class={tw`m-auto pr-0.5 align-middle`}>Learn More</p>
                            <img
                                class={tw`m-auto pr-0.5 align-middle`}
                                src="/svg/down.svg"
                                width="24"
                                alt="two down-facing chevrons" />
                        </button>

                        <button class={tw`text-blue-medium bg-white mr-auto ml-2 my-auto px-4 py-2 rounded-lg flex`}>
                            <p class={tw`m-auto pr-0.5 align-middle`}>Contact Now</p>
                            <img class={tw`m-auto pl-0.5 align-middle`} 
                            src="/svg/phone.svg" 
                            width="24" 
                            alt="two down-facing chevrons" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}