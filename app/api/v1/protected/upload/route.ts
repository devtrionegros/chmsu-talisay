import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function POST(request: NextRequest) {
  try {
    console.log("v1/protected/upload api has been triggered");

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

export async function GET(request: NextRequest) {
  try {
    console.log("v1/protected/upload api has been triggered");

    const client = new S3Client();
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: "2023-12-04/915cce91-6621-42da-969a-8ff6d859b2bb@photo-1586407014176-b592d6e2d16b.jpg",
    };
    const command = new GetObjectCommand(params);
    const url = await getSignedUrl(client, command, {
      expiresIn: 3600,
    });
    console.log(url);

    return NextResponse.json({ message: "File uploaded" });
  } catch (error) {
    console.log(error);

    return new NextResponse(null, {
      status: 500,
      statusText: "INTERNAL_SERVER_ERROR",
    });
  }
}
