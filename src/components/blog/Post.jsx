import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { posts } from "../../Posts/posts";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export default function Post() {
	const { slug } = useParams();
	const content = posts[slug];

	if (!content) return <p>Post no encontrado</p>;

	return (
		// Añadimos 'prose-headings:font-bold' y revisamos las clases
		<div className="bg-slate-900 min-h-screen py-10">
			{" "}
			{/* Contenedor de fondo para que luzca el prose-invert */}
			<article
				className="prose prose-invert prose-slate max-w-4xl mx-auto px-4 
                          prose-headings:text-white prose-p:text-slate-300 
                          prose-li:text-slate-300 prose-img:rounded-xl
                          prose-h1:text-center"
			>
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeHighlight]}
					components={{
						img: ({ src, alt }) => (
							<img
								src={src}
								alt={alt}
								className="rounded-xl mx-auto my-4 w-full max-w-2xl"
							/>
						),
					}}
				>
					{content}
				</ReactMarkdown>
			</article>
		</div>
	);
}
