/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { PageProps, Handlers } from "fresh/server.ts";
import { Meta, Post } from "../utils/types/index.ts";
import Layout from "../components/Layout.tsx";

import { runQuery } from "../utils/sanity.ts"
import Nav from "../islands/Nav.tsx";


export const handler: Handlers<Post | null> = {
    async GET(_, ctx) {
        const raw = await runQuery(`
        *[_type == "post"] | order(publishedAt desc) {
          title,
          body,
          publishedAt,
          "slug": slug.current
        }
        `);

        return ctx.render(raw);
    },
};


export default ({ data }: PageProps) => {

    const meta: Meta = {
        title: "Navab Law",
        type: "website",
        description: "The best law firm this side of the Mississippi"
    }

    return (
        <Layout meta={meta}>
            {/* ScrollSpy and Nav */}
            <Nav postArr={data} hasTicker />
            <div class={tw`h-[15vh] mb-1`} />

            {/* Main content */}
            <main id="content">
                <div class={tw`my-8`}>
                    <h1 class={tw`text-4xl text-blue-medium`}>
                        Specialties
                    </h1>
                    <div class={tw`h-[0.5vh] bg-blue-dark mt-4 mb-4`} />
                    <div class={tw`lg:grid lg:grid-cols-3 gap-2 mb-8`} id="civil_rights">
                        <div class={tw`lg:col-start-1 lg:col-end-2`}>
                            <h1 class={tw`text-2xl font-bold text-blue-medium text-center lg:ml-12 lg:text-left`}>
                                Civil Rights
                            </h1>
                            <svg class={tw`lg:w-full`} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 120">
                                <g id="CivilRIghts"><g id="Scale"><line x1="71.312" y1="39.274" x2="74.868" y2="39.274" fill="none" stroke="#274690" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.6" /><line x1="58" y1="39.274" x2="66.371" y2="39.274" fill="none" stroke="#274690" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.6" /><polyline points="62.123 64.368 68.495 44 74.868 64.523" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6" />
                                    <path d="M63.91,64.291h9.171a4.973,4.973,0,0,1,4.973,4.973v8.673a0,0,0,0,1,0,0H58.937a0,0,0,0,1,0,0V69.264A4.973,4.973,0,0,1,63.91,64.291Z" transform="translate(136.99 142.228) rotate(-180)" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6" />
                                    <ellipse cx="68.495" cy="39.274" rx="2.124" ry="2.274" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6" /></g><g mask="url(#mask)">
                                    <g id="Hand"><rect x="40.528" y="32.888" width="3.729" height="7.701" rx="1.401" transform="translate(84.784 73.477) rotate(-180)" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6" /><rect x="44.257" y="30.963" width="3.729" height="9.626" rx="1.592" transform="translate(92.242 71.552) rotate(-180)" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6" /><path d="M51.715,38V31.509A1.606,1.606,0,0,0,50.035,30h-.369a1.606,1.606,0,0,0-1.68,1.509V38" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6" /><path d="M55.444,38V32.357a1.508,1.508,0,0,0-1.592-1.394h-.545a1.507,1.507,0,0,0-1.592,1.394V38" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6" /><path d="M40.528,39.215v7.348a2.521,2.521,0,0,0,.907,2.038,3.646,3.646,0,0,1,1.083,1.7,6.447,6.447,0,0,1,.34,2.133V74.563h9.323V49.2" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6" /><path d="M51.614,45.262c1.445-.537,1.248-3.729-.288-3.765H50.065A1.6,1.6,0,0,1,48.5,39.879V37.646h7.545c1.562-.286,1.472,1.58,1.7,2.533a4.943,4.943,0,0,1,.115.716c.129,1.524.074,8.12-3.168,8.3H52.181" fill="none" stroke="#274690" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.6" /></g></g>
                                    <g id="Sleeve"><path fill="#274690" d="M40.5,89.5V56.453a.953.953,0,0,1,.953-.953h12.2a1.421,1.421,0,0,1,1.42,1.419V89.5Z" /><path stroke="#274690" d="M53.651,56a.92.92,0,0,1,.919.919V89H41V56.453A.458.458,0,0,1,41.453,56h12.2m0-1h-12.2A1.457,1.457,0,0,0,40,56.453V89.61a.391.391,0,0,0,.39.39H55.18a.391.391,0,0,0,.39-.39V56.919A1.925,1.925,0,0,0,53.651,55Z" /></g></g><rect x="22.5" y="22.5" width="75" height="75" rx="12.5" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6" />
                            </svg>
                        </div>
                        <div class={tw`lg:col-span-2`}>
                            <p class={tw`mb-2`}>Police officers are tasked with protecting and serving us.</p>
                            <p class={tw`mb-2`}>Unfortunately, many officers continue to use excessive force or deadly force, which constitutes a civil rights violation under state and federal law.</p>
                            <p class={tw`mb-2`}>Police officers may only use deadly force as a last resort. Should you sustain an injury due to excessive force, Navab Law may be able to get you the compensation you deserve.</p>
                            <p class={tw`mb-2`}>The Fourth Amendment of the Constitution protects all individuals from such acts of force:</p>
                            <p class={tw`mb-2 ml-4`}>“The right of the people to be <strong>secure in their persons</strong>, houses, papers, and effects, <strong>against unreasonable searches and seizures</strong>, shall not be violated, and no warrants shall issue, but upon probable cause, supported by oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.”</p>
                            <p class={tw`mb-2`}>Our firm acknowledges the disproportionately higher rates of civil rights’ violations in communities of color. In pursuing litigation, we have a proven track record, with millions of dollars in compensation for deserving clients. We challenge a broad range of unjust policies, like qualified immunity, ultimately striving for policy change that protects the rights of all individuals. If you were injured by excessive force or your loved one was killed by law enforcement, we are prepared and determined to fight for you. </p>
                            <p class={tw`mb-2`}>At Navab Law, we cover a whole range of civil rights violations, including:</p>
                            <ul class={tw`ml-4 list-disc`}>
                                <li class={tw`mb-2`}><em>Excessive force/Police Brutality</em>: a police officer’s use of more force than what is necessary and appropriate under the circumstances</li>
                                <li class={tw`mb-2`}><em>Wrongful death</em>: a death caused by the negligence or the intentional act of an individual, including the shooting of individuals by police (violation of federal law 42 U.S.C. § 1983)</li>
                                <li class={tw`mb-2`}><em>False arrest</em>: the arresting of an individual without legal justification (i.e. probable cause, arrest warrant)</li>
                                <li class={tw`mb-2`}><em>Police Misconduct</em>: illegal and unethical actions by police officers (violation of federal law 18 U.S.C. § 242)</li>
                                <li class={tw`mb-2`}><em>Injury/Death while in Custody</em>: the injury or death of an individual while detained, incarcerated, pursued for arrest, or transported by law enforcement</li>
                            </ul>
                        </div>
                    </div>
                    <div class={tw`lg:grid lg:grid-cols-3 gap-2 mb-8`} id="personal_injury">
                        <div class={tw`lg:col-start-1 lg:col-end-2`}>
                            <h1 class={tw`text-2xl font-bold text-blue-medium text-center lg:ml-12 lg:text-left`}>
                                Personal Injury
                            </h1>
                            <svg class={tw`lg:w-full`} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                                <g id="PersonalInjury"><path d="M34.528,90C31.755,90,30,87.7,30,84.882V34.092C30,31.262,31.745,30,34.528,30H54.716c2.783,0,5.032,1.262,5.032,4.092V56.923a5.085,5.085,0,0,0,4.961,5.128l10.669.175C83.7,62.226,90,68.667,90,77.128a11.908,11.908,0,0,1-4.286,9.518A16.135,16.135,0,0,1,75.378,90Z" fill="none"/><path d="M59.748,56.923a5.085,5.085,0,0,0,4.961,5.128l10.669.175C83.7,62.226,90,68.667,90,77.128a11.908,11.908,0,0,1-4.286,9.518A16.135,16.135,0,0,1,75.378,90H34.528C31.755,90,30,87.7,30,84.882V34.092C30,31.262,31.745,30,34.528,30H54.716c2.783,0,5.032,1.262,5.032,4.092Z" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6"/><polyline points="59.748 36.529 40.754 46.131 30.504 50.798" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6"/><line x1="71.179" y1="62.162" x2="39.076" y2="90" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6"/><line x1="30" y1="73" x2="41.092" y2="45.897" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6"/><line x1="42.262" y1="30" x2="53.022" y2="39.918" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6"/><line x1="72.514" y1="90" x2="75.378" y2="62.231" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6"/><line x1="74.37" y1="70.295" x2="89.296" y2="70.295" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6"/><line x1="53" y1="78" x2="37.422" y2="55.248" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6"/><line x1="59.748" y1="53.923" x2="40.754" y2="46.131" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6"/><line x1="60" y1="54" x2="45" y2="66" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6"/><line x1="73.23" y1="82.308" x2="82.604" y2="88.055" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6"/></g><rect x="22" y="22" width="75" height="75" rx="12.5" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6"/>
                            </svg>
                        </div>
                        <div class={tw`lg:col-span-2`}>
                            <p class={tw`mb-2`}>Personal injury occurs when negligence or harmful acts by an individual or corporation directly causes someone serious harm. Not only can these injuries cause serious physical and mental anguish, but they also often render people unable to work and diminish their quality of life.</p>
                            <p class={tw`mb-2`}>Dealing with a personal injury can be difficult. Victims and their family members can often suffer serious emotional, physical and financial harm due to catastrophic or serious injuries. Fortunately, at Navab Law, we are here to help every step of the way. We take on a myriad of cases to restore stability and dignity to our clients, including:</p>
                            <ul class={tw`ml-4 list-disc`}>
                                <li class={tw`mb-2`}><em>Pedestrian accidents</em>: a collision between a human on foot and a motor vehicle or bicycle that causes injury or damage</li>
                                <li class={tw`mb-2`}><em>Auto accidents</em>: a collision between a motor vehicle and another object that causes injury or damage</li>
                                <li class={tw`mb-2`}><em>Motorcycle accidents</em>: a collision between a motorcycle and another object that causes injury or damage</li>
                                <li class={tw`mb-2`}><em>Catastrophic injury</em>: a sudden and serious injury that has life-changing impacts and leaves the victim with permanent damage</li>
                                <li class={tw`mb-2`}><em>Premises liability</em>: an injury that takes place on an individual’s property due to that property’s unsafe conditions</li>
                                <li class={tw`mb-2`}><em>Wrongful death</em>: a death caused by the negligence or intentional act of another</li>
                                <li class={tw`mb-2`}><em>Traumatic brain injury</em>: an injury that causes damage to the brain and affects how the brain functions</li>
                                <li class={tw`mb-2`}><em>Intentional acts of violence</em>: the use of physical force by an individual or group so as to intentionally injure another individual</li>
                                <li class={tw`mb-2`}><em>School negligence</em>: a school’s failure to protect a student or students from foreseeable risks</li>
                                <li class={tw`mb-2`}><em>Dog bites</em>: a bite wound inflicted by a dog, causing a wound or scratch</li>
                            </ul>
                            <p class={tw`mb-2`}>If you think that you may have sustained a personal injury, do not hesitate to reach out to us at Navab Law. We will work tirelessly to ensure that justice is served and that you receive the compensation you deserve.</p>

                        </div>
                    </div>
                    <div class={tw`lg:grid lg:grid-cols-3 gap-2 mb-8`} id="employment">
                        <div class={tw`lg:col-start-1 lg:col-end-2`}>
                            <h1 class={tw`text-2xl font-bold text-blue-medium text-center lg:ml-12 lg:text-left`}>
                                Employment Law
                            </h1>
                            <svg class={tw`lg:w-full`} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 120">
                                <g id="Employment"><g mask="url(#mask)"><g id="Doc"><path stroke="none" fill="#274690" d="M57.591,30.6a4.571,4.571,0,0,1,2.69.832l9.841,7.217a2.688,2.688,0,0,1,1.2,2.121v47.6A1.092,1.092,0,0,1,70.177,89.4H31.745A1.092,1.092,0,0,1,30.6,88.373V31.627A1.092,1.092,0,0,1,31.745,30.6H57.591m0-1.6H31.745A2.688,2.688,0,0,0,29,31.627V88.373A2.688,2.688,0,0,0,31.745,91H70.177a2.688,2.688,0,0,0,2.745-2.627V40.77a4.263,4.263,0,0,0-1.854-3.412l-9.841-7.216A6.179,6.179,0,0,0,57.591,29Z"/><path d="M59.2,29.9v7.732a2.3,2.3,0,0,0,2.362,2.223H72.1" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6"/><rect stroke="#274690" fill="#274690" x="33.941" y="41.348" width="21.412" height="1.653" rx="0.827"/><rect stroke="#274690" fill="#274690" x="33.941" y="34.115" width="6.039" height="1.653" rx="0.827"/><rect stroke="#274690" fill="#274690" x="41.628" y="34.115" width="6.039" height="1.653" rx="0.827"/><rect stroke="#274690" fill="#274690" x="33.941" y="45.654" width="12.078" height="1.653" rx="0.827"/><rect stroke="#274690" fill="#274690" x="47.667" y="45.654" width="20.863" height="1.653" rx="0.827"/><rect stroke="#274690" fill="#274690" x="33.941" y="49.959" width="34.588" height="1.653" rx="0.827"/><rect stroke="#274690" fill="#274690" x="33.941" y="59.087" width="12.078" height="1.653" rx="0.827"/><rect stroke="#274690" fill="#274690" x="35.039" y="77.687" width="12.078" height="1.653" rx="0.674"/><rect stroke="#274690" fill="#274690" x="47.667" y="59.087" width="20.863" height="1.653" rx="0.827"/><rect stroke="#274690" fill="#274690" x="48.765" y="81.821" width="20.863" height="1.653" rx="0.827"/><rect stroke="#274690" fill="#274690" x="33.941" y="63.393" width="34.588" height="1.653" rx="0.827"/><rect stroke="#274690" fill="#274690" x="33.941" y="67.698" width="12.078" height="1.653" rx="0.827"/><rect stroke="#274690" fill="#274690" x="55.353" y="67.698" width="13.177" height="1.653" rx="0.827"/><rect stroke="#274690" fill="#274690" x="47.875" y="67.698" width="5.282" height="1.653" rx="0.827"/></g></g><g id="Mag"><line x1="76.186" y1="62.605" x2="89" y2="82.637" fill="none" stroke="#274690" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.6"/><circle cx="68.578" cy="50.711" r="13" fill="#fff" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6"/><polyline points="61.309 51.212 65.701 55.345 75.583 47.079" fill="none" stroke="#274690" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.6"/></g></g><rect x="22" y="23" width="75" height="75" rx="12.5" fill="none" stroke="#274690" stroke-miterlimit="10" stroke-width="1.6"/>
                            </svg>
                    
                        </div>
                        <div class={tw`lg:col-span-2`}>
                            <p class={tw`mb-2`}>Employment discrimination takes place when a coworker or employer acts maliciously towards someone due to their identity, thereby creating a hostile work environment. This form of discrimination can not only affect an individual’s work performance and environment, but it can have serious mental and financial consequences as well.</p>
                            <p class={tw`mb-2`}>According to the U.S. Equal Employment Opportunity Commission, discrimination based on the following is illegal: age, disability, sex, genetics, national origin, pregnancy, race, religion and gender identity.</p>
                            <p class={tw`mb-2`}>At Navab Law, we handle the following types of employment discrimination:</p>
                            <ul class={tw`ml-4 list-disc`}>
                                <li class={tw`mb-2`}><em>Discrimination and harassment</em>: unequal or adverse treatment of an individual in a workplace setting due to their identity (race, religion, age, sex, etc.)</li>
                                <li class={tw`mb-2`}><em>Disability Discrimination</em>: unequal or adverse treatment of an individual in a workplace setting due to their perceived or actual physical or mental disability</li>
                                <li class={tw`mb-2`}><em>Age/Gender Discrimination</em>: unequal or adverse treatment of an individual in a workplace setting due to their perceived or actual age, sex, or gender expression</li>
                                <li class={tw`mb-2`}><em>Pregnancy Discrimination</em>: unequal or adverse treatment of an individual in a workplace setting due to their pregnancy status</li>
                                <li class={tw`mb-2`}><em>Hostile Work Environment</em>: when discrimination or harassment is so severe that it interferes with an individual’s ability to do their job</li>
                                <li class={tw`mb-2`}><em>Retaliation</em>: punishment of an employee for a legally protected activity, like making a harassment complaint or helping in a workplace investigation</li>
                                <li class={tw`mb-2`}><em>Sexual harassment</em>: unwanted sexual advances, requests for sexual favors, and other verb al or physical harassment of a sexual nature in a workplace or learning environment</li>
                                <li class={tw`mb-2`}><em>Wage & hour violations</em>: the violation by an employer of minimum wage or overtime pay laws established in the Fair Labor Standards Act</li>
                                <li class={tw`mb-2`}><em>Wrongful termination</em>: when an employer fires a worker for unlawful reasons</li>
                            </ul>
                            <p class={tw`mb-2`}>Everyone deserves to feel safe at work. If you are struggling with harassment, victimization or a hostile work environment, reach out to us at Navab Law. We are here to help.</p>

                        </div>
                    </div>
                </div>
            </main>

        </Layout>
    )

}