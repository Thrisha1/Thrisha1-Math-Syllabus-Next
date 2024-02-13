// import syllabus as json
import punjab from '../../../../syllabus_data/punjab.json';

// export GET function
export async function GET() {
    return Response.json({ data: punjab });
}