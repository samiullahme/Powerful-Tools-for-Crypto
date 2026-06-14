type Props = { html: string };

export default function BlogPostContent({ html }: Props) {
  return (
    <div
      className="not-prose [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#0F172A] [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[#0F172A] [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:text-[#64748B] [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_a]:text-[#FF9500] [&_a]:font-medium [&_a]:hover:underline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
