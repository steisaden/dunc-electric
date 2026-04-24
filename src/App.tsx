/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Info } from "./pages/Info";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Shop />} /> {/* Dummy route for now */}
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

