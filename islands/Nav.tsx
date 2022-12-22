/** @jsx h */
import { h, Fragment } from "preact";
import { useState, useCallback } from "preact/hooks"
import { tw } from "twind";
import { NavProps } from '../utils/types/index.ts'
import ScrollSpy from "./ScrollSpy.tsx"
import Ticker from "./Ticker.tsx"

export default ({postArr, hasTicker}: NavProps) => {
    const [inView, setInView] = useState<string | undefined>()

    const setScrollSpy = useCallback((id: string) => {
        setInView(id);
    }, []);

    return (
        <div class={tw`fixed z-50 left-0 top-0`}>
            <ScrollSpy setter={setScrollSpy} />
            <div id="nav-scroll" class={tw`bg-gradient-to-r pb-1 from-blue-300 to-blue-600 w-screen left-0 top-0 flex flex-col z-50`}>
                <div class={tw`bg-white h-[11vh]`}>
                    <div class={tw`mx-auto w-5/6 lg:w-6/12 py-2 flex flex-row h-full`}>
                        <a href="/" class={tw`flex flex-row`}>
                            <img
                                src="/svg/logo.svg"
                                width="50"
                                alt="Navab Law Icon"
                                class={tw`border-transparent border-2 rounded-lg mr-2`}
                            />
                            <img
                                src="/svg/text.svg"
                                width="200"
                                alt="Navab Law Text"
                                class={tw`border-transparent border-2 rounded-lg mr-auto lg:visible invisible`}
                            />
                        </a>
                        <div class={tw`flex flex-col lg:flex-row my-auto`}>
                            <div  class={tw`flex flex-row lg:my-0 mt-0 mb-0.5 `}>
                                <p class={inView === "#about" ? tw`ml-auto my-auto px-1 lg:px-6 text-blue-medium border-r-1` : tw`ml-auto my-auto px-1 lg:px-6 border-r-1`}><a href="/#about-off">About</a></p>
                                <p class={inView === "#quickfacts" ? tw`my-auto px-1 lg:px-6 text-blue-medium border-r-1` : tw`my-auto px-1 lg:px-6 border-r-1`}><a href="/#quickfacts-off">Results</a></p>
                                <p class={inView === "#specialities" ? tw`my-auto px-1 lg:px-6 text-blue-medium` : tw`my-auto px-1 lg:px-6`}><a href="/#specialities-off">Specialities</a></p>
                            </div>
                        <a href={'tel:+13108261002'} class={tw`text-blue-dark mt-0.5 mb-0 lg:my-0 mx-auto lg:ml-auto lg:mr-0 text-[#f59e0b]`}>(310) 826-1002</a>
                        </div>
                    </div>
                </div>
            </div>
            {
                hasTicker ? <Ticker postArr={postArr}/> : null
            }
        </div>
    )
}