/**
 * Multiple Ways to Import and Export
 */
// import { IdolModel as IM, rose, number, ICat } from "./02-export-1";

// console.log(new IM('아이유', 32));
// console.log(new IdolModel('아이유', 32));

// import * as allTogether from "./02-export-1";

// console.log(allTogether.number);
// console.log(allTogether.rose);

// import cf, {rose, number} from "./02-export-1";

// console.log(cf);
// console.log(rose);

// baseUrl
import { IdolModel } from "./02-export-1";

console.log(new IdolModel('아이유', 32));