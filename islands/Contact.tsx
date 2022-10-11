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
            setError("Please allow at least 24 hours for us to respond before sending us another request.");
            setSuccess("")
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
        const target = e?.target as HTMLSelectElement
        setReason(target.value)
    }

    const handleSubmit = async (e: Event) => {
        setError('')
        e.preventDefault();
        
        if (localStorage.getItem('nl_timeout') && new Date().getTime() <= parseInt(localStorage.getItem('nl_timeout')!)) {
            setError("Please allow at least 24 hours for us to respond before sending us another request.")

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
        <div data-scrollspy="#contact" class={tw`grid-cols-4`}>
            <div class={tw`absolute lg:top-[240vh] left-0 w-screen bg-white h-[50vh] z-0`}>
                <div id="contact" class={tw`relative top-[-100px]`}/>
            </div>
            <div class={tw`col-span-4 h-[50vh] grid grid-cols-4 gap-1 text-blue-dark`}>
                <h1 class={tw`my-auto font-ultralight text-4xl col-span-4 tracking-wide z-40 `}>
                    Contact Us
                </h1>
                {
                    error.length > 0 ? (
                        <p class={tw`my-auto font-ultralight text-sm col-span-4 tracking-wide z-40 text-red-500`}>
                            {error}
                        </p>
                    ) : null
                }
                                {
                    success.length > 0 ? (
                        <p class={tw`my-auto font-ultralight text-sm col-span-4 tracking-wide z-40 text-green-500`}>
                            {success}
                        </p>
                    ) : null
                }
                <div class={tw`my-auto font-ultralight text-4xl col-span-4 tracking-wide z-40 flex flex-col font-md text-xl`}>
                    <input onInput={(e) => handleName(e)} type="name" placeholder='Full name' required class={tw`bg-blue-dark my-2 h-auto text-white px-2 py-1 rounded-lg`} />
                    <input onInput={(e) => handleEmail(e)} type="email" placeholder='Email' class={tw`bg-blue-dark my-2 h-auto text-white px-2 py-1 rounded-lg`} />
                    <select onInput={(e) => handleReason(e)} placeholder="Reason for Inquiry" class={tw`bg-blue-dark my-2 h-auto text-white px-2 py-1 rounded-lg`}>
                        <option selected disabled>
                            Reason for Inquiry
                        </option>
                        <option value="civil">
                            Civil Rights
                        </option>
                        <option value="injury">
                            Personal Injury
                        </option>
                        <option value="employment">
                            Employment
                        </option>
                        <option value="other">
                            Other
                        </option>
                    </select>
                    <button onClick={handleSubmit} class={error.length > 0 ? tw`my-2 mx-auto px-2 py-1 text-blue-light` : tw`my-2 mx-auto px-2 py-1 border-2 rounded-lg`}>Submit</button>
                </div>
            </div>
        </div>
    )
}