import sql from "@/app/api/utils/sql";

export async function POST(request) {
  try {
    const { fullName, email, whatsappNumber, investmentInterest, message } =
      await request.json();

    if (!fullName || !email) {
      return Response.json(
        { error: "Name and Email are required" },
        { status: 400 },
      );
    }

    const result = await sql`
      INSERT INTO inquiries (full_name, email, whatsapp_number, investment_interest, message)
      VALUES (${fullName}, ${email}, ${whatsappNumber}, ${investmentInterest}, ${message})
      RETURNING id
    `;

    return Response.json({ success: true, id: result[0].id });
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return Response.json(
      { error: "Failed to submit inquiry" },
      { status: 500 },
    );
  }
}
