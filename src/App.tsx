import { useEffect, useState } from "react";
// 1. Importamos el cliente de Supabase que creamos
import { supabase } from "./utils/supabase";

// Definimos el "tipo" de dato que esperamos de la tabla 'process'
// para que TypeScript no dé errores.
interface Proceso {
  id: number;
  name_process: string;
  description: string | null;
}

function App() {
  // 2. Creamos estados para guardar los datos y saber si está cargando
  const [procesos, setProcesos] = useState<Proceso[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 3. Usamos useEffect para que el código se ejecute solo una vez al cargar la página
  useEffect(() => {
    // 4. Creamos una función asíncrona para poder usar 'await'
    const obtenerProcesos = async () => {
      try {
        // 5. ¡La consulta a Supabase! Traemos todo de la tabla 'process'
        const { data, error } = await supabase.from("process").select("*");

        if (error) {
          // Si hay un error en la conexión o la tabla no existe, lo mostramos
          throw error;
        }

        if (data) {
          // Si todo sale bien, guardamos los datos en nuestro estado
          setProcesos(data);
        }
      } catch (error) {
        // Capturamos cualquier error y lo guardamos para mostrarlo en pantalla
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        setError(errorMessage);
        console.error("Error al obtener datos:", errorMessage);
      } finally {
        // Al final, haya o no error, dejamos de cargar
        setCargando(false);
      }
    };

    // Llamamos a la función que acabamos de crear
    obtenerProcesos();
  }, []); // El array vacío asegura que solo se ejecute una vez

  // 6. Mostramos la interfaz al usuario
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4 text-emerald-400">
          ⚡ SMT Control App - Conexión a Supabase
        </h1>

        {cargando && (
          <p className="text-center text-gray-400">
            Conectando a la base de datos...
          </p>
        )}

        {error && (
          <div className="bg-red-900 border border-red-600 text-red-300 px-4 py-3 rounded relative">
            <strong className="font-bold">¡Error!</strong>
            <span className="block sm:inline ml-2">{error}</span>
          </div>
        )}

        {!cargando && !error && (
          <div>
            <p className="text-center text-green-400 font-semibold mb-4">
              ✅ Conexión exitosa. Se encontraron {procesos.length} procesos.
            </p>
            <ul className="list-disc list-inside bg-gray-700 p-4 rounded-md">
              {procesos.map((proceso) => (
                <li key={proceso.id} className="text-gray-200">
                  {proceso.name_process}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
