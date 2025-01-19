import { Route, Routes, useLocation } from "react-router-dom";
import CategoriesPage from "@pages/CategoriesPage";
import CategoryDetails from "@pages/CategoryDetails";
import Home from "@pages/Home";
import Error from "@pages/Error";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Terms from "@pages/Terms";
import Privacy from "@pages/Privacy";
import { useEffect } from "react";
import Imprint from "./pages/Imprint";
import { FaWhatsapp } from "react-icons/fa";
import Button from "./components/Button";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const definedRoutes = [
    "/",
    "/categories",
    "/categories/:categoryId",
    "terms-conditions",
    "privacy-policy",
  ];

  const isDefinedRoute = definedRoutes.some((route) =>
    location.pathname.match(new RegExp(`^${route.replace(/:\w+/g, "\\w+")}$`))
  );

  return (
    <>
      <Navbar />
      <Button
        classes="p-1 bg-[#25D366] rounded-lg w-12 shadow-lg hover:scale-105 transition h-12 z-10 fixed bottom-10 flex items-center justify-center rtl:left-20 rtl:right-unset ltr:right-20 ltr:left-unset"
        handleClick={() => window.open("https://wa.me/+0559943499", "_blank")}
      >
        <FaWhatsapp className="text-2xl text-third-color" />
      </Button>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:id" element={<CategoryDetails />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="*" element={<Error />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/services/:serviceId" element={<ServiceDetails />} /> */}
          {/* <Route path="faq" element={<FAQ />} /> */}
        </Routes>
      </main>
      {isDefinedRoute && <Footer />}
    </>
  );
}

export default App;
