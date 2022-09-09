import { UserResolvers } from '@graphql/server/users/resolvers';
import { UserVacantDocumentResolvers } from '@graphql/server/userVacantDocuments/resolvers';
import { UserOnVacanciesResolvers } from '@graphql/server/usersOnVacancies/resolvers';
import { JobTitleResolvers } from '@graphql/server/jobTitles/resolvers';
import { DocumentResolver } from '@graphql/server/documents/resolvers';
import { VacanciesResolvers } from '@graphql/server/vacancies/resolvers';
import { InterviewResolvers } from '@graphql/server/interviews/resolvers';
import { UsersOnInterviewsResolvers } from '@graphql/server/usersOnInterviews/resolvers';
import { CommentaryResolvers } from '@graphql/server/commentaries/resolvers';

const GlobalResolvers = [
  UserResolvers,
  VacanciesResolvers,
  UserVacantDocumentResolvers,
  UserOnVacanciesResolvers,
  JobTitleResolvers,
  DocumentResolver,
  InterviewResolvers,
  UsersOnInterviewsResolvers,
  CommentaryResolvers,
];

export { GlobalResolvers };
