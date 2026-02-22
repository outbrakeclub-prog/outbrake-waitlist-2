import { createBrowserRouter } from "react-router";
import LandingPage from "./components/LandingPage";
import LegalNotice from "./components/LegalNotice";
import PrivacyPolicy from "./components/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/legal",
    Component: LegalNotice,
  },
  {
    path: "/privacy",
    Component: PrivacyPolicy,
  },
]);