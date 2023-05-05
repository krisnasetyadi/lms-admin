import RequestHandler from "../request-handler";
import { ENDPOINT } from '../../../config/admin'

class CourseInfoApi extends RequestHandler {
    constructor(){
        super(ENDPOINT.COURSE_INFO)
    }
}

const courseInfoApiInstance = new CourseInfoApi();

export default courseInfoApiInstance;