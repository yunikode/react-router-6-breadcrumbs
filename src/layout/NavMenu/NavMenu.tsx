import { RoutePathDefinition } from "../../routing/RoutePathDefinition";
import { mapDefinitionToMenu } from "./mapDefinitionToMenu";

export interface NavMenuProps {
  routes: RoutePathDefinition[];
}

export const NavMenu = ({ routes }: NavMenuProps) => {
  const LinksToRender = mapDefinitionToMenu(routes);
  return <>{LinksToRender}</>;
};