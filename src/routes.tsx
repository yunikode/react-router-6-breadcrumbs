import { Link } from 'react-router-dom';
import { Page } from "./layout/Page";
import { ActiveRoutePathTitleCallbackParams } from './routing/ActiveRoutePathTitleCallback';
import { RoutePathDefinition } from "./routing/RoutePathDefinition";

export const routes: RoutePathDefinition[] = [
  { title: "Home", path: "/", element: <Page title="home" />, nav: true },
  { title: "Test1", path: "/test1", element: <Page title="test1" />, nav: true },
  
  { title: "Test2", path: "/test1/test2", element: <Page title="test2" />, nav: true },
  {
    title: "Sub2",
    path: "/sub2",
    element: <Page title="sub2" withOutlet ><Link to='/sub2/param/12345667/one'>To parameterized route</Link></Page>,
    nav: true,
    children: [
      { title: "Sub2-Zero", path: "zero", element: <Page title="sub2-zero" /> },
      { title: "Sub2-One", path: "one", element: <Page title="sub2-one" /> },
      {
        title: ({ match }: ActiveRoutePathTitleCallbackParams<'id'>) => `Param-${match.params.id}`,
        path: "param/:id",
        element: <Page title="sub2-param" withOutlet />,
        children: [
          { title: "Sub2-Param-Zero", path: "zero", element: <Page title="Sub2-Param-Zero" /> },
          { title: "Sub2-Param-One", path: "one", element: <Page title="Sub2-Param-One" /> },
        ],
      },
    ],
  },
  
  {
    title: "Catch All - 404",
    path: "*",
    element: <Page title="404" />,
  },
];