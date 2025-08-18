import { NextResponse } from "next/server";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { env } from "@/lib/env";
import { S3 } from "@/lib/S3Client";

export async function DELETE(request: Request) {
  try {
    const body = await request.json();

    const key = body.key;
    if (!key) {
      return NextResponse.json(
        { error: "Missing or invalid object" },
        { status: 400 }
      );
    }

    const command = new DeleteObjectCommand({
      Bucket: env.NEXT_PUBLIC_S3_BUCKET_NAME_IMAGES,
      Key: key,
    });

    await S3.send(command);

    return NextResponse.json(
      { message: "File deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Missing or invalid object" },
      { status: 500 }
    );
  }
}
