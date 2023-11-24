import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const client = new SNSClient();
    // const { body, number } = await request.json();

    const message = {
      Message: `Hello, this is a test message from AWS SNS!`,
      PhoneNumber: "+639053132911",
      MessageAttributes: {
        "AWS.SNS.SMS.SenderID": {
          DataType: "String",
          StringValue: "chmsutest", // Replace with your sender ID
        },
      },
    };

    const send = await client.send(new PublishCommand(message));
    return NextResponse.json(
      { message: "Message sent successfully" },
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
