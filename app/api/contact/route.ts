import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
    name: z.string().min(3).max(60),
    email: z.string().email(),
    message: z.string().min(50).max(500),
});

export async function POST(req: NextRequest) {
    if (req.method !== 'POST') {
        return NextResponse.json({ error: 'Método não permitido.' }, { status: 405 });
    }

    try {
        const body = await req.json();
        const { name, email, message } = bodySchema.parse(body);

        const messageData = {
            embeds: [
                {
                    icon_url: 'https://portfolio-dansouza.vercel.app/images/logo.svg',
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
                    },
                    timestamp: new Date(),
                },
            ],
        };

        await axios.post(process.env.WEBHOOK_URL!, messageData);
        return NextResponse.json({ message: "Mensagem enviada com sucesso!" }, { status: 200 });

    } catch (err) {
        if (err instanceof z.ZodError) {
            return NextResponse.json({ errors: err.errors }, { status: 400 });
        }
        return NextResponse.json({ error: `Erro interno do servidor: ${err}` }, { status: 500 });
    }
}
