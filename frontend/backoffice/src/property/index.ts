import { ListGuesser, ResourceProps } from "react-admin";
import { House } from "@mui/icons-material";

export const properties: ResourceProps = {
    name: "properties",
    options: { label: "Property" },
    icon: House,
    list: ListGuesser
  };