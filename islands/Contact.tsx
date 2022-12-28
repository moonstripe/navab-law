/** @jsx h */
import { useEffect, useState } from "preact/hooks";
import { h } from "preact";
import { tw } from "twind";

export default () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [reason, setReason] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    useEffect(() => {
        // check for localstorage on first render
        if (localStorage.getItem('nl_timeout')) {
            let timeout = localStorage.getItem('nl_timeout')
            let now = new Date().getTime().toString()
            if (now < timeout) {
                setError("Please allow at least 24 hours for us to respond before sending us another request.");
                setSuccess("")
            }
        }
    }, [])

    const handleName = (e: Event) => {
        const target = e?.target as HTMLInputElement
        setName(target.value)
    }

    const handleEmail = (e: Event) => {
        const target = e?.target as HTMLInputElement
        setEmail(target.value)
    }

    const handleReason = (e: Event) => {
        const target = e?.target as HTMLTextAreaElement
        setReason(target.value)
    }

    const handleSubmit = async (e: Event) => {
        setError('')
        e.preventDefault();

        if (localStorage.getItem('nl_timeout') && parseInt(new Date().getTime().toString()) <= parseInt(localStorage.getItem('nl_timeout')!)) {
            setError("Please allow at least 24 hours for us to respond before sending us another request.")
            setSuccess("")

            return
        } else if (name.length < 1) {
            setError("You haven't added your name.")
        } else if (email.length < 6 || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setError('You have entered an invalid email address.')

            return
        } else {
            const currentDate = new Date();

            const tomorrowDate = currentDate.setDate(currentDate.getDate() + 1)

            localStorage.setItem('nl_timeout', new Date(tomorrowDate).getTime().toString())
        }

        const b = JSON.stringify(
            {
                name: name,
                email: email,
                reason: reason
            }
        )

        const response = await fetch('/emailApi', {
            method: "POST",
            body: b,
            headers: {
                'content-type': 'application/json'
            }
        })

        const result = await response.json()

        if (result.data === 'success') {
            setSuccess('Message received. We will contact you as soon as possible.')
        } else {
            setError('Something went wrong. Try again in a few minutes.');
            localStorage.removeItem('nl_timeout');
        }
    }

    return (
        <div data-scrollspy="#contact" class={tw`grid grid-cols-4 gap-2 w-5/6 lg:w-2/3 mx-auto pb-8 h-auto`}>
            <div class={tw`lg:absolute lg:top-[250vh] left-0 w-screen bg-white h-0 lg:h-[50vh] z-0`}>
                <div id="contact" class={tw`relative top-[-100px]`} />
            </div>
            <h1 class={tw`mt-4 lg:mt-8 mb-0 lg:mb-auto font-ultralight text-4xl col-span-4 tracking-wide z-40 `}>
                Contact Us
            </h1>
            <div class={tw`col-span-4 h-[50vh] top-[-30vh] lg:top-0 grid grid-cols-4 grid-rows-2 gap-2 text-blue-dark w-full`}>
                <div class={tw`flex-col col-span-4 lg:col-start-1 lg:col-end-3 row-start-1 lg:row-span-2 z-40`}>
                    <h1 class={tw`mt-8 lg:mt-auto mb-2 font-ultralight text-2xl col-span-4 tracking-wide z-40 `}>
                        In person:
                    </h1>
                    <iframe class={tw`z-40 col-span-4 lg:mt-4 mb-0 grow rounded`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.315569426085!2d-118.4390188847868!3d33.98442728062456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ba7dcd5f6bd9%3A0x4c30f38188c12288!2sNAVAB%20LAW%2C%20APC!5e0!3m2!1sen!2sus!4v1665506900415!5m2!1sen!2sus" style="border:0;width:100%;height:100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class={tw`flex-col col-span-4 lg:col-start-3 lg:col-end-5 row-start-2 lg:row-span-2 z-40`}>
                    <h1 class={tw`mt-20 lg:mt-0 mb-2 font-ultralight text-2xl col-start-3 col-end-5 tracking-wide text-blue-dark`}>
                        By email:
                    </h1>
                    {
                        error.length > 0 ? (
                            <p class={tw`my-auto font-ultralight text-sm col-start-3 col-end-5 tracking-wide text-red-500`}>
                                {error}
                            </p>
                        ) : null
                    }
                    {
                        success.length > 0 ? (
                            <p class={tw`my-auto font-ultralight text-sm col-start-3 col-end-5 tracking-wide text-green-500`}>
                                {success}
                            </p>
                        ) : null
                    }
                    <div class={tw`my-auto font-ultralight text-4xl col-start-3 col-end-5 tracking-wide flex flex-col font-md text-xl grow`}>
                        <input onInput={(e) => handleName(e)} type="name" placeholder='Full name' required class={tw`bg-blue-dark my-2 h-auto text-white px-2 py-1 rounded-lg`} />
                        <input onInput={(e) => handleEmail(e)} type="email" placeholder='Email' class={tw`bg-blue-dark my-2 h-auto text-white px-2 py-1 rounded-lg`} />
                        <textarea onInput={(e) => handleReason(e)} rows={5} placeholder="Reason for Inquiry" class={tw`bg-blue-dark my-2 h-auto text-white px-2 py-1 rounded-lg`} />
                        <button onClick={handleSubmit} class={error.length > 0 ? tw`my-2 mx-auto px-2 py-1 text-blue-light` : tw`my-2 mx-auto px-2 py-1 border-2 rounded-lg`}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}