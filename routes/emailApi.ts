import { Handlers } from "fresh/server.ts";
import { config } from "dotenv";

export const handler: Handlers = {
  async POST(req: Request) {
    // console.log('but this works tho?', req.headers.get("sec-fetch-site") === 'same-origin')

    // simple spam check
    if (req.headers.get("sec-fetch-site") !== 'same-origin') {
      return new Response('failure', {
        headers: { "Content-Type": "application/json" },
        status: 401,
      })
    }

    // pull and clean name, email, reason from body, initialize env variables
    const { name, email, reason } = await req.json();

    // console.log(reason)

    let cleanName = '';

    for (let i = 0; i < name.split(' ').length; i++) {
      const nameElement = name.split(' ')[i];
      cleanName += nameElement[0].toUpperCase() + nameElement.substring(1)
      if (i !== name.split(' ').length - 1) {
        cleanName += ' '
      }
    }

    let key: string, user: string;

    // console.log('hello??')
    // console.log('hello', Deno.env.get('DENO_DEPLOYMENT_ID'))

    if (Deno.env.get('DENO_DEPLOYMENT_ID')) {
      // prod
      user = Deno.env.get('SG_USER')!;
      key = Deno.env.get('SG_KEY')!;
    } else {
      // dev
      user = config().SG_USER!;
      key = config().SG_KEY!;
    }

    // build content from reason
    let html = `
        <p>Hello ${cleanName.split(' ')[0]},</p>
        <p>Thank you for contacting us. If you have potential legal claims, Navab Law, APC would like to have the opportunity to hear more about your case.</p>
        <p>We will get back to you within 3-5 business days to schedule a time to speak with you if we have any follow-up questions. If we don’t have any follow-up questions, you should receive an email or call about our firm’s decision within 3-5 business days.</p>
        <p>Please be aware that sending an email to Navab Law, APC does not contractually obligate our firm to represent you as your attorney. We cannot serve as your counsel in any matter unless you and our firm expressly agree, in writing, that we will serve as your attorney.</p>
        <p>&nbsp;</p>
        <p>Best,</p>
        <p>Navab Law, APC</p>
        <p>&nbsp;</p>
        <p>------------------------------</p>
        <p>Your Request:</p>
        ${reason}
        `

    // build email message for sendgrid

    const message = {
      personalizations: [
        {
          from: {
            email: 'sofie.navablaw+contact@gmail.com',
            name: 'Navab Law'
          },
          to: [
            {
              email: email,
              name: cleanName
            }
          ],
          cc: [
            {
              email: 'sofie.navablaw+contact@gmail.com',
              name: 'Navab Law'
            }
          ]
        }
      ],
      from: {
        email: 'sofie.navablaw+contact@gmail.com',
        name: 'Navab Law'
      },
      replyTo: {
        email: 'sofie.navablaw+contact@gmail.com',
        name: 'Navab Law'
      },
      subject: 'Regarding your recent inquiry',

      // custom content!
      content: [
        {
          type: 'text/html',
          value: html
        }
      ]
    }

    // send email to email and navab law address

    const request = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
    })

    if (request.status === 202) {
      console.log('successful email sent.')
      return new Response('{"data":"success"}', {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response('failure', {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  },
};