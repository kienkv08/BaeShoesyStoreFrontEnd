import {
  catchError,
  finalize,
  map,
  NEVER,
  Observable,
  Subject,
  throwError,
} from "rxjs";
import {
  isNullOrUndefined,
  isStrEmpty,
  nullSafetyJSONStringify,
} from "../../helpers/helpers";
import { SystemMessage } from "../../../common/constants/message.contant";
import { ajax } from "rxjs/ajax";
import {
  HttpMethod,
  HttpOptions,
  ProgressOptions,
  RequestContentType,
} from "./http.type";
import { toast } from "react-toastify";
import { Config } from "../../../configuration/env.config";

class _HttpService {
  constructor() {
    this.isRequesting$ = new Subject();
    this.onError$ = new Subject();

    this._commonHeader = {
      "Content-Type": "application/json",
    };
  }

  get(uri, options) {
    return this.request(uri, HttpMethod.GET, options);
  }

  post(uri, options) {
    return this.request(uri, HttpMethod.POST, options);
  }

  put(uri, options) {
    return this.request(uri, HttpMethod.PUT, options);
  }

  patch(uri, options) {
    return this.request(uri, HttpMethod.PATCH, options);
  }

  delete(uri, options) {
    return this.request(uri, HttpMethod.DELETE, options);
  }

  requestUpload(uri, method = HttpMethod.POST, progressHandler, options) {
    const headers = {
      ...(options === null || options === void 0 ? void 0 : options.headers),
      "Content-Type": "application/octet-stream",
    };

    const newOptions = {
      ...options,
      headers,
      requestContentType: RequestContentType.BINARY_STREAM,
    };

    return this.request(uri, method, newOptions, {
      includeUploadProgress: true,
      progressHandler,
    });
  }

  requestDownload(uri, options) {
    const token = this.getAccessToken();
    const url = this.resolveUri(uri);

    return ajax({
      url,
      method: HttpMethod.GET,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        ...(options === null || options === void 0 ? void 0 : options.headers),
      },
      responseType: "blob",
    });
  }

  request(uri, method, options, progressOptions) {
    const token = this.getAccessToken();
    let url = this.resolveUri(uri);

    if (options === null || options === void 0 ? void 0 : options.queryParams) {
      url = url + "?" + this.generateHttpParams(options.queryParams);
    }

    let body = nullSafetyJSONStringify(
      this.buildBodyData(
        options === null || options === void 0 ? void 0 : options.body
      )
    );

    if (
      options === null || options === void 0
        ? void 0
        : options.requestContentType
    ) {
      switch (
        options === null || options === void 0
          ? void 0
          : options.requestContentType
      ) {
        case RequestContentType.MULTIPART:
          body = this.buildFormData(
            options === null || options === void 0 ? void 0 : options.body
          );
          break;
        case RequestContentType.BINARY_STREAM:
          body = options === null || options === void 0 ? void 0 : options.body;
          break;
        default:
          break;
      }
    }

    this.isRequesting$.next(true);

    return ajax({
      url,
      method,
      body,
      headers: {
        ...(options === null || options === void 0
          ? void 0
          : options.requestContentType === RequestContentType.MULTIPART
          ? { Accept: "application/json" }
          : this._commonHeader),
        Authorization: token ? `Bearer ${token}` : "",
        ...(options === null || options === void 0 ? void 0 : options.headers),
      },
      includeUploadProgress:
        progressOptions === null || progressOptions === void 0
          ? void 0
          : progressOptions.includeUploadProgress,
    }).pipe(
      map((ajaxResponse) => {
        progressOptions === null || progressOptions === void 0
          ? void 0
          : (progressOptions.progressHandler && progressOptions === null) ||
            progressOptions === void 0
          ? void 0
          : progressOptions.progressHandler(ajaxResponse);
        return this.handleResponse(ajaxResponse);
      }),
      catchError((error) => {
        this.onError$.next(error);
        const message =
          (error === null || error === void 0
            ? void 0
            : error.response.message) || SystemMessage.UNKNOWN_ERROR;
        console.log(error);
        toast.error(message);

        if (process.env.NODE_ENV === "development") {
          this.isRequesting$.next(false);
          return NEVER;
        }

        return throwError(() => error);
      }),
      finalize(() => {
        this.isRequesting$.next(false);
      })
    );
  }

  buildBodyData(data) {
    return data || Object.create(null);
  }

  buildFormData(data) {
    const formData = new FormData();

    for (const key in data) {
      if (data[key]) {
        if (data[key] instanceof File) {
          formData.append(key, data[key], data[key].name);
        } else if (Array.isArray(data[key])) {
          for (const item of data[key]) {
            formData.append(key, item);
          }
        } else {
          formData.append(key, data[key]);
        }
      }
    }

    return formData;
  }

  handleResponse(ajaxResponse) {
    return ajaxResponse.response.result.data;
  }

  resolveUri(uri) {
    if (/^(http|https):\/\/.+$/.test(uri)) {
      return uri;
    }

    return `${Config.REACT_APP_API_URL_BACKEND}${uri}`;
  }

  generateHttpParams(params) {
    const httpParams = [];
    const objectToQueryString = (obj, prefix) => {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          const k = prefix ? prefix + "[" + key + "]" : key;
          const v = obj[key];

          if (Array.isArray(v)) {
            for (const vv of v) {
              httpParams.push(k + "=" + vv);
            }
          } else if (v !== null && typeof v === "object") {
            objectToQueryString(v, k);
          } else {
            if (!isNullOrUndefined(v) && !isStrEmpty(v.toString())) {
              httpParams.push(k + "=" + v);
            }
          }
        }
      }
    };

    objectToQueryString(params);

    return encodeURI(httpParams.join("&"));
  }

  getAccessToken() {
    // return (
    //   getCookie(localStorageKeys.USER_TOKEN) ||
    //   StorageService.get(localStorageKeys.USER_TOKEN) ||
    //   StorageService.getSession(localStorageKeys.USER_TOKEN)
    // );
  }
}

const HttpService = new _HttpService();

export default HttpService;
