/** @jsx h */
import { h } from "preact"
import { useEffect, useState } from "preact/hooks"
import { tw } from "twind"
import { TickerProps } from '../utils/types/index.ts'

export default ({ postArr }: TickerProps) => {
    const [offset, setOffset] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            let curr = offset;
            if (curr === postArr.length - 1) {
                setOffset(0)
            } else {
                curr++
                setOffset(curr)
            }

        }, 10000)

        return () => clearInterval(interval)
    }, [offset])
 
    return (
        <div class={tw`w-screen h-[4vh] fixed left-0 z-50 bg-white flex flex-col`}>
            {
                postArr.length > 0 ? (
                    <a class={tw`my-auto mx-auto text-blue-medium font-light`} href={`/blog/${postArr[offset].slug}`}>{`${postArr[offset].title} - ${new Date(postArr[offset].publishedAt).toLocaleDateString()}`}</a>
                ) : null
            }
        </div>
    )
}