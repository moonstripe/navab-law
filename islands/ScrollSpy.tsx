/** @jsx h */
import { h } from "preact"
import { useLayoutEffect, useEffect, useState } from "preact/hooks";
import { ScrollSpyProps } from "../utils/types/index.ts";


export default ({ setter }: ScrollSpyProps) => {
    // console.log(typeof setter)

    const [scroll, setScroll] = useState<number>(0)

    const isInViewPort = (entry: IntersectionObserverEntry, offset = 200) => {
        const rect = entry.boundingClientRect;
        return rect.top - 1 <= 0 + offset && rect.bottom >= 0 + offset;
    };

    if (typeof setter === "function") {
        useLayoutEffect(() => {
            addEventListener("scroll", () => setScroll(window.scrollY))
        }, []);

        useEffect(() => {
            const scrollables: NodeListOf<Element> = document.querySelectorAll("[data-scrollspy]");
            // console.log(scrollables)
            scrollables.forEach((scrollable) => {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (isInViewPort(entry)) {
                                console.log(entry)
                                const active = `#${entry.target.id}`;

                                console.log(active)
                                document.querySelector(`#${entry.target.id}-nav`)?.classList.add('text-red-400');
                                document.querySelector(`#${entry.target.id}-nav`)?.classList.add('my-4');
                                setter(active);
                            }
                            document.querySelector(`#${entry.target.id}-nav`)?.classList.remove('text-red-400')
                            document.querySelector(`#${entry.target.id}-nav`)?.classList.remove('my-4')
                        });
                    },
                    {
                        root: null,
                        rootMargin: "0px 0px 100% 0px",
                        threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
                    }
                );
                observer.observe(scrollable);
            })
        }, [scroll, setter])
    }

    return (
        <div style={{ height: '0px' }} />
    );
}