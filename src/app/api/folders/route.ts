import { NextResponse } from "next/server";
import { QueryCommand } from "@aws-sdk/lib-dynamodb";
import { dynamodb } from "@/lib/dynamodb";

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