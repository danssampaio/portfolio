import axios from "axios";
import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string()
})
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = bodySchema.parse(body);

        const messageData = {
            embeds: [
                {
                    title: 'Mensagem de Contato',
                    color: 0x1effff,
                    description: 'Abaixo estão os detalhes da mensagem de contato recebida.',
                    fields: [
                        {
                            name: 'Nome',
                            value: name,
                            inline: true,
                        },
                        {
                            name: 'E-mail',
                            value: email,
                            inline: true,
                        },
                        {
                            name: 'Mensagem',
                            value: message,
                            inline: false,
                        },
                    ],
                    footer: {
                        text: 'Mensagem gerada: ',
                        // icon_url: '', 
                    },
                    timestamp: new Date(),
                },
            ],
        };

        await axios.post(process.env.WEBHOOK_URL!, messageData);
        return NextResponse.json({
            message: 'Mensagem enviada com sucesso.'
        })
    } catch (err) {
        console.log(err);
        return NextResponse.error();
    }
}