"use client";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../button";
import { SectionTitle } from "../section-title";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome precisa conter pelo menos 3 caracteres." })
    .max(60, { message: "O nome pode ter no máximo 60 caracteres" }),
  email: z.string().email({ message: "Digite um e-mail válido por favor." }),
  message: z
    .string()
    .min(50, { message: "A mensagem tem que ter no mínimo 50 caracteres" })
    .max(500, { message: "A mensagem pode ter no máximo 500 caracteres." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const Contact = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const submitForm = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);
      toast.success(
        "Mensagem enviada com sucesso!!\nResponderei o mais breve possível."
      );
      reset();
    } catch {
      toast.error(
        "Erro ao enviar a mensagem.\nSe o erro persistir, tente mais tarde."
      );
    }
  };

  return (
    <section
      id="contact"
      className="container py-16 px-6 md:py-34 flex items-center justify-center bg-neutral-850"
    >
      <div className="w-full max-w-[620px] mx-auto">
        <SectionTitle
          className="items-center text-center"
          title="Entre em contato"
        />

        <form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(submitForm)}
        >
          <div className="sm:grid sm:grid-cols-2 flex flex-col gap-3">
            <div>
              <input
                placeholder="Nome"
                className="w-full h-14 bg-neutral-800 rounded-lg placeholder:text-neutral-400 text-neutral-50 p-4 focus:outline focus:ring-4 focus:ring-[#1effff]"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full h-14 bg-neutral-800 rounded-lg placeholder:text-neutral-400 text-neutral-50 p-4 focus:outline focus:ring-4 focus:ring-[#1effff]"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-neutral-800 rounded-lg placeholder:text-neutral-400 text-neutral-50 p-4 focus:outline focus:ring-4 focus:ring-[#1effff]"
            maxLength={500}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
          <Button className="h-max mx-auto mt-6" disabled={isSubmitting}>
            Enviar Mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  );
};
