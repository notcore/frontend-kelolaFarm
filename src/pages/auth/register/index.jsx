import * as Atoms from "@/components/atoms";
import Layout from "@/components/layouts/";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Check } from "lucide-react";
import { api } from "@/lib/api.jsx";

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
    password_confirmation: "",
  });

  const [Status, setStatus] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Status) {
      setStatus(true);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const response = await api.post("/register", data);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center mb-20 items-center w-full h-full">
        <form
          onSubmit={handleSubmit}
          className="grid min-w-[350px] h-auto max-w-[500px] rounded-xl"
        >
          <div className="my-5 mb-5">
            <Atoms.Typo Variant="h1">Register</Atoms.Typo>
            <Atoms.Typo Variant="p">
              buat akunmu untuk login ke TanamLokal
            </Atoms.Typo>
          </div>

          {!Status ? (
            <div className="grid">
              <div className="flex relative my-5 justify-center gap-1 items-center h-1 mx-5">
                <div className="transition-all w-[20%] flex justify-center border-gray-900 items-center h-10.5 rounded-full border-4">
                  1
                </div>
                <div className="transition-all w-[40%] h-full bg-gray-200 rounded-full"></div>
                <button
                  type="button"
                  onClick={() => setStatus(true)}
                  className="transition-all w-[20%] flex justify-center border-gray-200 text-gray-200 items-center h-10.5 rounded-full border-4"
                >
                  2
                </button>
                <div className="transition-all w-[40%] h-full bg-gray-200 text-gray-200 rounded-full"></div>
                <div className="transition-all w-[20%] flex justify-center border-gray-200 text-gray-200 items-center h-10.5 rounded-full border-4">
                  <Check />
                </div>
              </div>

              <Atoms.FloatLabel
                Label="email"
                Name="email"
                Type="email"
                Placeholder="user@gmail.com"
                ClassName="mt-10"
                value={data.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
              )}

              <Atoms.FloatLabel
                Label="nama"
                Name="name"
                Type="text"
                Placeholder="nama kamu"
                ClassName="mt-10"
                value={data.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>
              )}
            </div>
          ) : (
            <div className="grid">
              <div className="flex relative my-5 justify-center gap-1 items-center h-1 mx-5">
                <button
                  type="button"
                  onClick={() => setStatus(false)}
                  className="transition-all w-[20%] flex justify-center border-gray-900 text-gray-900 items-center h-10.5 rounded-full border-4"
                >
                  1
                </button>
                <div className="transition-all w-[40%] h-full bg-gray-900 rounded-full"></div>
                <button
                  type="button"
                  className="transition-all w-[20%] flex justify-center border-gray-900 text-gray-900 items-center h-10.5 rounded-full border-4"
                >
                  2
                </button>
                <div className="transition-all w-[40%] h-full bg-gray-200 text-gray-200 rounded-full"></div>
                <div className="transition-all w-[20%] flex justify-center border-gray-200 text-gray-200 items-center h-10.5 rounded-full border-4">
                  <Check />
                </div>
              </div>

              <Atoms.FloatLabel
                Label="password"
                Name="password"
                Type="password"
                Placeholder="minimal 8 karakter"
                ClassName="mt-10"
                value={data.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password[0]}
                </p>
              )}

              <Atoms.FloatLabel
                Label="konfirmasi password"
                Name="password_confirmation"
                Type="password"
                Placeholder="tulis ulang password"
                ClassName="mt-10"
                value={data.password_confirmation}
                onChange={handleChange}
              />
              {errors.password_confirmation && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password_confirmation[0]}
                </p>
              )}
            </div>
          )}

          <Link
            className="ml-auto hover:text-green-600 transition-all mt-5"
            to="/login"
          >
            sudah punya akun?
          </Link>

          {!Status ? (
            <Atoms.Button
              className="mt-10 w-full"
              type="submit"
            >
              lanjut
            </Atoms.Button>
          ) : (
            <Atoms.Button
              className="mt-10 w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "register"}
            </Atoms.Button>
          )}
        </form>
      </div>
    </Layout>
  );
}
