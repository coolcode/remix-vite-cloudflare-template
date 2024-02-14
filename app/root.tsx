// import { cssBundleHref } from "@remix-run/css-bundle"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import  "~/styles/tailwind.css"

// export const links = () => [{ rel: "stylesheet", href: cssTailwind }, ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [])]

// https://aitdk.com/
export const meta = () => [
  { title: "Remix Cloudflare Template" },
  {
    name: "description",
    content: "A Remix Cloudflare Template.",
  },
  {
    name: "keywords",
    content: "Remix, Cloudflare, Template",
  },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
