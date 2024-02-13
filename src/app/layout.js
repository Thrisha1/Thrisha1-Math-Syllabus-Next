import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

// setting up metadata
export const metadata = {
    title: "Syllabus finder",
    description: "get the list of available syllabuses for your course",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
          <head>
              <title>Syllabus Finder</title>
              {/* setting the flowbite css library */}
              <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet"/>
          </head>
          <body className={inter.className}>
            {children}

            {/* setting the flowbite js library */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
          </body>
        </html>
    );
}
