/**
 * Key Value Mapping
 */

enum State {
  loading,
  done,
  error,
}

type GlobalApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
  getPosts: State;
}

// 방법1
// 문제점: GlobalApiStatus에서 필요한 것만 가져오기 위해 UserApiStatus를 만들었지만,
// GlobalApiStatus가 변경되면 UserApiStatus도 변경해야 한다.
type UserApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
}

// 방법1의 문제점을 해결하기 위해 GlobalApiStatus에서 필요한 것만 가져오는 방법
type UserApiStatus2 = {
  getUser: GlobalApiStatus['getUser'];
  paginateUsers: GlobalApiStatus['paginateUsers'];
  banUser: GlobalApiStatus['banUser'];
}

// 방법3 (Mapped Type)
type UserApiStatus3 = {
  [k in 'getUser' | 'paginateUsers' | 'banUser']: GlobalApiStatus[k];
}

// 방법4 (Pick: GlobalApiStatus에서 필요한 것만 가져오기)
type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'banUser' | 'paginateUsers'>; // getUser, banUser, paginateUsers만 가져오기

// 방법5 (Omit: GlobalApiStatus에서 필요없는 것만 제거하기)
type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>; // getPosts를 제외한 값

/**
* keyof
*/
type AllKeys = keyof GlobalApiStatus;

const key: AllKeys = 'getUser';

type KeyOfUserApiStatus = {
  [k in keyof GlobalApiStatus]: GlobalApiStatus[k]; // 모든 값
} // { getUser: State; paginateUsers: State | undefined; banUser: State | null; getPosts: State; }

type KeyOfUserApiStatus2 = {
  [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[k]; // getPosts를 제외한 값
} // { getUser: State; paginateUsers: State | undefined; banUser: State | null; }

type KeyOfUserApiStatus3 = {
  [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[k]; // getPosts를 제외한 값 (optional)
} // { getUser?: State; paginateUsers?: State | undefined; banUser?: State | null; }

// 응용 예제
interface LoadingStatus {
  type: 'loading';
  data: string[];
}

interface ErrorStatus {
  type: 'error';
  message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus; // LoadingStatus(type: 'loading', data) 또는 ErrorStatus(type: 'error', message)

type StatusType = FetchStatus['type']; // FetchStatus의 type만 가져옴 => 'loading' 또는 'error'