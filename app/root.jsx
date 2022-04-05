import {
  Outlet,
  LiveReload,
  Links,
  Meta,
  useCatch,
  Link,
} from "@remix-run/react";
import Nav from "./components/nav";
import styles from "~/styles/global.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cairo&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
  },
];

export const meta = () => {
  return {
    charset: "utf-8",
    title: "De jour",
    description: "will think of a description soon idk",
    viewport: "width=device-width,initial-scale=1",
  };
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <Links />
        <Meta />
      </head>
      <body>
        {children}
        <LiveReload />
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className="container-lg">{children}</div>
    </>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>
          {caught.status} {caught.statusText}
        </h1>
        <p>
          Go Back -> <Link to="/">Home</Link>
        </p>
      </body>
    </html>
  );
}
