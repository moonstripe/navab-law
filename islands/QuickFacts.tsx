/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { useEffect, useState } from "preact/hooks"

export default () => {
    const verdictMap = [
        {
            amount: "$7,393,540", title: "Plaintiff v. Corporation Verdict Wrongful Termination"
        },
        {
            amount: "$4,000,000", title: "Plaintiff v. City of Los Angeles Settlement for Excessive Force"
        },
        {
            amount: "$1,500,000", title: "Plaintiff v. School District Settlement for Negligence"
        },
        {
            amount: "$885,000", title: "Plaintiff v. City of Los Angeles, et al. Judgment for Excessive Force"
        },
        {
            amount: "$750,000", title: "Plaintiff v. County of Los Angeles Settlement for Excessive Force"
        },
        {
            amount: "$550,000", title: "Plaintiff v. State of California Settlement for Discrimination"
        },
        {
            amount: "$345,000", title: "Plaintiff v. Corporation Settlement for Unfair Business Practices"
        },
        {
            amount: "$325,000", title: "Auto v. Truck Settlement for Negligence"
        },
        {
            amount: "$175,000", title: "Plaintiff v. City of Los Angeles Verdict for Excessive Force"
        },
        {
            amount: "$100,000", title: "Plaintiff v. City of Laguna Beach, et al. Settlement for Excessive Force"
        }
    ]

    const [offset, setOffset] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            let curr = offset;
            if (curr === verdictMap.length - 1) {
                setOffset(0)
            } else {
                curr++
                setOffset(curr)
            }

            // document.querySelector("#amount")?.

        }, 2500)

        return () => clearInterval(interval)
    }, [offset])

    return (
        <div id="quickfacts" data-scrollspy="#quickfacts" class={tw`grid-cols-2 w-5/6 lg:w-2/3 mx-auto pb-8 lg:pb-0 h-[400px] lg:h-auto`}>
            <div class={tw`lg:absolute lg:top-[175vh] lg:top-[115vh] left-0 w-screen bg-white h-0 lg:h-[35vh] z-0`}>
                <div id="quickfacts-off" class={tw`relative top-[-100px]`} />
            </div>
            <div class={tw`flex flex-col h-[75vh] lg:h-[35vh] text-blue-dark mb-1 shrink`}>
                <h1 class={tw`mt-8 lg:mt-0 mb-4 font-ultralight text-4xl tracking-wide z-40 `}>
                    Results at a Glance
                </h1>
                <div class={tw`flex flex-row grid grid-cols-1 lg:grid-cols-3 mt-2 mb-0 text-black z-40 shrink`}>
                    <div class={tw`col-span-1 lg:col-span-1 mb-4 mt-auto lg:my-0`}>
                        <h1 class={tw`text-2xl font-extrabold`}>Amount</h1>
                        <p class={tw`transition-opacity mt-2 font-bold`} id="amount">{verdictMap[offset].amount}</p>
                    </div>
                    <div class={tw`col-span-1 lg:col-span-2 mt-4 mb-auto lg:my-0`}>
                        <h1 class={tw`text-2xl font-extrabold`}>Case</h1>
                        <p class={tw`transition-opacity mt-2 font-bold`} id="title">{verdictMap[offset].title}</p>
                    </div>
                    <p class={tw`mt-4 lg:mt-8`}>Read more on <a class={tw`text-blue-light`} href={'/blog'}>our blog</a>!</p>
                </div>
            
            </div>

        </div>
    )
}