import ncert from '../../../../syllabus_data/ncert.json'
export async function GET() {
    return Response.json({ data: ncert })
}