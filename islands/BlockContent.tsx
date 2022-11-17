/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PortableTextProps, Child, Block, Style } from "../utils/types/index.ts";

// This component turns Portable Text values into plain HTML. How do we do that???

/** This component turns Portable Text into plain HTML. 
* Props interface found in utils/types.ts
*/
export default ({ values, truncated, components }: PortableTextProps) => {
    // 'values' store blocks
    const truncString = values[0].children[0].text

    // 'blocks' store children

    // values.forEach(block => {
    //     block.children.forEach((child, i) => console.log(block.markDefs.filter(mD => mD._key === child.marks[i])[0]?.href))
    // })

    // console.log("specific:", values[values.length - 1])

    const styleSwitch = (block: Block) => {
        switch (block.style) {
            case Style.QUOTE:
                return Style.QUOTE;
            case Style.H1:
                return Style.H1;
            case Style.H2:
                return Style.H2;
            case Style.H3:
                return Style.H3;
            case Style.H4:
                return Style.H4;
            default:
                return Style.NORMAL;
        }
    }

    const markDefSwitch = (child: Child, block: Block) => {

        // block level style and list
        const STYLE: Style = styleSwitch(block)

        const isListItem: boolean = block?.listItem === undefined ? false : block?.listItem.length > 0



        if (child.marks.length === 0) {
            return STYLE !== Style.NORMAL ? h(STYLE, { class: tw`inline` }, child.text) : isListItem ? h("li", null, child.text) : h("p", { class: tw`inline` }, child.text)
        }
        if (child.marks.length === 1) {
            switch (child.marks[0]) {
                case 'em':
                    return (
                        STYLE !== Style.NORMAL ? h(STYLE, { class: tw`inline` }, child.text) : isListItem ? h("li", { class: tw`italic` }, child.text) : h("em", { class: tw`inline` }, child.text)
                    )
                case 'strong':
                    return (
                        STYLE !== Style.NORMAL ? h(STYLE, { class: tw`inline` }, child.text) : isListItem ? h("li", { class: tw`font-bold` }, child.text) : h("strong", { class: tw`inline` }, child.text)
                    )
                default:
                    {
                        const href = block.markDefs.filter(mD => mD._key === child.marks[0])[0]?.href;
                        return (
                            STYLE !== Style.NORMAL ? h(STYLE, { class: tw`inline` }, child.text) : isListItem ? h("li", null, h("a", { target: "_blank", rel: "noopener noreferrer", href: href, class: tw`text-blue-600` }, child.text)) : h("a", { target: "_blank", rel: "noopener noreferrer", href: href, class: tw`text-blue-600` }, child.text)
                        )
                    }
            }
        }
        if (child.marks.length > 1) {
            let href: string | undefined;
            const modifiers: string[] = []
            child.marks.forEach((m, j) => {
                if (m.length < 12) {
                    modifiers.push(m)
                } else {
                    href = block.markDefs.filter(mD => mD._key === child.marks[j])[0]?.href;
                }
            })
            return (
                STYLE !== Style.NORMAL ? h(STYLE, { class: tw`inline` }, child.text) : isListItem ? h("li", null, h("a", { target: "_blank", rel: "noopener noreferrer", href: href, class: tw`inline text-blue-600 ${modifiers.includes('em') ? 'italic' : null} ${modifiers.includes('strong') ? 'font-bold' : null}` }, child.text)) : h("a", { target: "_blank", rel: "noopener noreferrer", href: href, class: tw`inline text-blue-600 ${modifiers.includes('em') ? 'italic' : null} ${modifiers.includes('strong') ? 'font-bold' : null}` }, child.text)
            )
        }

    }


    return (
        <div class={tw`text-black`}>
            {

                !truncated ? values.map((block) => (
                    !block.listItem ? (
                        <div class={tw`block mb-2`}>
                            {
                                block.children.map((child, i) => markDefSwitch(child, block))
                            }
                        </div>
                    ) : (
                        <ul class={tw`block mb-2 list-disc list-inside`}>
                            {
                                block.children.map((child, i) => markDefSwitch(child, block))
                            }
                        </ul>
                    )

                )) : (
                    <p>{truncString} ...</p>
                )

            }
        </div>
    )
}