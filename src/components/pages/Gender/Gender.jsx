import Seo from "@/components/atoms/Seo";
import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import Layout from "@/components/atoms/Layout";
import ViewGender from "@/components/templates/ViewGender";
import mockProfileTypes from "@/mock/mockProfileTypes.json";

export default function Gender() {
	return (
		<>
			<Seo />
			<Layout>
				<Header />
				<ViewGender dataSource={mockProfileTypes} />
				<Footer />
			</Layout>
		</>
	);
}
