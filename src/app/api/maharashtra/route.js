// import syllabus as json
import maharashtra from '../../../../syllabus_data/maharashtra.json'

// export GET function
export async function GET() {
    return Response.json({ data: maharashtra })
}