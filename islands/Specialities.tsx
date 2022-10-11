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
        <div id="specialities" data-scrollspy="#specialities" class={tw`text-white`}>
            <div class={tw`absolute top-[290vh] lg:top-[150vh] left-0 w-screen bg-blue-dark h-[250vh] lg:h-[75vh] -z-10`}>
                <div id="specialities-off" class={tw`relative top-[-100px]`} />
            </div>
            <div class={tw`h-[250vh] lg:h-[75vh] z-40 stroke-white flex flex-col`}>
                <h1 class={tw`my-8 font-ultralight text-4xl tracking-wide`}>
                    Specialities
                </h1>
                <div class={tw`flex flex-col lg:flex-row my-0`}>
                    <button onClick={handleClick} id="0" class={tw`outline-none focus:outline-none mx-auto`}>
                        <h4 id="0" class={tw`text-white w-max text-xl mx-auto`}>Civil Rights</h4>
                        <img id="0" src="/svg/civ_rights.svg" class={tw`z-40 w-[50vw] lg:w-[10vw] h-auto mx-auto`} />
                    </button>
                    <button onClick={handleClick} id="1" class={tw`outline-none focus:outline-none mx-auto`}>
                        <h4 id="1" class={tw`text-white w-max text-xl mx-auto`}>Personal Injury</h4>
                        <img id="1" src="/svg/personal_inj.svg" class={tw`z-40 w-[50vw] lg:w-[10vw] h-auto mx-auto`} />
                    </button>
                    <button onClick={handleClick} id="2" class={tw`outline-none focus:outline-none mx-auto`}>
                        <h4 id="2" class={tw`text-white w-max text-xl mx-auto`}>Employment</h4>
                        <img id="2" src="/svg/employ.svg" class={tw`z-40 w-[50vw] lg:w-[10vw] h-auto color-blue-light mx-auto`} />
                    </button>
                </div>

                <div class={tw`row-start-3 row-end-5 my-0 `}>

                    {
                        content === 0 ? (
                            <Fragment>
                                <h1 class={tw`text-lg my-4 tracking-wide text-md lg:text-bold`}>
                                    At Navab Law, we take pride in our efforts to defend individual rights and liberties. The Fourth Amendment of the Constitution protects individuals from “unreasonable searches and seizures,” which means government officials cannot arbitrarily or unreasonably search you or your belongings, nor falsely arrest you, nor use excessive force against you.
                                </h1>
                                <p class={tw`text-sm lg:text-md lg:font-light`}>
                                    Navab Law is committed to achieving justice for families and individuals affected by civil rights violations, negligence of police officers, violence and death, particularly as a result of police brutality. In pursuing litigation, we have a proven track record, and we challenge a broad range of unjust policies, like qualified immunity, ultimately striving for policy change that protects the rights of all people. If you believe you are a victim of civil rights violations, you may be entitled to compensation for your harm.
                                </p>
                            </Fragment>
                        ) : null
                    }

                    {

                        content === 1 ? (
                            <Fragment>
                                <h1 class={tw`text-lg my-4 tracking-wide text-bold`}>
                                    When a person is seriously injured due to the negligence and carelessness of others, it can drastically change and devastate many lives. Through tireless and meticulous litigation, we aim to restore some dignity and stability to all those affected.
                                </h1>
                                <p class={tw`text-md font-light`}>
                                    Our firm has the experience to successfully litigate claims for victims of negligence. We have handled a myriad of personal injury issues, including automobile accidents, catastrophic injury, premises liability and wrongful death. If you believe you are a victim of serious injury due to negligence, you may be entitled to compensation for your harm.
                                </p>
                            </Fragment>
                        ) : null
                    }

                    {
                        content === 2 ? (
                            <Fragment>
                                <h1 class={tw`text-lg my-4 tracking-wide text-bold`}>
                                    Everyone deserves to feel safe at work, regardless of sex, race, age, religion, or gender expression. If you have been the victim of workplace discrimination, this can cause serious stress and harm in your life.
                                </h1>
                                <p class={tw`text-md font-light`}>
                                    Navab Law acknowledges the pernicious effects of workplace discrimination, and we are determined to protect workers at all costs. We assist clients in dealing with a wide range of employment law issues, including discrimination, harassment, wrongful discharge, retaliation, and unfair labor practices. If you believe you are a victim of workplace discrimination, you may be entitled to compensation for your harm.                                </p>
                            </Fragment>
                        ) : null
                    }
                </div>
            </div>


        </div>
    )
}