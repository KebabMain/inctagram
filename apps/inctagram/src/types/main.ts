import { IsEnum, IsNotEmpty } from 'class-validator';

export type PaginationAndSortingTypes = {
  pageNumber: number;
  pageSize: number;
  sortBy: string;
  sortDirection: 'ASC' | 'DESC';
};

export type IncomingPaginationAndSortingTypes = {
  pageNumber: string;
  pageSize: string;
  sortBy: string;
  sortDirection: 'asc' | 'desc';
};

export type ReturnPaginatedAndSortedWithItemsTypes = {
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
};

export enum LikeStatusTypes {
  NONE = 'None',
  LIKE = 'Like',
  DISLIKE = 'Dislike',
}

export type ResponseErrorTypes = {
  field: string;
  message: string;
};

export class LikeStatusDTO {
  @IsNotEmpty()
  @IsEnum(LikeStatusTypes)
  likeStatus: LikeStatusTypes;
}
