import { UserTypes } from '@graphql/server/users/types';
import { UserVacantDocumentsTypes } from '@graphql/server/userVacantDocuments/types';
import { UsersOnVacanciesTypes } from '@graphql/server/usersOnVacancies/types';
import { JobTitleTypes } from '@graphql/server/jobTitles/types';
import { DocumentTypes } from '@graphql/server/documents/types';
import { VacantTypes } from '@graphql/server/vacancies/types';
import { InterviewTypes } from '@graphql/server/interviews/types';
import { UsersOnInterviewsTypes } from '@graphql/server/usersOnInterviews/types';
import { CommentaryTypes } from '@graphql/server/commentaries/types';

const GlobalTypes = [
	UserTypes,
	UserVacantDocumentsTypes,
	UsersOnVacanciesTypes,
	JobTitleTypes,
	DocumentTypes,
	VacantTypes,
	InterviewTypes,
	UsersOnInterviewsTypes,
	CommentaryTypes,
];

export { GlobalTypes };
