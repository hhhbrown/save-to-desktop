import { NextResponse } from "next/server";
import { QueryCommand } from "@aws-sdk/lib-dynamodb";
import { dynamodb } from "@/lib/dynamodb";
import { PutCommand } from "@aws-sdk/lib-dynamodb";

export async function GET() {
    const command = new QueryCommand({
        TableName: process.env.DYNAMODB_FOLDERS_TABLE,
        KeyConditionExpression: "organizerId = :organizerId",
        ExpressionAttributeValues: {
            ":organizerId": "demo-user",
        },
    });

    const result = await dynamodb.send(command);

    return NextResponse.json({
        folders: result.Items ?? [],
    });
}

export async function POST(request: Request) {
    const body = await request.json();

    const folder = {
        organizerId: "demo-user",
        folderId: crypto.randomUUID(),
        name: body.name,
        uploadToken: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
    };

    const command = new PutCommand({
        TableName: process.env.DYNAMODB_FOLDERS_TABLE,
        Item: folder,
    });

    await dynamodb.send(command);

    return NextResponse.json({ folder }, { status: 201 });
}