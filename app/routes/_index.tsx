export const meta = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }]
}

export default function Index() {
  return <h1 className="text-4xl">Home</h1>
}


// import {
//   type ActionFunctionArgs,
//   type LoaderFunctionArgs,
//   json,
// } from "@remix-run/cloudflare"
// import { Form, useLoaderData } from "@remix-run/react"

// const key = "__my-key__"

// export async function loader({ context }: LoaderFunctionArgs) {
//   const { MY_KV } = context.env
//   const value = await MY_KV.get(key)
//   return json({ value })
// }

// export async function action({ request, context }: ActionFunctionArgs) {
//   const { MY_KV: myKv } = context.env

//   if (request.method === "POST") {
//     const formData = await request.formData()
//     const value = formData.get("value") as string
//     await myKv.put(key, value)
//     return null
//   }

//   if (request.method === "DELETE") {
//     await myKv.delete(key)
//     return null
//   }

//   throw new Error(`Method not supported: "${request.method}"`)
// }

// export default function Index() {
//   const { value } = useLoaderData<typeof loader>()
//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-green-500">
//         Hello world!
//       </h1>
//       {value ? (
//         <>
//           <p>Value: {value}</p>
//           <Form method="DELETE">
//             <button type="button">Delete</button>
//           </Form>
//         </>
//       ) : (
//         <>
//           <p>No value</p>
//           <Form method="POST">
//             <label htmlFor="value">Set value: </label>
//             <input type="text" name="value" id="value" required />
//             <br />
//             <button type="submit">Save</button>
//           </Form>
//         </>
//       )}
//     </div>
//   )
// }
