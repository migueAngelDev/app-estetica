import { useRouter } from "next/router";

import CardGender from "@/components/molecules/CardGender";

import { ViewGenderWrapper, ViewGenderContent } from "./ViewGender.styled";

const ViewGender = ({ dataSource = [] }) => {
	const router = useRouter();

	const handleOnPushQueryParam = (gender) => {
		router.push({
			as: "/[pictures]",
			pathname: "/pictures",
			query: { gender },
		});
	};

	return (
		<ViewGenderWrapper>
			{dataSource.map((item) => (
				<ViewGenderContent key={item.value}>
					<CardGender
						title={item.label}
						onClick={() => handleOnPushQueryParam(item.value)}
					/>
				</ViewGenderContent>
			))}
		</ViewGenderWrapper>
	);
};

export default ViewGender;
