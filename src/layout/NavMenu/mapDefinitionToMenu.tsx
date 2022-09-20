import { NavLink } from "@mantine/core";
import React from "react";
import { generatePath, Link, useLocation } from "react-router-dom";
import { concatPaths } from "../../routing/routeHelpers";
import { RoutePathDefinition } from "../../routing/RoutePathDefinition";

export function mapDefinitionToMenu(
  definitions: RoutePathDefinition[],
  parent: string = ""
): React.ReactNode {
  const location = useLocation();
  return (
    <ul>
      {definitions.map((definition, index) => {
        if (!definition.nav) {
          return undefined;
        }
        const builtPath = concatPaths(parent, definition.path);
        let to: string | undefined;
        try {
          to = generatePath(builtPath);
        } catch (err) {}
        return (
          <>
            {to ? (
              <NavLink
                label={definition.title}
                key={definition.path}
                component={Link}
                to={to}
                active={location.pathname === to}
              />
            ) : undefined}
          </>
        );
      })}
    </ul>
  );
}

{
  /*      {definition.children ? mapDefinitionToMenu(definition.children, builtPath) : undefined} */
}
