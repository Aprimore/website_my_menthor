/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

// Import required libraries (assume these are provided by the SDK and need to be accessible)
import 'dotenv/config';
import * as apiGateway from 'lib/apiGatewayCore/apiGatewayClient';
import * as uritemplate from 'lib/url-template/url-template';

const apigClientFactory = {};
apigClientFactory.newClient = function (config) {
	const apigClient = {};
	if (config === undefined) {
		config = {
			accessKey: '',
			secretKey: '',
			sessionToken: '',
			region: '',
			apiKey: undefined,
			defaultContentType: 'application/json',
			defaultAcceptType: 'application/json'
		};
	}
	if (config.accessKey === undefined) {
		config.accessKey = '';
	}
	if (config.secretKey === undefined) {
		config.secretKey = '';
	}
	if (config.apiKey === undefined) {
		config.apiKey = '';
	}
	if (config.sessionToken === undefined) {
		config.sessionToken = '';
	}
	if (config.region === undefined) {
		config.region = 'us-east-1';
	}
	// If defaultContentType is not defined, default to application/json
	if (config.defaultContentType === undefined) {
		config.defaultContentType = 'application/json';
	}
	// If defaultAcceptType is not defined, default to application/json
	if (config.defaultAcceptType === undefined) {
		config.defaultAcceptType = 'application/json';
	}

	// Extract endpoint and path from URL
	const invokeUrl = 'https://944st72zo1.execute-api.us-east-2.amazonaws.com/dev';
	const endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
	const pathComponent = invokeUrl.substring(endpoint.length);

	const sigV4ClientConfig = {
		accessKey: config.accessKey,
		secretKey: config.secretKey,
		sessionToken: config.sessionToken,
		serviceName: 'execute-api',
		region: config.region,
		endpoint: endpoint,
		defaultContentType: config.defaultContentType,
		defaultAcceptType: config.defaultAcceptType
	};

	let authType = 'NONE';
	if (sigV4ClientConfig.accessKey && sigV4ClientConfig.secretKey) {
		authType = 'AWS_IAM';
	}

	const simpleHttpClientConfig = {
		endpoint: endpoint,
		defaultContentType: config.defaultContentType,
		defaultAcceptType: config.defaultAcceptType
	};

	const apiGatewayClient = apiGateway.core.apiGatewayClientFactory.newClient(
		simpleHttpClientConfig,
		sigV4ClientConfig
	);

	apigClient.rootPost = function (params, body, additionalParams) {
		if (additionalParams === undefined) {
			additionalParams = {};
		}

		apiGateway.core.utils.assertParametersDefined(params, [], ['body']);

		const rootPostRequest = {
			verb: 'post'.toUpperCase(),
			path:
				pathComponent +
				uritemplate('/').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
			headers: apiGateway.core.utils.parseParametersToObject(params, []),
			queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
			body: body
		};

		return apiGatewayClient.makeRequest(rootPostRequest, authType, additionalParams, config.apiKey);
	};

	return apigClient;
};

export default apigClientFactory;
