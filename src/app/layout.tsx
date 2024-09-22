import "./globals.scss";
import type { Metadata, NextPage } from "next";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { nunito } from "./fonts";
import { ToastContainer } from "react-toastify";

import WebApp from "./webApp";
export const metadata: Metadata = {
  title: {
    default: "CAREER EDUCATION ZONE - Your Trusted Partner for College Admissions",
    template: "%s | Trusted College Admissions & Higher Education Experts in Patna",
  },
  description:
    "Career Education Zone is Patna's premier consultancy for higher education and college admissions. With expert guidance, we help students secure placements in top colleges in India and abroad. Our personalized counseling ensures students find the right path for their academic and career goals.",
  icons: "/assets/icons/metaicon.png",
  keywords: [
    "college admissions consulting Patna",
    "higher education consultants",
    "study abroad services",
    "student counseling Patna",
    "career education zone",
    "top education consulting firm",
    "college placement services",
    "overseas education guidances",
    "career planning for students",
    "Patna education consultancy",
    "secure college admission Patna",
    "expert admission guidance",
  ],
};

const RootLayout: NextPage<any> = (props) => {
  const { children, params } = props;

  return (
    <html lang="en" className={nunito.className}>
      <body>
        {/* <ToastContainer autoClose={2000} position="top-right" style={{ zIndex: "9999999" }} /> */}
        <WebApp>{children}</WebApp>
      </body>
    </html>
  );
};
export default RootLayout;
