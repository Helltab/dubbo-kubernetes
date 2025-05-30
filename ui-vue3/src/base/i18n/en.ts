/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { I18nType } from './type.ts'

const words: I18nType = {
  loginDomain: {
    username: 'Username',
    password: 'Password',
    login: 'Login',
    authFail: 'Auth Fail'
  },
  destinationRuleDomain: {
    YAMLView: 'YAML view',
    formView: 'Form view'
  },
  virtualServiceDomain: {
    YAMLView: 'YAML view',
    formView: 'Form view'
  },
  dynamicConfigDomain: {
    YAMLView: 'YAML view',
    formView: 'Form view',
    event: 'Event'
  },
  updateRoutingRuleDomain: {
    YAMLView: 'YAML view',
    formView: 'Form view'
  },

  routingRuleDomain: {
    YAMLView: 'YAML view',
    formView: 'Form view'
  },
  addRoutingRuleDomain: {
    YAMLView: 'YAML view',
    formView: 'Form view'
  },
  tagRuleDomain: {
    YAMLView: 'YAML view',
    formView: 'Form view'
  },
  updateTagRuleDomain: {
    YAMLView: 'YAML view',
    formView: 'Form view'
  },
  addTagRuleDomain: {
    YAMLView: 'YAML view',
    formView: 'Form view'
  },
  flowControlDomain: {
    actuatingRange: 'Actuating range',
    notSet: 'Not set',
    versionRecords: 'Version records',
    YAMLView: 'YAML View',
    addConfiguration: 'Add configuration',
    addConfigurationItem: 'Add configurationItem',
    addFilter: 'Add filter',
    configurationItem: 'Configuration item',
    scopeScreening: 'Scope screening',
    endOfAction: 'End of action',
    addLabel: 'Add label',
    actions: 'Actions',
    filterType: 'Filter type',
    labelName: 'Label name',
    formView: 'Form view',
    addMatch: 'Add match',
    addRouter: 'Add router',
    addressSubsetMatching: 'Address subset matching',
    value: 'Value',
    relation: 'Relation',
    parameter: 'Parameter',
    matchingDimension: 'Matching dimension',
    requestParameterMatching: 'Request parameter matching',
    ruleName: 'Rule name',
    actionObject: 'Action object',
    faultTolerantProtection: 'Fault-tolerant protection',
    runTimeEffective: 'Run time effective',
    ruleGranularity: 'Rule granularity',
    effectTime: 'Time of taking effect',
    enabledState: 'Enabled status',
    priority: 'Priority',
    off: 'off',
    on: 'on',
    opened: 'Opened',
    closed: 'Closed',
    enabled: 'Enabled',
    disabled: 'Disabled'
  },
  instanceDomain: {
    flowDisabled: 'Flow disabled',
    operatorLog: 'Operator log',
    enableAppInstanceLogs: 'Enable access logs for all instances of this application',
    appServiceRetries: 'Adjust the number of retries for the service provided by this application',
    appServiceLoadBalance:
      'Adjusting the load balancing strategy for application service provision',
    appServiceNegativeClusteringMethod:
      'Adjusting the clustering approach for application service provision',
    appServiceTimeout: 'Adjusting the timeout for application service provision',
    close: 'Close',
    enable: 'Enable',
    executionLog: 'ExecutionLog',
    loadBalance: 'LoadBalance',
    instanceIP: 'InstanceIP',
    clusterApproach: 'ClusterApproach',
    details: 'Detail',
    retryCount: 'RetryCount',
    timeout_ms: 'Timeout(ms)',
    monitor: 'Monitor',
    linkTracking: 'LinkTracking',
    configuration: 'Configuration',
    event: 'Event',
    instanceName: 'InstanceName',
    ip: 'Ip',
    name: 'Name',
    deployState: 'Deploy State',
    deployCluster: 'Deploy Cluster',
    deployClusters: 'Deploy Clusters',
    registerState: 'Register State',
    registerCluster: 'Register Cluster',
    registryClusters: 'Registry Clusters',
    CPU: 'CPU',
    node: 'Node',
    memory: 'Memory',
    owningWorkload_k8s: 'Owning Workload(k8s)',
    creationTime_k8s: 'CreationTime(k8s)',
    startTime: 'StartTime',
    dubboPort: 'DubboPort',
    instanceImage_k8s: 'Image(k8s)',
    instanceLabel: 'Instance Label',
    whichApplication: 'Owning Application',
    healthExamination_k8s: 'Health Examination(k8s)',
    registerTime: 'RegisterTime',
    labels: 'Labels',
    startTime_k8s: 'StartTime(k8s)',
    instanceCount: 'Instance Count'
  },
  serviceDomain: {
    name: 'Name',
    timeout: 'Timeout',
    retryNum: 'Retry Num',
    sameAreaFirst: 'Same Area First',
    closed: 'Closed',
    opened: 'Opened',
    paramRoute: 'Param Route'
  },
  appServiceTimeout: 'Adjusting the timeout for application service provision',
  enableAppInstanceLogs: 'Enable access logs for all instances of this application',
  appServiceLoadBalance: 'Adjusting the load balancing strategy for application service provision',
  appServiceRetries: 'Adjusting the number of retries for application provided services',
  appServiceNegativeClusteringMethod:
    'Adjusting the negative clustering method for application service provision',
  executionLog: 'Execution Log',
  clusterApproach: 'Cluster Approach',
  retryCount: 'Retry Count',
  event: 'Event',
  configuration: 'Configuration',
  linkTracking: 'Link Tracking',
  monitor: 'Monitor',
  details: 'Details',
  creationTime_k8s: 'creationTime(k8s)',
  dubboPort: 'Dubbo Port',
  whichApplication: 'application',
  registerTime: 'Register Time',
  startTime_k8s: 'Start Time(k8s)',
  registerStates: 'Register States',
  deployState: 'Deployment Status',
  owningWorkload_k8s: 'Owning Workload(k8s)',
  creationTime: 'Creation Time',
  nodeIP: 'Node IP',
  healthExamination: 'Health Examination',
  instanceImage_k8s: 'Image(k8s)',
  instanceLabel: 'Instance Label',
  instanceDetail: 'Instance Detail',
  state: 'State',
  memory: 'Memory',
  CPU: 'CPU',
  node: 'Node',
  labels: 'Labels',
  instanceIP: 'Instance IP',
  instanceName: 'Instance Name',
  instance: 'Instance',
  resourceDetails: 'Resource Details',
  service: 'Service',
  versionGroup: 'Version & Group',
  avgQPS: 'last 1min QPS',
  avgRT: 'last 1min RT',
  requestTotal: 'last 1min request total',
  serviceSearch: 'Search Service',
  serviceGovernance: 'Routing Rule',
  trafficManagement: 'Traffic Management',
  routingRule: 'Condition Rule',
  tagRule: 'Tag Rule',
  meshRule: 'Mesh Rule',
  dynamicConfig: 'Dynamic Config',
  accessControl: 'Black White List',
  weightAdjust: 'Weight Adjust',
  loadBalance: 'Load Balance',
  serviceTest: 'Service Test',
  serviceMock: 'Service Mock',
  serviceMetrics: 'Service Metrics',
  serviceRelation: 'Service Relation',
  metrics: 'Metrics',
  relation: 'Relation',
  group: 'Group',
  serviceInfo: 'Service Info',
  providers: 'Providers',
  consumers: 'Consumers',
  common: 'Common',
  version: 'Version',
  app: 'Application',
  services: 'Services',
  application: 'Application',
  all: 'All',
  ip: 'IP',
  qps: 'qps',
  rt: 'rt',
  successRate: 'success rate',
  port: 'PORT',
  timeout: 'timeout(ms)',
  serialization: 'serialization',
  appName: 'Application Name',
  instanceNum: 'Instance Number',
  deployCluster: 'Deploy Cluster',
  registerCluster: 'Register Cluster',
  serviceName: 'Service Name',
  registrySource: 'Registry Source',
  instanceRegistry: 'Instance Registry',
  interfaceRegistry: 'Interface Registry',
  allRegistry: 'Instance / Interface Registry',
  operation: 'Operation',
  searchResult: 'Search Result',
  search: 'Search',
  methodName: 'Method Name',
  enabled: 'Enabled',
  disabled: 'Disabled',
  method: 'Method',
  weight: 'Weight',
  create: 'CREATE',
  save: 'SAVE',
  cancel: 'CANCEL',
  close: 'CLOSE',
  confirm: 'CONFIRM',
  ruleContent: 'RULE CONTENT',
  createNewRoutingRule: 'Create New Routing Rule',
  createNewTagRule: 'Create New Tag Rule',
  createNewMeshRule: 'Create New Mesh Rule',
  createNewDynamicConfigRule: 'Create New Dynamic Config Rule',
  createNewWeightRule: 'Create New Weight Rule',
  createNewLoadBalanceRule: 'Create new load balancing rule',
  createTimeoutRule: 'Create timeout rule',
  createRetryRule: 'Create timeout rule',
  createRegionRule: 'Create retry rule',
  createArgumentRule: 'Create argument routing rule',
  createMockCircuitRule: 'Create mock (circuit breaking) rule',
  createAccesslogRule: 'Create accesslog rule',
  createGrayRule: 'Create gray rule',
  createWeightRule: 'Create weighting rule',
  serviceIdHint: 'Service ID',
  view: 'View',
  edit: 'Edit',
  delete: 'Delete',
  searchRoutingRule: 'Search Routing Rule',
  searchAccess: 'Search Access Rule',
  searchWeightRule: 'Search Weight Adjust Rule',
  dataIdClassHint: 'Complete package path of service interface class',
  dataIdVersionHint:
    'The version of the service interface, which can be filled in according to the actual situation of the interface',
  dataIdGroupHint:
    'The group of the service interface, which can be filled in according to the actual situation of the interface',
  agree: 'Agree',
  disagree: 'Disagree',
  searchDynamicConfig: 'Search Dynamic Config',
  appNameHint: 'Application name the service belongs to',
  basicInfo: 'BasicInfo',
  metaData: 'MetaData',
  methodMetrics: 'Method Statistics',
  searchDubboService: 'Search Dubbo Services or applications',
  serviceSearchHint: 'Service ID, org.apache.dubbo.demo.api.DemoService, * for all services',
  ipSearchHint: 'Find all services provided by the target server on the specified IP address',
  appSearchHint:
    'Input an application name to find all services provided by one particular application, * for all',
  searchTagRule: 'Search Tag Rule by application name',
  searchMeshRule: 'Search Mesh Rule by application name',
  searchSingleMetrics: 'Search Metrics by IP',
  searchBalanceRule: 'Search Balancing Rule',
  noMetadataHint:
    'There is no metadata available, please update to Dubbo2.7, or check your config center configuration in application.properties, please check ',
  parameterList: 'parameterList',
  returnType: 'returnType',
  here: 'here',
  configAddress: 'https://github.com/apache/incubator-dubbo-admin/wiki/Dubbo-Admin-configuration',
  whiteList: 'White List',
  whiteListHint: 'White list IP address, divided by comma: 1.1.1.1,2.2.2.2',
  blackList: 'Black List',
  blackListHint: 'Black list IP address, divided by comma: 3.3.3.3,4.4.4.4',
  address: 'Address',
  weightAddressHint: 'IP addresses to set this weight, divided by comma: 1.1.1.1,2.2.2.2',
  weightHint: 'weight value, default is 100',
  methodHint: 'choose method of load balancing, * for all methods',
  strategy: 'Strategy',
  balanceStrategyHint: 'load balancing strategy',
  goIndex: 'Go To Index',
  releaseLater: 'will release later',
  later: {
    metrics: 'Metrics will release later',
    serviceTest: 'Service Test will release later',
    serviceMock: 'Service Mock will release later'
  },
  by: 'by ',
  $vuetify: {
    dataIterator: {
      rowsPerPageText: 'Items per page:',
      rowsPerPageAll: 'All',
      pageText: '{0}-{1} of {2}',
      noResultsText: 'No matching records found',
      nextPage: 'Next page',
      prevPage: 'Previous page'
    },
    dataTable: {
      rowsPerPageText: 'Rows per page:'
    },
    noDataText: 'No data available'
  },
  configManage: 'Configuration Management',
  configCenterAddress: 'ConfigCenter Address',
  searchDubboConfig: 'Search Dubbo Config',
  createNewDubboConfig: 'Create New Dubbo Config',
  scope: 'Scope',
  name: 'Name',
  warnDeleteConfig: ' Are you sure to Delete Dubbo Config: ',
  warnDeleteRouteRule: 'Are you sure to Delete routing rule',
  warnDeleteDynamicConfig: 'Are you sure to Delete dynamic config',
  warnDeleteBalancing: 'Are you sure to Delete load balancing',
  warnDeleteAccessControl: 'Are you sure to Delete access control',
  warnDeleteTagRule: 'Are you sure to Delete tag rule',
  warnDeleteMeshRule: 'Are you sure to Delete mesh rule',
  warnDeleteWeightAdjust: 'Are you sure to Delete weight adjust',
  configNameHint:
    "Application name the config belongs to, use 'global'(without quotes) for global config",
  configContent: 'Config Content',
  testMethod: 'Test Method',
  execute: 'EXECUTE',
  result: 'Result: ',
  success: 'SUCCESS',
  fail: 'FAIL',
  detail: 'Detail',
  more: 'More',
  copyUrl: 'Copy URL',
  copy: 'Copy',
  url: 'URL',
  copySuccessfully: 'Copied',
  test: 'Test',
  placeholders: {
    searchService: 'Search by service name'
  },
  methods: 'Methods',
  testModule: {
    searchServiceHint:
      'Entire service ID, org.apache.dubbo.demo.api.DemoService, press Enter to search'
  },
  userName: 'User Name',
  password: 'Password',
  login: 'Login',
  apiDocs: 'API Docs',
  apiDocsRes: {
    dubboProviderIP: 'Dubbo Provider Ip',
    dubboProviderPort: 'Dubbo Provider Port',
    loadApiList: 'Load Api List',
    apiListText: 'Api List',
    apiForm: {
      missingInterfaceInfo: 'Missing interface information',
      getApiInfoErr: 'Exception in obtaining interface information',
      api404Err:
        'Interface name is incorrect, interface parameters and response information are not found',
      apiRespDecShowLabel: 'Response Description',
      apiNameShowLabel: 'Api Name',
      apiPathShowLabel: 'Api Path',
      apiMethodParamInfoLabel: 'Api method parameters',
      apiVersionShowLabel: 'Api Version',
      apiGroupShowLabel: 'Api Group',
      apiDescriptionShowLabel: 'Api Description',
      isAsyncFormLabel:
        'Whether to call asynchronously (this parameter cannot be modified, according to whether to display asynchronously defined by the interface)',
      apiModuleFormLabel: 'Api module (this parameter cannot be modified)',
      apiFunctionNameFormLabel: 'Api function name(this parameter cannot be modified)',
      registryCenterUrlFormLabel:
        'Registry address. If it is empty, Dubbo provider IP and port will be used for direct connection',
      paramNameLabel: 'Parameter name',
      paramPathLabel: 'Parameter path',
      paramDescriptionLabel: 'Description',
      paramRequiredLabel: 'This parameter is required',
      doTestBtn: 'Do Test',
      responseLabel: 'Response',
      responseExampleLabel: 'Response Example',
      apiResponseLabel: 'Api Response',
      LoadingLabel: 'Loading...',
      requireTip: 'There are required items not filled in',
      requireItemTip: 'This field is required',
      requestApiErrorTip:
        'There is an exception in the request interface. Please check the submitted data, especially the JSON class data and the enumeration part',
      unsupportedHtmlTypeTip: 'Temporarily unsupported form type',
      none: 'none'
    }
  },
  authFailed: 'Authorized failed,please login.',

  ruleList: 'Rule List',
  mockRule: 'Mock Rule',
  mockData: 'Mock Data',
  globalDisable: 'Global Disable',
  globalEnable: 'Global Enable',
  saveRuleSuccess: 'Save Rule Successfully',
  deleteRuleSuccess: 'Delete Rule Successfully',
  disableRuleSuccess: 'Disable Rule Successfully',
  enableRuleSuccess: 'Enable Rule Successfully',
  methodNameHint: 'The method name of Service',
  createMockRule: 'Create Mock Rule',
  editMockRule: 'Edit Mock Rule',
  deleteRuleTitle: 'Are you sure to delete this mock rule?',

  createTime: 'Create Time',
  lastModifiedTime: 'Last Modified Time',
  trafficTimeout: 'Timeout',
  trafficRetry: 'Retry',
  trafficRegion: 'Region Aware',
  trafficIsolation: 'Isolation',
  trafficWeight: 'Weight Percentage',
  trafficArguments: 'Arg Routing',
  trafficMock: 'Mock',
  trafficAccesslog: 'Accesslog',
  trafficHost: 'Host',
  homePage: 'Cluster Overview',
  serviceManagement: 'Dev & Test',
  resources: 'Resources',
  applications: 'Applications',
  instances: 'Instances',
  applicationDomain: {
    instanceCount: 'Instance Count',
    deployClusters: 'Deploy Clusters',
    registryClusters: 'Registry Clusters',
    registerClusters: 'Registry Clusters',
    registerModes: 'Register Modes',
    operatorLog: 'OperatorLog',
    flowWeight: 'FlowWeight',
    gray: 'Gray',
    detail: 'Detail',
    instance: 'Instance',
    service: 'Service',
    monitor: 'Monitor',
    tracing: 'Tracing',
    config: 'Config',
    event: 'Event',
    appName: 'Application Name',
    rpcProtocols: 'Rpc Protocols',
    dubboVersions: 'Dubbo Versions',
    dubboPorts: 'Dubbo Ports',
    serialProtocols: 'Serial Protocols',
    appTypes: 'Application Types',
    images: 'Images',
    workloads: 'Workloads',
    deployCluster: 'Deploy Cluster',
    registerCluster: 'Register Cluster',
    registerMode: 'Register Mode'
  },
  searchDomain: {
    total: 'Total',
    unit: 'items'
  },
  messageDomain: {
    success: {
      copy: 'You have successfully copied a piece of information'
    }
  },
  backHome: 'Back Home',
  noPageTip: 'Sorry, the page you visited does not exist.',
  globalSearchTip: 'Search ip, application, instance, service',
  placeholder: {
    typeAppName: 'please type appName, support for prefix',
    typeDefault: 'please type '
  },
  none: 'No Select',
  debug: 'Debug',
  distribution: 'Distribution',
  tracing: 'Tracing',
  sceneConfig: 'Scene Config',

  provideService: 'Provide Service',
  dependentService: 'Dependent Service',
  submit: 'Submit',
  reset: 'Reset',
  router: {
    resource: {
      app: {
        list: 'List'
      },
      ins: {
        list: 'List'
      },
      svc: {
        list: 'List'
      }
    }
  },
  form: {
    save: 'SAVE'
  }
}

export default words
