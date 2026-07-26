import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabase";
import toast from "react-hot-toast";

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true; // Controlamos si el componente sigue montado

    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        if (isMounted) {
          // Mostramos la notificación una única vez
          toast.error("Error al acceder: No hay usuario activo");
          navigate("/login");
        }
      } else {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    checkUser();

    return () => {
      isMounted = false; // Cancela cualquier acción si el componente se desmonta rápido
    };
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-light dark:bg-background-dark">
        <p className="text-content-body dark:text-content-body-dark font-medium animate-pulse">
          Cargando panel...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark p-6 transition-all">
      <h1 className="text-3xl font-bold text-content-title dark:text-content-title-dark">
        ¡Bienvenido a tu Dashboard!
      </h1>
    </div>
  );
};
