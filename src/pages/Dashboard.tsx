import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabase";

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      // 1. Solicitamos el usuario a Supabase (este lee el token de LocalStorage)
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        // 2. Si no hay usuario activo, lo redirigimos de vuelta al Login
        navigate("/login");
      } else {
        setLoading(false);
      }
    };

    checkUser();
  }, [navigate]);

  if (loading) return <p>Cargando panel...</p>;

  return <h1>¡Bienvenido a tu Dashboard!</h1>;
};
