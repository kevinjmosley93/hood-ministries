import { parseBody } from 'next/dist/next-server/server/api-utils'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require('dotenv').config()
const cors = require('cors')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res, next) => {
  const { email, name, phone, message } = req.body

  const userMsg = `
  Hey Will,\r\n
  ${name}, phone number:${phone} has sent the following message from your website:\r\n
  ${message}
  `

  const data = {
    to: 'sackkingkev@gmail.com',
    from: 'will@helpingthehood.org',
    subject: `${email} submitted information to I Am (H.O.O.D) Helping Others Obtain Destiny`,
    text: userMsg,
    html: userMsg.replace(/\r\n/g, '<br>')
  }
  const emailRes = await sgMail.send(data)

  console.log(emailRes)

  res.status(200).json({ status: 'ok' })
}
