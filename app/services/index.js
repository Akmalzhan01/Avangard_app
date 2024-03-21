import { request, gql } from "graphql-request";
const MASTER_URL =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cltvrwwe309d807w8db7nwbf0/master";

export const getCourseList = async (level) => {
  const query = gql`
  query CourseList {
    courses (where: {level: ${level}}) {
      id
      name
      price
      level
      tags
      time
      author
      updatedAt
      banner {
        url
      }
      chapters {
        title
        id
        content {
          markdown
        }
      output {
        markdown
      }
      }
      description {
        markdown
      }
    }
  }
  
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export const enrollCourse = async (courseId, userEmail) => {
  const mutationQuery =
    gql`
    mutation MyMutation {
      createUserEnrolledCourse(
        data: {courseId: "`+courseId+`", userEmail: "`+userEmail+`", course: {connect: {id: "`+courseId+`"}}}
      ) {
        id
      }
      publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
        edges {
          node {
            id
          }
        }
      }
    }
    
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};
