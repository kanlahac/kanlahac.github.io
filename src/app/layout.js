import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto({
	subsets: ["latin"],
});

export const metadata = {
	title: "Kanlahac",
	description: "A Gameplay developer portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-theme="nord">
			<body className={`${font.className} antialiased text-neutral`}>
				{children}
			</body>
		</html>
	);
}
