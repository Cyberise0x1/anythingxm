import sql from "@/app/api/utils/sql";

export async function GET(request) {
  try {
    const posts = await sql`
      SELECT * FROM timeline_posts 
      ORDER BY posted_at DESC
    `;

    return Response.json({ posts });
  } catch (error) {
    console.error("Error fetching timeline posts:", error);
    return Response.json({ posts: [], error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      media_url,
      media_type,
      caption,
      thumbnail_url,
      instagram_url,
      posted_at,
    } = body;

    if (!media_url || !media_type) {
      return Response.json(
        { error: "media_url and media_type are required" },
        { status: 400 },
      );
    }

    const [post] = await sql`
      INSERT INTO timeline_posts (media_url, media_type, caption, thumbnail_url, instagram_url, posted_at)
      VALUES (${media_url}, ${media_type}, ${caption || null}, ${thumbnail_url || null}, ${instagram_url || null}, ${posted_at || new Date().toISOString()})
      RETURNING *
    `;

    return Response.json({ post }, { status: 201 });
  } catch (error) {
    console.error("Error creating timeline post:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
