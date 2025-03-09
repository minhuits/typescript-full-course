/**
 * Generic in Type
 */
type GenericSimpleType<T> = T; // GenericSimpleType은 T라는 타입을 받아서 T를 리턴하는 타입이다.

const genericString: GenericSimpleType<string> = '코드팩토리'; // string 타입을 받아서 string 타입을 리턴한다.
const genericNumber: GenericSimpleType<number> = 123; // number 타입을 받아서 number 타입을 리턴한다.
// const genericString2: GenericSimpleType = '코드팩토리';

// Generic in Type + interface의 조합
interface DoneState<T> {
    data: T[];
}

interface LoadingState {
    requestedAt: Date;
}

interface ErrorState {
    error: string;
}

type State<T = number> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
    data: ['123', '456'],
} // DoneState (T가 string으로 지정되어 있기 때문에 DoneState<string>가 된다.)

state = {
    requestedAt: new Date()
} // LoadingState

state = { error: 'error' }; // ErrorState

let state2: State = {
    data: [123, 456]
} // DoneState (T가 number로 지정되어 있기 때문에 DoneState<number>가 된다.)