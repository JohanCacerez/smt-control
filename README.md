## Agregar un sidebar a un proceso

1. Crear el componente sidebar en la carpeta src/components/organism/Sidebars
2. Importar el componente creado en el modulo "ProccessLayout"
3. Añadirlo a sidebarComponents con el nombre de la ruta

```typescript
const sidebarComponents: Record<string, React.ReactNode> = {
  aoi: <AoiSidebar />,
  "pick-and-place": <PickandPlaceSidebar />,
};
```
