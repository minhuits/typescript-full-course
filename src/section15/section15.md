# Import and Export

| File                                  |                               Link                                |
| :------------------------------------ | :---------------------------------------------------------------: |
| 01 Export Default                     | [Link1](01-export-default-1.ts) / [Link2](01-export-default-2.ts) |
| 02 Export                             |         [Link1](02-export-1.ts) / [Link2](02-export-2.ts)         |
| 03 Export와 Import를 하는 다양한 방법 |         [Link](03-multiple-ways-to-import-and-export.ts)          |

# tsconfig.json
```json
{
  "compilerOptions": {
    /* Language and Environment */
    "target": "es2020",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "moduleDetection": "force",

    /* Modules */
    "module": "commonjs",
    "rootDir": "./src",
    "baseUrl": "./" /* 활성화 */,  
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,

    /* Type Checking */
    "strict": true /* Enable all strict type-checking options. */,

    /* Completeness */
    "skipLibCheck": true
  }
}
```
