import { data } from "@/app/component/data"
import * as yup from 'yup';

export const createUserSchema = yup.object({
    course_name: yup.string().max(3),
    semester: yup.number().max(20)
});

export async function GET(request: Request) {
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  })
}

export async function POST(req: Request, res: Response) {
    if (req.method === 'POST') {
    const body = await req.json()
    const isValidated: any = await createUserSchema.validate(body).then(res => {
      return { result: res }
    }).catch(err => {
      return { errorMessage: err.errors[0] }
    })
    console.log('isValidated', isValidated)
    if(isValidated?.result) {
      return new Response('Ok', {status: 201})
    } else {
      return new Response(JSON.stringify({ error: isValidated?.errorMessage }), {status: 400})
    }
    } else {
      return new Response('Invalid Method', {status: 403})
    }
  }
  