import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { randomUUID } from "crypto";
import { s3 } from "@/lib/s3";

const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
const maxSize = 10 * 1024 * 1024; // 10 MB

export async function POST(request: NextRequest) {
    try {
        const { eventId, fileType, fileSize } = await request.json();

        if (!eventId || !fileType || typeof fileSize !== "number" || fileSize <= 0) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        if (!allowedTypes.includes(fileType)) {
            return NextResponse.json({ error: "Unsupported file type" }, { status: 400 });
        }

        if (fileSize > maxSize) {
            return NextResponse.json({ error: "File too large" }, { status: 400 });
        }

        const photoId = randomUUID();
        const extension = fileType.split("/")[1];
        const key = `events/${eventId}/photos/${photoId}.${extension}`;

        const command = new PutObjectCommand({
            Bucket: process.env.S3_BUCKET_NAME!,
            Key: key,
            ContentType: fileType,
        });

        const uploadUrl = await getSignedUrl(s3, command, {
            expiresIn: 60 * 5,
        });

        return NextResponse.json({
            uploadUrl,
            key,
            photoId,
        });
    } catch (error) {
        console.error("Upload URL error:", error);
        return NextResponse.json({ error: "Failed to create upload URL" }, { status: 500 });
    }
}