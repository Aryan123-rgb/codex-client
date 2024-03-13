import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Complier from "./pages/Complier";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "@/components/theme-provider";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import { Toaster } from "./components/ui/toaster";
import MySavedCodes from "./pages/MySavedCodes";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster />
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-saved-codes" element={<MySavedCodes />} />
        <Route path="/" element={<Home />} />
        <Route path="/my-saved-codes/:id" element={<Complier />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
