import foundation from '../../../../syllabus_data/foundations.json'

export async function GET() {
    return Response.json({ data: foundation })
}