import * as Atoms from "@/components/atoms";
import Layout from "@/components/layouts/";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "@/lib/api.jsx";
import Lottie from "@/components/molecules/animate/lottie";
import { useAuth } from "@/context/AuthProvider";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/login", data);
      await login(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (err) {
      if (err.response?.status === 401) {
        setError("Email atau password salah");
      } else if (err.response?.status === 422) {
        setError("Data tidak valid");
      } else {
        setError("Terjadi kesalahan, coba lagi");
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center mb-20 mx-10 items-center w-full h-full">
      <div className="flex justify-center items-center mx-auto relative max-w-[80%] xl:max-w-[1000px]">
        <form
          onSubmit={handleSubmit}
          className="grid min-w-[350px] z-20 mb-40 h-auto lg:ml-0 -ml-20 max-w-[200px] rounded-xl xl:ml-30"
        >
          <div className="my-5 mb-5">
            <Atoms.Typo Variant="h1">login</Atoms.Typo>
            <Atoms.Typo Variant="p">
              masuk sekarang untuk menggunakan KelolaFarm
            </Atoms.Typo>
            {error && (
              <div className="mt-2 text-sm text-red-600">
                {error}
              </div>
            )}
          </div>

          <div className="grid">
            <Atoms.FloatLabel
              Label="email"
              Name="email"
              Type="email"
              Placeholder="user@email.com"
              ClassName="mt-10"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <Atoms.FloatLabel
              Label="password"
              Name="password"
              Type="password"
              Placeholder="password"
              ClassName="mt-10"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>

          <Link
            className="ml-auto hover:text-green-600 transition-all mt-5"
            to="/register"
          >
            belum punya akun?
          </Link>

          <Atoms.Button
            className="mt-10 w-full"
            type="submit"
            disabled={loading}
          >
            {loading ? "memuat" : "login"}
          </Atoms.Button>
        </form>
        <Lottie url="/animate/analisis.json" className="w-full h-full z-10 h-auto hidden -ml-20 -mt-30 lg:block"/>
        </div>
      </div>
    </Layout>
  );
}
