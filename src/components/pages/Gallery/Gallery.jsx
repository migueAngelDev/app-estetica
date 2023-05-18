import Seo from "@/components/atoms/Seo";
import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import Layout from "@/components/atoms/Layout";
import mockPictures from "@/mock/mockPictures.json";

import { GalleryWrapper, Figure, Img, Figcaption } from "./Gallery.styled";

const Gallery = () => {
	// TODO: Crear modal para preview de imagen
	// TODO: ¿de dónde se obtedran las imagenes? Mock, API, Strapí
	// TODO: Realizar Componente Header y Footer
	// TODO: Agregar branding de empresa

	// TODO: EXAMPLE

	return (
		<>
			<Seo />
			<Layout>
				<Header />
				<GalleryWrapper>
					{mockPictures.map((item, key) => {
						const position = key + 1;
						return (
							<Figure key={position}>
								<Img src={item.picture} alt="" />
								<Figcaption>
									<button>{position}</button>
								</Figcaption>
							</Figure>
						);
					})}
				</GalleryWrapper>
				<Footer />
			</Layout>
		</>
	);
};

export default Gallery;
