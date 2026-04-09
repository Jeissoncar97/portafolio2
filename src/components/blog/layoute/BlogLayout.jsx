import { Outlet } from "react-router-dom";
import HeaderBlog from "../HeaderBlog";

function BlogLayout() {
	return (
		<div className="bg-(--back-ground-primary) text-white min-h-screen">
			{/* 👇 Header fijo */}
			<HeaderBlog />

			{/* 👇 contenido dinámico */}
			<div className="mx-auto">
				<Outlet />
			</div>
		</div>
	);
}

export default BlogLayout;
