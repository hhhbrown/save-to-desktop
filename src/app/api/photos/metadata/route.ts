import { NextRequest, NextResponse } from "next/server";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { dynamodb } from "@/lib/dynamodb";

export async function POST(request: NextRequest) {
    try {
        const {
            folderId,
            photoId,
            s3Key,
            fileName,
            fileType,
            fileSize,
            guestName,
        } = await request.json();

        if (!folderId || !photoId || !s3Key || !fileName || !fileType) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        if (typeof fileSize !== "number" || fileSize <= 0) {
            return NextResponse.json({ error: "Invalid file size" }, { status: 400 });
        }

        await dynamodb.send(
            new PutCommand({
                TableName: process.env.DYNAMODB_PHOTOS_TABLE!,
                Item: {
                    folderId,
                    photoId,
                    s3Key,
                    fileName,
                    fileType,
                    fileSize,
                    guestName: guestName || "Guest",
                    status: "pending",
                    uploadedAt: new Date().toISOString(),
                },
            })
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Save metadata error:", error);
        return NextResponse.json(
            { error: "Failed to save photo metadata" },
            { status: 500 }
        );
    }
}