"use client";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../buton";
import { SectionTitle } from "../section-title";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const Contact = () => {
  const { handleSubmit, register } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const submitForm = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <section
      id="contact"
      className="container py-16 px-6 md:py-34 flex items-center justify-center bg-neutral-850"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          className="items-center text-center"
          subtitle="contato"
          title="Entre em contato"
        />

        <form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(submitForm)}
        >
          <input
            placeholder="Nome"
            className="w-full h-14 bg-neutral-800 rounded-lg placeholder:text-neutral-400 text-neutral-50 p-4 focus:outline focus:ring-2"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-14 bg-neutral-800 rounded-lg placeholder:text-neutral-400 text-neutral-50 p-4 focus:outline focus:ring-2"
            {...register("email")}
          />
          <input
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-neutral-800 rounded-lg placeholder:text-neutral-400 text-neutral-50 p-4 focus:outline focus:ring-2"
            maxLength={500}
            {...register("message")}
          />
          <Button className="h-max mx-auto mt-6">
            Enviar Mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  );
};
