// import syllabus as json
import ncert from '../../../../syllabus_data/ncert.json'

// export GET function
export async function GET() {
    return Response.json({ data: ncert })
}