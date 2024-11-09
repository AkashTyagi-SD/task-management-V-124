export interface DefaultProps {
  status: boolean;
  message: string;
  data: any;
}

export interface UserLoginPayload {
  email: string;
  password: string;
}

export interface UserInfo {
  token: string;
  userId: string;
  email: string;
}

export interface UserSession extends DefaultProps {
  data: UserInfo | any;
}

export interface UserAddedResponse extends DefaultProps {}

export interface InitialState {
  loading: boolean;
  error: string | undefined | null;
  userSession: UserSession | null;
  newUserAddedResponse: UserAddedResponse | null;
}
