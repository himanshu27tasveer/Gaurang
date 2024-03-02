import { mailData, transporter, generateEmailContent } from "./utils";

export async function POST(req: Request) {
  const data = await req.json();
  console.log(data, req);

  try {
    await transporter.sendMail({
      ...mailData(data.name),
      ...generateEmailContent({
        name: data.name,
        message: data.message,
        email: data.email,
      }),
      subject: data.subject,
    });

    return new Response("Successful");
  } catch (err: any) {
    console.log(err);
    return new Response(err.message);
  }
}
