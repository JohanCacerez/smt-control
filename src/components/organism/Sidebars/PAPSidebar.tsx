import { Title } from "../../atoms/Title";
import { NavItem } from "../../molecules/navItem";
export default function PAPSidebar() {
  return (
    <div>
      <Title text="Pick and place" className="m-4 text-white" level="h2" />

      <NavItem
        to="dashboard"
        label="Dashboard"
        iconName="FaChartColumn"
        variant="light"
      />

      <NavItem
        to="feeders"
        label="Feeders"
        iconName="FaHexagonNodes"
        variant="light"
      />
    </div>
  );
}
