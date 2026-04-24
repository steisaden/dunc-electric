/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Info } from "./pages/Info";
import { Contact } from "./pages/Contact";

export default function App() {
  const basename = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Shop />} /> {/* Dummy route for now */}
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

