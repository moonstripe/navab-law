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

    let cleanName = '';

    for (let i = 0; i < name.split(' ').length; i++) {
      const nameElement = name.split(' ')[i];
      cleanName += nameElement[0].toUpperCase() + nameElement.substring(1)
      if (i !== name.split(' ').length - 1) {
        cleanName += ' '
      }
    }


    
    let key: string, user: string;

    console.log('hello??')
    console.log('hello', Deno.env.get('DENO_DEPLOYMENT_ID'))

    if (Deno.env.get('DENO_DEPLOYMENT_ID')) {
      // prod
      user = Deno.env.get('SG_USER')!;
      key = Deno.env.get('SG_KEY')!;
    } else {
      // dev
      user = config().SG_USER!;
      key = config().SG_KEY!;
    }


    // build email template based on reason

    const message = {
      personalizations: [
        {
          from: {
            email: 'kojin@moonstripe.com',
            name: 'Test Navab Law (First FROM)'
          },
          to: [
            {
              email: email,
              name: cleanName
            }
          ]
        }
      ],
      from: {
        email: 'kojin@moonstripe.com',
        name: 'SECOND FROM'
      },
      replyTo: {
        email: 'kojin@moonstripe.com',
        name: 'Reply To'
      },
      subject: 'Testing Email',

      // custom content!
      content: [
        {
          type: 'text/html',
          value: `<p>Hello from the Navab Law Email Service!</p><p>Content written here will be different based on whether the reason selected was generic or, Civil Rights, Employment, or Personal Injury related.</p><p>Sending with the email service trusted by developers and marketers for <strong>time-savings</strong>, <strong>scalability</strong>, and <strong>delivery expertise</strong>.</p>`
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