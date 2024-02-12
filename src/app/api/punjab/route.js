import punjab from '../../../../syllabus_data/punjab.json';

export async function GET() {
    return Response.json({ data: punjab });
}