import maharashtra from '../../../../syllabus_data/maharashtra.json'

export async function GET() {
    return Response.json({ data: maharashtra })
}