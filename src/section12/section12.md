# Experimental Decorator

| File                   |               Link                |
| :--------------------- | :-------------------------------: |
| 01 Class Decorator     |   [Link](01-class-decorator.ts)   |
| 02 Method Decorator    |  [Link](02-method-decorator.ts)   |
| 03 Accessor Decrator   |  [Link](03-accessor-decrator.ts)  |
| 04 Property Decorator  | [Link](04-property-decorator.ts)  |
| 05 Parameter Decorator | [Link](05-parameter-decorator.ts) |

# tsconfig.json 파일 설정
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
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,

    /* Type Checking */
    "strict": true /* Enable all strict type-checking options. */,

    /* Completeness */
    "skipLibCheck": true
  }
}
```
