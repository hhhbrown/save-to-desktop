import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        region: process.env.AWS_REGION,
        table: process.env.DYNAMODB_FOLDERS_TABLE,
    });
}