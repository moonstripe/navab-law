/** @jsx h */
import { h, Fragment } from "preact";
import { useState, useCallback } from "preact/hooks"
import { tw } from "twind";
import { NavProps } from '../utils/types/index.ts'
import ScrollSpy from "./ScrollSpy.tsx"
import Ticker from "./Ticker.tsx"

export default ({ postArr, hasTicker }: NavProps) => {
    const [inView, setInView] = useState<string | undefined>()

    const setScrollSpy = useCallback((id: string) => {
        setInView(id);
    }, []);

    return (
        <div class={tw`fixed z-50 left-0 top-0`}>
            <ScrollSpy setter={setScrollSpy} />
            <div id="nav-scroll" class={tw`bg-gradient-to-r pb-1 from-blue-300 to-blue-600 w-screen left-0 top-0 flex flex-col z-50`}>
                <div class={tw`bg-white h-[120px] lg:h-[11vh] pt-3 lg:pt-1`}>
                    <div class={tw`w-5/6 lg:w-2/3 mx-auto flex-row my-auto`}>
                        <div class={tw`ml-0 mr-auto h-full flex flex-row pt-1`}>
                            <a href="/" class={tw`ml-0 mr-0 flex flex-row`}>
                                <img
                                    src="/svg/logo.svg"
                                    width="50"
                                    alt="Navab Law Icon"
                                    class={tw`border-transparent border-2 rounded-lg mr-2 my-auto`}
                                />
                                <img
                                    src="/svg/text.svg"
                                    width="200"
                                    alt="Navab Law Text"
                                    class={tw`border-transparent border-2 rounded-lg mr-auto lg:visible invisible my-auto`}
                                />
                            </a>
                            <div class={tw`flex flex-col lg:flex-row w-full`}>
                                <div class={tw`flex flex-row lg:ml-auto lg:mr-auto text-lg`}>
                                    <p class={inView === "#about" ? tw`ml-auto my-auto px-3 lg:px-9 text-blue-medium border-r-1` : tw`ml-auto my-auto px-3 lg:px-9 border-r-1`}><a href="/about">About</a></p>
                                    <p class={inView === "#quickfacts" ? tw`my-auto px-3 lg:px-9 text-blue-medium border-r-1` : tw`my-auto px-3 lg:px-9 border-r-1`}><a href="/blog">Blog</a></p>
                                    <p class={inView === "#specialities" ? tw`my-auto px-3 lg:px-9 text-blue-medium` : tw`my-auto px-3 lg:px-9`}><a href="/specialties">Specialties</a></p>
                                </div>
                                <div class={tw`flex flex-col lg:ml-auto lg:mr-0 my-auto`}>
                                    <a href={'tel:+13108261002'} class={tw`text-center text-[#f59e0b] text-sm`}>(310) 826-1002</a>
                                    <a href={'https://www.google.com/maps/place/NAVAB+LAW,+APC/@33.9844273,-118.4390189,17z/data=!3m2!4b1!5s0x80c2ba760ff213a5:0x726e415956a54b58!4m5!3m4!1s0x80c2ba7dcd5f6bd9:0x4c30f38188c12288!8m2!3d33.9844273!4d-118.4368302'}>
                                        <p class={tw`text-blue-medium text-center text-sm`}>{'13160 Mindanao Way Ste. 280'}</p>
                                        <p class={tw`text-blue-medium text-center text-sm`}>{'Marina Del Rey, CA 90292'}</p>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {
                hasTicker ? <Ticker postArr={postArr} /> : null
            }
        </div>
    )
}