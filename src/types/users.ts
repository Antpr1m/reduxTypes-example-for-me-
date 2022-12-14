export interface UserState {
	users: any[]
	loading: boolean
	error: string | null
}

export enum UserActionType {                    //enum для типов
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUserAction {        // Для каждого action
	type: UserActionType.FETCH_USERS
}
interface FetchUserSuccessAction {
	type: UserActionType.FETCH_USERS_SUCCESS
	payload: any[]
}
interface FetchUserErrorAction {
	type: UserActionType.FETCH_USERS_ERROR
	payload: string
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction   //общий тип для всех action

