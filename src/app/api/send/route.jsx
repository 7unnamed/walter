import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import EmailTemplate from '../../../../Components/CorreoTemplate'

const resend = new Resend('re_6sEFoSrW_NFz28rCxMPDeEzsBq5TqLQVu')

// Exporta una función llamada "post" para manejar solicitudes POST
export async function POST (req, res) {
  try {
    const data = await resend.emails.send({
      from: 'CORREO AUTOMATICO <onboarding@resend.dev>',
      to: ['deorzco2@gmail.com'],
      subject: 'FORMULARIO - PAGINA WEB 2',
      react: <EmailTemplate firstName='John' />,
      text: ''
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
