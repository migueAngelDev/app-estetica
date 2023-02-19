import styled from "styled-components";

export const GalleryWrapper = styled.section({
	columnCount: "4",
	columnGap: "10px",
});

export const Figure = styled.figure({
	position: "relative",
	cursor: "pointer",

	margin: "0",
	display: "grid",
	gridTemplateRows: "1fr auto",
	marginBottom: "10px",
	breakInside: "avoid",
	borderRadius: "16px",
	overflow: "hidden",

	"&::after": {
		position: "absolute",
		content: "' '",
		opacity: 0,
		width: "100%",
		height: "100%",
	},

	":hover button": {
		opacity: 1,
		transition: "opacity 150ms",
	},
	":hover&::after": {
		opacity: 1,
		background:
			"radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(40,40,40,0.4962359943977591) 100%)",
		transition: "background  150ms",
	},
});

export const Img = styled.img({
	maxWidth: "100%",
	display: "block",
	gridRow: "1 / -1",
	gridColumn: "1",
});

export const Figcaption = styled.figcaption({
	gridRow: "2",
	gridColumn: "1",
	padding: "0.5em",

	zIndex: 1,

	button: {
		background: "#ff2424",
		color: "#fff",
		height: "42px",
		borderRadius: "42px",
		width: "100%",
		border: "0",
		fontSize: "16px",
		fontWeight: "500",
		cursor: "pointer",

		opacity: 0,
	},
});
