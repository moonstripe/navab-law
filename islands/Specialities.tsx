/** @jsx h */
import { h, Fragment } from "preact"
import { useState } from "preact/hooks"
import { tw } from "twind"

export default () => {

    const [content, setContent] = useState<number>(0)

    const handleClick = (e: any) => {
        setContent(parseInt(e.target.id))
    }

    return (
        <div id="specialities" data-scrollspy="#specialities" class={tw`grid grid-cols-3 text-white`}>
            <div class={tw`absolute top-[125vh] left-0 w-screen bg-blue-dark h-[100vh] -z-10`} />
            <div class={tw`col-span-full h-[100vh] grid grid-cols-3 grid-rows-5 gap-1 z-40 stroke-white`}>
                <h1 class={tw`my-auto font-ultralight text-4xl col-span-3 row-start-1 row-end-2 tracking-wide`}>
                    Specialities
                </h1>
                <button onClick={handleClick} id="0" class={tw`col-start-1 col-end-2 row-start-2 row-end-3 outline-none focus:outline-none`}>
                    <h4 id="0" class={tw`text-white w-max text-xl mx-auto`}>Civil Rights</h4>
                    <img id="0" src="/svg/civ_rights.svg" class={tw`z-40 w-[10vw] h-[10vw] mx-auto`} />
                </button>
                <button onClick={handleClick} id="1" class={tw`col-start-2 col-end-3 row-start-2 row-end-3 outline-none focus:outline-none`}>
                    <h4 id="1" class={tw`text-white w-max text-xl mx-auto`}>Personal Injury</h4>
                    <img id="1" src="/svg/personal_inj.svg" class={tw`z-40 w-[10vw] h-[10vw] mx-auto`} />
                </button>
                <button onClick={handleClick} id="2" class={tw`col-start-3 col-end-4 row-start-2 row-end-3 outline-none focus:outline-none`}>
                    <h4 id="2" class={tw`text-white w-max text-xl mx-auto`}>Employment</h4>
                    <img id="2" src="/svg/employ.svg" class={tw`z-40 w-[10vw] h-[10vw] color-blue-light mx-auto`} />
                </button>

                <div class={tw`col-span-full row-start-3 row-end-5 my-auto`}>

                    {
                        content === 0 ? (
                            <Fragment>
                                <h1 class={tw`text-2xl my-4 tracking-wide text-bold`}>
                                    At Navab Law, we take pride in our efforts to defend individual rights and liberties.
                                </h1>
                                <p class={tw`font-light`}>
                                    Navab Law is committed to achieving justice for families affected by civil rights violations, neglect, violence and death, particularly as a result of police brutality. Our firm acknowledges the disproportionately higher rates of civil rights’ violations in communities of color, and we are determined to help individuals affected by systemic racism.
                                </p>
                            </Fragment>
                        ) : null
                    }

                    {

                        content === 1 ? (
                            <Fragment>
                                <h1 class={tw`text-2xl my-4 tracking-wide text-bold`}>
                                    Navab Law strives to protect the rights of those who are injured due to the carelessness of others.
                                </h1>
                                <p class={tw`font-light`}>
                                    Serious injury or death can change many lives, and through successful litigation, we hope to restore some dignity and stability to those affected. Our firm handles a myriad of personal injury issues, from medical malpractice to wrongful death.
                                </p>
                            </Fragment>
                        ) : null
                    }

                    {
                        content === 2 ? (
                            <Fragment>
                                <h1 class={tw`text-2xl my-4 tracking-wide text-bold`}>
                                    Everyone deserves to feel safe at work, regardless of sex, race, gender expression, or any other identity marker.
                                </h1>
                                <p class={tw`font-light`}>
                                    Navab Law recognizes that workplace discrimination is a pervasive issue, and we are determined to protect workers at all costs. We assist clients in dealing with a wide range of employment law issues, including discrimination, harassment, wrongful discharge, retaliation, and unfair labor practices.
                                </p>
                            </Fragment>
                        ) : null
                    }
                </div>
            </div>


        </div>
    )
}