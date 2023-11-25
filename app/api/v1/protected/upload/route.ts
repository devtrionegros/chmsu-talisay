import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const client = new S3Client();
    const imageData = await request.formData();

    const file = imageData.get("file") as File | null;
    const fileName = imageData.get("fileName") as string;
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const Body = (await file.arrayBuffer()) as Buffer;
    const contentType = file.type;

    const uploadCommand = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: fileName,
      Body: Body,
      ContentType: contentType,
    });

    await client.send(uploadCommand);
    return NextResponse.json({ message: "File uploaded" });
  } catch (error) {
    console.log(error);

    return new NextResponse(null, {
      status: 500,
      statusText: "INTERNAL_SERVER_ERROR",
    });
  }
}
