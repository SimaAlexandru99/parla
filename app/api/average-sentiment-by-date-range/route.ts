import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/dbUtils";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const database = searchParams.get("database");
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    if (!database || !startDate || !endDate) {
      return NextResponse.json(
        { error: "Missing database, startDate, or endDate" },
        { status: 400 }
      );
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return NextResponse.json(
        { error: "Invalid date format" },
        { status: 400 }
      );
    }

    const client = await connectToDatabase();
    const db = client.db(database);
    const collection = db.collection("calls");

    const records = await collection
      .find({
        day_processed: {
          $gte: start.toISOString(),
          $lte: end.toISOString(),
        },
      })
      .toArray();

    const totalSentiment = records.reduce(
      (acc, record) => acc + record.average_sentiment,
      0
    );
    const averageSentiment = records.length
      ? totalSentiment / records.length
      : null;

    return NextResponse.json({ averageSentiment });
  } catch (error) {
    console.error("Error fetching average sentiment by date range:", error);
    return NextResponse.json(
      {
        status: `Error fetching average sentiment by date range: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      },
      { status: 500 }
    );
  }
}
