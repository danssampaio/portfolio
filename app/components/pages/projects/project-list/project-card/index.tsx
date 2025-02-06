import Image from "next/image";

export const ProjectCard = () => {
  return (
    <div
      className="rounded-lg h-[360px] flex flex-col bg-neutral-800 overflow-hidden border-2
     border-neutral-700 hover:border-cyan-600 opacity-80 hover:opacity-100 transition-all group"
    >
      <div className="w-full h-48 overflow-hidden">
        <Image
          src="https://proex.uesc.br/img/identidadeVisual/ProexUesc_mono-07.png"
          width={380}
          height={200}
          unoptimized
          alt="Thumbnail do projeto PROEX"
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>
      <div className="flex-1 flex flex-col p-4">
        <strong className="font-semibold text-neutral-50/90 group-hover:text-cyan-600 transition-all">
          Pró-Reitoria de Extensão UESC
        </strong>
        <p className="mt-1 text-neutral-400 text-sm line-clamp-3">
          Plataforma informativa para a divulgação de projetos, eventos,
          notícias e ações de extensão universitária, estruturada para oferecer
          acesso rápido a documentos relacionados às certificações e criação de
          projetos. Contribuí para a otimização da experiência do usuário e a
          organização do conteúdo, garantindo uma navegação intuitiva e
          eficiente.
        </p>
        <span className="text-neutral-300 text-xs font-medium block mt-auto truncate">
          HTML, CSS, Bootstrap, JS, PHP
        </span>
      </div>
    </div>
  );
};
