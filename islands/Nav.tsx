/** @jsx h */
import { h, Fragment } from "preact";
import { useState, useCallback, useEffect } from "preact/hooks"
import { tw } from "twind";
import ScrollSpy from "./ScrollSpy.tsx"

export default () => {
    const [inView, setInView] = useState<string | undefined>()

    const setScrollSpy = useCallback((id: string) => {
        setInView(id);
    }, []);

    return (
        <div>
            <ScrollSpy setter={setScrollSpy} />
            <div id="nav-scroll" class={tw`bg-gradient-to-r pb-1 from-blue-300 to-blue-600 fixed w-screen left-0 top-0 flex flex-col z-50`}>
                <div class={tw`bg-white`}>
                    <div class={tw`mx-auto w-6/12 py-2 flex flex-row`}>
                        <img
                            src="/logo.svg"
                            width="50"
                            alt="the fresh logo: a sliced lemon dripping with juice"
                            class={tw`border-transparent border-2 rounded-md mr-auto`}
                        />
                        <p class={inView === "#about" ? tw`ml-auto my-auto px-6 text-blue-medium border-r-1` : tw`ml-auto my-auto px-6 border-r-1`}>About</p>
                        <p class={inView === "#quickfacts" ? tw`my-auto px-6 text-blue-medium border-r-1` : tw`my-auto px-6 border-r-1`}>Results</p>
                        <p class={inView === "#specialities" ? tw`my-auto px-6 text-blue-medium` : tw`my-auto px-6`}>Specialities</p>
                    </div>
                </div>
            </div>
        </div>
    )
}