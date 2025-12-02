/**
 * This file was automatically generated based on your preset configuration.
 *
 * For better type checking and IntelliSense:
 * 1. Install azion as dev dependency:
 *    npm install -D azion
 *
 * 2. Use defineConfig:
 *    import { defineConfig } from 'azion'
 *
 * 3. Replace the configuration with defineConfig:
 *    export default defineConfig({
 *      // Your configuration here
 *    })
 *
 * For more configuration options, visit:
 * https://github.com/aziontech/lib/tree/main/packages/config
 */

export default {
  build: {
    preset: 'typescript',
    polyfills: true,
    entry: 'src/index.ts',
    worker: true
  },
  functions: [
    {
      name: 'rag-demo-retrieval-orchestration',
      path: './functions/index.js'
    }
  ],
  applications: [
    {
      name: 'rag-demo-retrieval-orchestration',
      rules: {
        request: [
          {
            name: 'Execute Function',
            description: 'Execute function for all requests',
            active: true,
            criteria: [
              [
                {
                  variable: '${uri}',
                  conditional: 'if',
                  operator: 'matches',
                  argument: '^/'
                }
              ]
            ],
            behaviors: [
              {
                type: 'run_function',
                attributes: {
                  value: 'rag-demo-retrieval-orchestration'
                }
              }
            ]
          }
        ]
      },
      functionsInstances: [
        {
          name: 'rag-demo-retrieval-orchestration',
          ref: 'rag-demo-retrieval-orchestration'
        }
      ]
    }
  ],
  workloads: [
    {
      name: 'rag-demo-retrieval-orchestration',
      active: true,
      infrastructure: 1,
      protocols: {
        http: {
          versions: ['http1', 'http2'],
          httpPorts: [80],
          httpsPorts: [443],
          quicPorts: null
        }
      },
      deployments: [
        {
          name: 'rag-demo-retrieval-orchestration',
          current: true,
          active: true,
          strategy: {
            type: 'default',
            attributes: {
              application: 'rag-demo-retrieval-orchestration'
            }
          }
        }
      ]
    }
  ]
}
