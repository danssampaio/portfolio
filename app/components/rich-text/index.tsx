import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer";
import { ComponentProps } from "react";

type RichTextProps = ComponentProps<typeof CMSRichText>;

export const RichText = ({ ...props }: RichTextProps) => {
  return (
    <CMSRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className="text-gray-50 font-semibold">{children}</b>
        ),
        ul:({children}) => (
          <ul className="list-disc list-inside pl-2 flex flex-col gap-2 pt-5">
            {children}
          </ul>
        ),
        a:({children, ...props}) => (
          <a 
          className="hover:text-cyan-400 transition-colors underline"
          {...props}>
            {children}
          </a>
        )

      }}
    />
  );
};
