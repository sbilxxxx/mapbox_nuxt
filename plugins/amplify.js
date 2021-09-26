import Vue from 'vue'
import Amplify from 'aws-amplify'
import '@aws-amplify/ui-vue'
import awsExports from '../src/aws-exports'

Amplify.configure(awsExports)
Vue.use(Amplify)

// import Vue from "vue";
// import Amplify, * as AmplifyModules from "aws-amplify";
// import { AmplifyPlugin } from "aws-amplify-vue";
// import awsconfig from "../src/aws-exports";
// // import awsExports from '../src/aws-exports'
// Amplify.configure(awsconfig);
// Vue.use(AmplifyPlugin, AmplifyModules);
