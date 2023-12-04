import { NextRequest, NextResponse } from "next/server";
import { SES } from "@aws-sdk/client-ses";

export const dynamic = "force-dynamic";
export async function POST(request: NextRequest) {
  try {
    console.log("v1/protected/ses api has been triggered");

    const ses = new SES();
    const { emailHtml, to } = await request.json();

    console.log(to);

    const params = {
      Source: "joshuaarnaez22@gmail.com",
      Destination: {
        ToAddresses: to,
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

    await ses.sendEmail(params);
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
