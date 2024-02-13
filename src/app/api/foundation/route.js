// import syllabus as json
import foundation from '../../../../syllabus_data/foundations.json'

// export GET function
export async function GET() {
    return Response.json({ data: foundation })
}