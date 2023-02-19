"use client";

import React from "react";
import { LayoutWrapper } from "./Layout.styled";

const Layout = ({ children }) => {
	return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
