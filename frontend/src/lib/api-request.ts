/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ResponseWrapperListString {
	data?: string[];
	error?: string;
	status?:
		| '100 CONTINUE'
		| '101 SWITCHING_PROTOCOLS'
		| '102 PROCESSING'
		| '103 EARLY_HINTS'
		| '103 CHECKPOINT'
		| '200 OK'
		| '201 CREATED'
		| '202 ACCEPTED'
		| '203 NON_AUTHORITATIVE_INFORMATION'
		| '204 NO_CONTENT'
		| '205 RESET_CONTENT'
		| '206 PARTIAL_CONTENT'
		| '207 MULTI_STATUS'
		| '208 ALREADY_REPORTED'
		| '226 IM_USED'
		| '300 MULTIPLE_CHOICES'
		| '301 MOVED_PERMANENTLY'
		| '302 FOUND'
		| '302 MOVED_TEMPORARILY'
		| '303 SEE_OTHER'
		| '304 NOT_MODIFIED'
		| '305 USE_PROXY'
		| '307 TEMPORARY_REDIRECT'
		| '308 PERMANENT_REDIRECT'
		| '400 BAD_REQUEST'
		| '401 UNAUTHORIZED'
		| '402 PAYMENT_REQUIRED'
		| '403 FORBIDDEN'
		| '404 NOT_FOUND'
		| '405 METHOD_NOT_ALLOWED'
		| '406 NOT_ACCEPTABLE'
		| '407 PROXY_AUTHENTICATION_REQUIRED'
		| '408 REQUEST_TIMEOUT'
		| '409 CONFLICT'
		| '410 GONE'
		| '411 LENGTH_REQUIRED'
		| '412 PRECONDITION_FAILED'
		| '413 PAYLOAD_TOO_LARGE'
		| '413 REQUEST_ENTITY_TOO_LARGE'
		| '414 URI_TOO_LONG'
		| '414 REQUEST_URI_TOO_LONG'
		| '415 UNSUPPORTED_MEDIA_TYPE'
		| '416 REQUESTED_RANGE_NOT_SATISFIABLE'
		| '417 EXPECTATION_FAILED'
		| '418 I_AM_A_TEAPOT'
		| '419 INSUFFICIENT_SPACE_ON_RESOURCE'
		| '420 METHOD_FAILURE'
		| '421 DESTINATION_LOCKED'
		| '422 UNPROCESSABLE_ENTITY'
		| '423 LOCKED'
		| '424 FAILED_DEPENDENCY'
		| '425 TOO_EARLY'
		| '426 UPGRADE_REQUIRED'
		| '428 PRECONDITION_REQUIRED'
		| '429 TOO_MANY_REQUESTS'
		| '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
		| '451 UNAVAILABLE_FOR_LEGAL_REASONS'
		| '500 INTERNAL_SERVER_ERROR'
		| '501 NOT_IMPLEMENTED'
		| '502 BAD_GATEWAY'
		| '503 SERVICE_UNAVAILABLE'
		| '504 GATEWAY_TIMEOUT'
		| '505 HTTP_VERSION_NOT_SUPPORTED'
		| '506 VARIANT_ALSO_NEGOTIATES'
		| '507 INSUFFICIENT_STORAGE'
		| '508 LOOP_DETECTED'
		| '509 BANDWIDTH_LIMIT_EXCEEDED'
		| '510 NOT_EXTENDED'
		| '511 NETWORK_AUTHENTICATION_REQUIRED';
}

export interface Reservation {
	/** @format int32 */
	id?: number;
	status?: 'ACTIVE' | 'CANCELLED';
	restaurant?: Restaurant;
	timeSlot?: TimeSlot;
	user?: User;
}

export interface ResponseWrapperUser {
	data?: User;
	error?: string;
	status?:
		| '100 CONTINUE'
		| '101 SWITCHING_PROTOCOLS'
		| '102 PROCESSING'
		| '103 EARLY_HINTS'
		| '103 CHECKPOINT'
		| '200 OK'
		| '201 CREATED'
		| '202 ACCEPTED'
		| '203 NON_AUTHORITATIVE_INFORMATION'
		| '204 NO_CONTENT'
		| '205 RESET_CONTENT'
		| '206 PARTIAL_CONTENT'
		| '207 MULTI_STATUS'
		| '208 ALREADY_REPORTED'
		| '226 IM_USED'
		| '300 MULTIPLE_CHOICES'
		| '301 MOVED_PERMANENTLY'
		| '302 FOUND'
		| '302 MOVED_TEMPORARILY'
		| '303 SEE_OTHER'
		| '304 NOT_MODIFIED'
		| '305 USE_PROXY'
		| '307 TEMPORARY_REDIRECT'
		| '308 PERMANENT_REDIRECT'
		| '400 BAD_REQUEST'
		| '401 UNAUTHORIZED'
		| '402 PAYMENT_REQUIRED'
		| '403 FORBIDDEN'
		| '404 NOT_FOUND'
		| '405 METHOD_NOT_ALLOWED'
		| '406 NOT_ACCEPTABLE'
		| '407 PROXY_AUTHENTICATION_REQUIRED'
		| '408 REQUEST_TIMEOUT'
		| '409 CONFLICT'
		| '410 GONE'
		| '411 LENGTH_REQUIRED'
		| '412 PRECONDITION_FAILED'
		| '413 PAYLOAD_TOO_LARGE'
		| '413 REQUEST_ENTITY_TOO_LARGE'
		| '414 URI_TOO_LONG'
		| '414 REQUEST_URI_TOO_LONG'
		| '415 UNSUPPORTED_MEDIA_TYPE'
		| '416 REQUESTED_RANGE_NOT_SATISFIABLE'
		| '417 EXPECTATION_FAILED'
		| '418 I_AM_A_TEAPOT'
		| '419 INSUFFICIENT_SPACE_ON_RESOURCE'
		| '420 METHOD_FAILURE'
		| '421 DESTINATION_LOCKED'
		| '422 UNPROCESSABLE_ENTITY'
		| '423 LOCKED'
		| '424 FAILED_DEPENDENCY'
		| '425 TOO_EARLY'
		| '426 UPGRADE_REQUIRED'
		| '428 PRECONDITION_REQUIRED'
		| '429 TOO_MANY_REQUESTS'
		| '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
		| '451 UNAVAILABLE_FOR_LEGAL_REASONS'
		| '500 INTERNAL_SERVER_ERROR'
		| '501 NOT_IMPLEMENTED'
		| '502 BAD_GATEWAY'
		| '503 SERVICE_UNAVAILABLE'
		| '504 GATEWAY_TIMEOUT'
		| '505 HTTP_VERSION_NOT_SUPPORTED'
		| '506 VARIANT_ALSO_NEGOTIATES'
		| '507 INSUFFICIENT_STORAGE'
		| '508 LOOP_DETECTED'
		| '509 BANDWIDTH_LIMIT_EXCEEDED'
		| '510 NOT_EXTENDED'
		| '511 NETWORK_AUTHENTICATION_REQUIRED';
}

export interface Restaurant {
	/** @format int32 */
	id?: number;
	name?: string;
	email?: string;
	owner?: User;
	logoUrl?: string;
	/** @uniqueItems true */
	restaurants?: RestaurantTable[];
	/** @uniqueItems true */
	reservations?: Reservation[];
}

export interface RestaurantTable {
	/** @format int32 */
	id?: number;
	name?: string;
	/** @format int32 */
	capacity?: number;
	restaurant?: Restaurant;
}

export interface TimeSlot {
	/** @format int32 */
	id?: number;
	/** @format date-time */
	startDate?: string;
	/** @format date-time */
	endDate?: string;
	table?: RestaurantTable;
	restaurant?: Restaurant;
	available?: boolean;
}

export interface User {
	id?: string;
	username?: string;
	/** @uniqueItems true */
	restaurants?: Restaurant[];
}

export interface SearchTimeSlotDto {
	/** @format date-time */
	startDate?: string;
	/** @format date-time */
	endDate?: string;
}

export interface ResponseWrapperListRestaurant {
	data?: Restaurant[];
	error?: string;
	status?:
		| '100 CONTINUE'
		| '101 SWITCHING_PROTOCOLS'
		| '102 PROCESSING'
		| '103 EARLY_HINTS'
		| '103 CHECKPOINT'
		| '200 OK'
		| '201 CREATED'
		| '202 ACCEPTED'
		| '203 NON_AUTHORITATIVE_INFORMATION'
		| '204 NO_CONTENT'
		| '205 RESET_CONTENT'
		| '206 PARTIAL_CONTENT'
		| '207 MULTI_STATUS'
		| '208 ALREADY_REPORTED'
		| '226 IM_USED'
		| '300 MULTIPLE_CHOICES'
		| '301 MOVED_PERMANENTLY'
		| '302 FOUND'
		| '302 MOVED_TEMPORARILY'
		| '303 SEE_OTHER'
		| '304 NOT_MODIFIED'
		| '305 USE_PROXY'
		| '307 TEMPORARY_REDIRECT'
		| '308 PERMANENT_REDIRECT'
		| '400 BAD_REQUEST'
		| '401 UNAUTHORIZED'
		| '402 PAYMENT_REQUIRED'
		| '403 FORBIDDEN'
		| '404 NOT_FOUND'
		| '405 METHOD_NOT_ALLOWED'
		| '406 NOT_ACCEPTABLE'
		| '407 PROXY_AUTHENTICATION_REQUIRED'
		| '408 REQUEST_TIMEOUT'
		| '409 CONFLICT'
		| '410 GONE'
		| '411 LENGTH_REQUIRED'
		| '412 PRECONDITION_FAILED'
		| '413 PAYLOAD_TOO_LARGE'
		| '413 REQUEST_ENTITY_TOO_LARGE'
		| '414 URI_TOO_LONG'
		| '414 REQUEST_URI_TOO_LONG'
		| '415 UNSUPPORTED_MEDIA_TYPE'
		| '416 REQUESTED_RANGE_NOT_SATISFIABLE'
		| '417 EXPECTATION_FAILED'
		| '418 I_AM_A_TEAPOT'
		| '419 INSUFFICIENT_SPACE_ON_RESOURCE'
		| '420 METHOD_FAILURE'
		| '421 DESTINATION_LOCKED'
		| '422 UNPROCESSABLE_ENTITY'
		| '423 LOCKED'
		| '424 FAILED_DEPENDENCY'
		| '425 TOO_EARLY'
		| '426 UPGRADE_REQUIRED'
		| '428 PRECONDITION_REQUIRED'
		| '429 TOO_MANY_REQUESTS'
		| '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
		| '451 UNAVAILABLE_FOR_LEGAL_REASONS'
		| '500 INTERNAL_SERVER_ERROR'
		| '501 NOT_IMPLEMENTED'
		| '502 BAD_GATEWAY'
		| '503 SERVICE_UNAVAILABLE'
		| '504 GATEWAY_TIMEOUT'
		| '505 HTTP_VERSION_NOT_SUPPORTED'
		| '506 VARIANT_ALSO_NEGOTIATES'
		| '507 INSUFFICIENT_STORAGE'
		| '508 LOOP_DETECTED'
		| '509 BANDWIDTH_LIMIT_EXCEEDED'
		| '510 NOT_EXTENDED'
		| '511 NETWORK_AUTHENTICATION_REQUIRED';
}

export interface SearchRestaurantDto {
	restaurantName?: string;
}

export interface CreateReservationDto {
	/** @format int32 */
	tableId?: number;
	/** @format int32 */
	userId?: number;
	/** @format date-time */
	startDate?: string;
	/** @format date-time */
	endDate?: string;
}

export interface ResponseWrapperReservation {
	data?: Reservation;
	error?: string;
	status?:
		| '100 CONTINUE'
		| '101 SWITCHING_PROTOCOLS'
		| '102 PROCESSING'
		| '103 EARLY_HINTS'
		| '103 CHECKPOINT'
		| '200 OK'
		| '201 CREATED'
		| '202 ACCEPTED'
		| '203 NON_AUTHORITATIVE_INFORMATION'
		| '204 NO_CONTENT'
		| '205 RESET_CONTENT'
		| '206 PARTIAL_CONTENT'
		| '207 MULTI_STATUS'
		| '208 ALREADY_REPORTED'
		| '226 IM_USED'
		| '300 MULTIPLE_CHOICES'
		| '301 MOVED_PERMANENTLY'
		| '302 FOUND'
		| '302 MOVED_TEMPORARILY'
		| '303 SEE_OTHER'
		| '304 NOT_MODIFIED'
		| '305 USE_PROXY'
		| '307 TEMPORARY_REDIRECT'
		| '308 PERMANENT_REDIRECT'
		| '400 BAD_REQUEST'
		| '401 UNAUTHORIZED'
		| '402 PAYMENT_REQUIRED'
		| '403 FORBIDDEN'
		| '404 NOT_FOUND'
		| '405 METHOD_NOT_ALLOWED'
		| '406 NOT_ACCEPTABLE'
		| '407 PROXY_AUTHENTICATION_REQUIRED'
		| '408 REQUEST_TIMEOUT'
		| '409 CONFLICT'
		| '410 GONE'
		| '411 LENGTH_REQUIRED'
		| '412 PRECONDITION_FAILED'
		| '413 PAYLOAD_TOO_LARGE'
		| '413 REQUEST_ENTITY_TOO_LARGE'
		| '414 URI_TOO_LONG'
		| '414 REQUEST_URI_TOO_LONG'
		| '415 UNSUPPORTED_MEDIA_TYPE'
		| '416 REQUESTED_RANGE_NOT_SATISFIABLE'
		| '417 EXPECTATION_FAILED'
		| '418 I_AM_A_TEAPOT'
		| '419 INSUFFICIENT_SPACE_ON_RESOURCE'
		| '420 METHOD_FAILURE'
		| '421 DESTINATION_LOCKED'
		| '422 UNPROCESSABLE_ENTITY'
		| '423 LOCKED'
		| '424 FAILED_DEPENDENCY'
		| '425 TOO_EARLY'
		| '426 UPGRADE_REQUIRED'
		| '428 PRECONDITION_REQUIRED'
		| '429 TOO_MANY_REQUESTS'
		| '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
		| '451 UNAVAILABLE_FOR_LEGAL_REASONS'
		| '500 INTERNAL_SERVER_ERROR'
		| '501 NOT_IMPLEMENTED'
		| '502 BAD_GATEWAY'
		| '503 SERVICE_UNAVAILABLE'
		| '504 GATEWAY_TIMEOUT'
		| '505 HTTP_VERSION_NOT_SUPPORTED'
		| '506 VARIANT_ALSO_NEGOTIATES'
		| '507 INSUFFICIENT_STORAGE'
		| '508 LOOP_DETECTED'
		| '509 BANDWIDTH_LIMIT_EXCEEDED'
		| '510 NOT_EXTENDED'
		| '511 NETWORK_AUTHENTICATION_REQUIRED';
}

export interface ResponseWrapperListReservation {
	data?: Reservation[];
	error?: string;
	status?:
		| '100 CONTINUE'
		| '101 SWITCHING_PROTOCOLS'
		| '102 PROCESSING'
		| '103 EARLY_HINTS'
		| '103 CHECKPOINT'
		| '200 OK'
		| '201 CREATED'
		| '202 ACCEPTED'
		| '203 NON_AUTHORITATIVE_INFORMATION'
		| '204 NO_CONTENT'
		| '205 RESET_CONTENT'
		| '206 PARTIAL_CONTENT'
		| '207 MULTI_STATUS'
		| '208 ALREADY_REPORTED'
		| '226 IM_USED'
		| '300 MULTIPLE_CHOICES'
		| '301 MOVED_PERMANENTLY'
		| '302 FOUND'
		| '302 MOVED_TEMPORARILY'
		| '303 SEE_OTHER'
		| '304 NOT_MODIFIED'
		| '305 USE_PROXY'
		| '307 TEMPORARY_REDIRECT'
		| '308 PERMANENT_REDIRECT'
		| '400 BAD_REQUEST'
		| '401 UNAUTHORIZED'
		| '402 PAYMENT_REQUIRED'
		| '403 FORBIDDEN'
		| '404 NOT_FOUND'
		| '405 METHOD_NOT_ALLOWED'
		| '406 NOT_ACCEPTABLE'
		| '407 PROXY_AUTHENTICATION_REQUIRED'
		| '408 REQUEST_TIMEOUT'
		| '409 CONFLICT'
		| '410 GONE'
		| '411 LENGTH_REQUIRED'
		| '412 PRECONDITION_FAILED'
		| '413 PAYLOAD_TOO_LARGE'
		| '413 REQUEST_ENTITY_TOO_LARGE'
		| '414 URI_TOO_LONG'
		| '414 REQUEST_URI_TOO_LONG'
		| '415 UNSUPPORTED_MEDIA_TYPE'
		| '416 REQUESTED_RANGE_NOT_SATISFIABLE'
		| '417 EXPECTATION_FAILED'
		| '418 I_AM_A_TEAPOT'
		| '419 INSUFFICIENT_SPACE_ON_RESOURCE'
		| '420 METHOD_FAILURE'
		| '421 DESTINATION_LOCKED'
		| '422 UNPROCESSABLE_ENTITY'
		| '423 LOCKED'
		| '424 FAILED_DEPENDENCY'
		| '425 TOO_EARLY'
		| '426 UPGRADE_REQUIRED'
		| '428 PRECONDITION_REQUIRED'
		| '429 TOO_MANY_REQUESTS'
		| '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
		| '451 UNAVAILABLE_FOR_LEGAL_REASONS'
		| '500 INTERNAL_SERVER_ERROR'
		| '501 NOT_IMPLEMENTED'
		| '502 BAD_GATEWAY'
		| '503 SERVICE_UNAVAILABLE'
		| '504 GATEWAY_TIMEOUT'
		| '505 HTTP_VERSION_NOT_SUPPORTED'
		| '506 VARIANT_ALSO_NEGOTIATES'
		| '507 INSUFFICIENT_STORAGE'
		| '508 LOOP_DETECTED'
		| '509 BANDWIDTH_LIMIT_EXCEEDED'
		| '510 NOT_EXTENDED'
		| '511 NETWORK_AUTHENTICATION_REQUIRED';
}

export type UpdateUserPermissionsData = ResponseWrapperListString;

export type CreateNewUserData = ResponseWrapperUser;

export type SearchAvailableRestaurantData = ResponseWrapperListRestaurant;

export type SearchRestaurantData = ResponseWrapperListRestaurant;

export type CreateReservationData = ResponseWrapperReservation;

export type CancelReservationData = ResponseWrapperReservation;

export type GetReservationData = ResponseWrapperListReservation;

export type HealthCheckData = string;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
	/** set parameter to `true` for call `securityWorker` for this request */
	secure?: boolean;
	/** request path */
	path: string;
	/** content type of request body */
	type?: ContentType;
	/** query params */
	query?: QueryParamsType;
	/** format of response (i.e. response.json() -> format: "json") */
	format?: ResponseFormat;
	/** request body */
	body?: unknown;
	/** base url */
	baseUrl?: string;
	/** request cancellation token */
	cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
	baseUrl?: string;
	baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
	securityWorker?: (
		securityData: SecurityDataType | null
	) => Promise<RequestParams | void> | RequestParams | void;
	customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
	data: D;
	error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
	Json = 'application/json',
	FormData = 'multipart/form-data',
	UrlEncoded = 'application/x-www-form-urlencoded',
	Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
	public baseUrl: string = 'http://localhost:8001';
	private securityData: SecurityDataType | null = null;
	private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
	private abortControllers = new Map<CancelToken, AbortController>();
	private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

	private baseApiParams: RequestParams = {
		credentials: 'same-origin',
		headers: {},
		redirect: 'follow',
		referrerPolicy: 'no-referrer'
	};

	constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
		Object.assign(this, apiConfig);
	}

	public setSecurityData = (data: SecurityDataType | null) => {
		this.securityData = data;
	};

	protected encodeQueryParam(key: string, value: any) {
		const encodedKey = encodeURIComponent(key);
		return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
	}

	protected addQueryParam(query: QueryParamsType, key: string) {
		return this.encodeQueryParam(key, query[key]);
	}

	protected addArrayQueryParam(query: QueryParamsType, key: string) {
		const value = query[key];
		return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
	}

	protected toQueryString(rawQuery?: QueryParamsType): string {
		const query = rawQuery || {};
		const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
		return keys
			.map((key) =>
				Array.isArray(query[key])
					? this.addArrayQueryParam(query, key)
					: this.addQueryParam(query, key)
			)
			.join('&');
	}

	protected addQueryParams(rawQuery?: QueryParamsType): string {
		const queryString = this.toQueryString(rawQuery);
		return queryString ? `?${queryString}` : '';
	}

	private contentFormatters: Record<ContentType, (input: any) => any> = {
		[ContentType.Json]: (input: any) =>
			input !== null && (typeof input === 'object' || typeof input === 'string')
				? JSON.stringify(input)
				: input,
		[ContentType.Text]: (input: any) =>
			input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
		[ContentType.FormData]: (input: any) =>
			Object.keys(input || {}).reduce((formData, key) => {
				const property = input[key];
				formData.append(
					key,
					property instanceof Blob
						? property
						: typeof property === 'object' && property !== null
						? JSON.stringify(property)
						: `${property}`
				);
				return formData;
			}, new FormData()),
		[ContentType.UrlEncoded]: (input: any) => this.toQueryString(input)
	};

	protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
		return {
			...this.baseApiParams,
			...params1,
			...(params2 || {}),
			headers: {
				...(this.baseApiParams.headers || {}),
				...(params1.headers || {}),
				...((params2 && params2.headers) || {})
			}
		};
	}

	protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
		if (this.abortControllers.has(cancelToken)) {
			const abortController = this.abortControllers.get(cancelToken);
			if (abortController) {
				return abortController.signal;
			}
			return void 0;
		}

		const abortController = new AbortController();
		this.abortControllers.set(cancelToken, abortController);
		return abortController.signal;
	};

	public abortRequest = (cancelToken: CancelToken) => {
		const abortController = this.abortControllers.get(cancelToken);

		if (abortController) {
			abortController.abort();
			this.abortControllers.delete(cancelToken);
		}
	};

	public request = async <T = any, E = any>({
		body,
		secure,
		path,
		type,
		query,
		format,
		baseUrl,
		cancelToken,
		...params
	}: FullRequestParams): Promise<HttpResponse<T, E>> => {
		const secureParams =
			((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
				this.securityWorker &&
				(await this.securityWorker(this.securityData))) ||
			{};
		const requestParams = this.mergeRequestParams(params, secureParams);
		const queryString = query && this.toQueryString(query);
		const payloadFormatter = this.contentFormatters[type || ContentType.Json];
		const responseFormat = format || requestParams.format;

		return this.customFetch(
			`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
			{
				...requestParams,
				headers: {
					...(requestParams.headers || {}),
					...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {})
				},
				signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
				body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body)
			}
		).then(async (response) => {
			const r = response as HttpResponse<T, E>;
			r.data = null as unknown as T;
			r.error = null as unknown as E;

			const data = !responseFormat
				? r
				: await response[responseFormat]()
						.then((data) => {
							if (r.ok) {
								r.data = data;
							} else {
								r.error = data;
							}
							return r;
						})
						.catch((e) => {
							r.error = e;
							return r;
						});

			if (cancelToken) {
				this.abortControllers.delete(cancelToken);
			}

			if (!response.ok) throw data;
			return data;
		});
	};
}

/**
 * @title OpenAPI definition
 * @version v0
 * @baseUrl http://localhost:8001
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
	api = {
		/**
		 * No description
		 *
		 * @tags user-controller
		 * @name UpdateUserPermissions
		 * @request PUT:/api/users/{id}/roles
		 */
		updateUserPermissions: (id: string, data: string[], params: RequestParams = {}) =>
			this.request<UpdateUserPermissionsData, any>({
				path: `/api/users/${id}/roles`,
				method: 'PUT',
				body: data,
				type: ContentType.Json,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags user-controller
		 * @name CreateNewUser
		 * @request POST:/api/users
		 */
		createNewUser: (params: RequestParams = {}) =>
			this.request<CreateNewUserData, any>({
				path: `/api/users`,
				method: 'POST',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags restaurant-controller
		 * @name SearchAvailableRestaurant
		 * @request POST:/api/restaurants/time-slot/query
		 */
		searchAvailableRestaurant: (data: SearchTimeSlotDto, params: RequestParams = {}) =>
			this.request<SearchAvailableRestaurantData, any>({
				path: `/api/restaurants/time-slot/query`,
				method: 'POST',
				body: data,
				type: ContentType.Json,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags restaurant-controller
		 * @name SearchRestaurant
		 * @request POST:/api/restaurants/query
		 */
		searchRestaurant: (data: SearchRestaurantDto, params: RequestParams = {}) =>
			this.request<SearchRestaurantData, any>({
				path: `/api/restaurants/query`,
				method: 'POST',
				body: data,
				type: ContentType.Json,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags reservation-controller
		 * @name CreateReservation
		 * @request POST:/api/reservations
		 */
		createReservation: (data: CreateReservationDto, params: RequestParams = {}) =>
			this.request<CreateReservationData, any>({
				path: `/api/reservations`,
				method: 'POST',
				body: data,
				type: ContentType.Json,
				...params
			}),

		/**
		 * No description
		 *
		 * @tags reservation-controller
		 * @name CancelReservation
		 * @request POST:/api/reservations/{id}/cancellation
		 */
		cancelReservation: (id: number, params: RequestParams = {}) =>
			this.request<CancelReservationData, any>({
				path: `/api/reservations/${id}/cancellation`,
				method: 'POST',
				...params
			}),

		/**
		 * No description
		 *
		 * @tags user-controller
		 * @name GetReservation
		 * @request GET:/api/users/{id}/reservations
		 */
		getReservation: (id: string, params: RequestParams = {}) =>
			this.request<GetReservationData, any>({
				path: `/api/users/${id}/reservations`,
				method: 'GET',
				...params
			}),

		getReservationsForRestaurant: (restaurantName: string, params: RequestParams = {}) =>
			this.request<GetReservationData, any>({
				path: `/api/restaurants/${restaurantName}/reservations`,
				method: 'GET',
				...params
			}),
		/**
		 * No description
		 *
		 * @tags health-check-controller
		 * @name HealthCheck
		 * @request GET:/api/health-check
		 */
		healthCheck: (params: RequestParams = {}) =>
			this.request<HealthCheckData, any>({
				path: `/api/health-check`,
				method: 'GET',
				...params
			})
	};
}
