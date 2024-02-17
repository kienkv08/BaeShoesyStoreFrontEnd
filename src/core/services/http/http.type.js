export const HttpMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

export const RequestContentType = {
  MULTIPART: 1,
  BINARY_STREAM: 2,
};

export const HttpOptions = {
  queryParams: {},
  body: {},
  headers: {},
  requestContentType: RequestContentType.MULTIPART,
};

const ParamTypes = [Number, String, Array, undefined, Object];

const JsonType = [String, Number, Boolean, Object, Array, null, Object];

export const DataSet = {};

export const ResponsePagination = {
  page: 0,
  perPage: 0,
  total: 0,
  lastPage: 0,
};

const PaginateSearchValue = [String, Number, Boolean, Array];

export const PaginationOption = {
  page: 0,
  perPage: 0,
  total: 0,
  equal: {},
  like: {},
  sort: "",
  in: {},
};

export const ResponseResult = {
  data: DataSet,
  pagination: ResponsePagination,
};

export const CoreResponse = {
  status: 0,
  message: "",
  result: ResponseResult,
};

export const ProgressOptions = {
  includeUploadProgress: false,

  progressHandler: (ajaxResponse) => {},
};
