## 🗂️ Agregar un Sidebar a un Proceso

Sigue estos **3 simples pasos** para integrar un nuevo menú lateral (sidebar) dentro del flujo de un proceso específico:

---

1. Crear el componente

Crea el archivo del nuevo componente de navegación en la siguiente ruta del proyecto:
📂 `src/components/organism/Sidebars/`

2. Importar en el Layout

Abre el módulo `ProccessLayout` e importa el sidebar que acabas de crear en el paso anterior.

3. Registrar el componente

Añade tu componente al objeto de mapeo `sidebarComponents`. Asegúrate de usar como **clave (key)** el nombre exacto de la ruta del proceso.

```typescript
// Ubicación: src/components/templates/ProccessLayout.tsx
const sidebarComponents: Record<string, React.ReactNode> = {
  aoi: <AoiSidebar />,
  "pick-and-place": <PickandPlaceSidebar />,
  "tu-nuevo-proceso": <TuNuevoSidebar />,
};
```
