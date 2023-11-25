import { NextRequest, NextResponse } from "next/server";
import { SES } from "@aws-sdk/client-ses";

export const dynamic = "force-dynamic";
export async function POST(request: NextRequest) {
  try {
    const ses = new SES();
    const { emailHtml, to } = await request.json();

    const params = {
      Source: "joshuaarnaez22@gmail.com",
      Destination: {
        ToAddresses: ["joshuaarnaez22@gmail.com"],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: emailHtml,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "hello world",
        },
      },
    };

    const res = await ses.sendEmail(params);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return new NextResponse(null, {
      status: 500,
      statusText: "INTERNAL_SERVER_ERROR",
    });
  }
}
