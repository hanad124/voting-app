import { create } from "zustand";

interface IUser {
  email: string;
  name: string;
  role: string;
}

interface UserStoreProps {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  data: IUser;
  setData: (data: IUser) => void;
}

export const userStore = create<UserStoreProps>((set) => ({
  loggedIn: false,
  setLoggedIn: (loggedIn: boolean) => set({ loggedIn }),
  setData: (data: IUser) => set({ data }),
  data: {
    email: "",
    name: "",
    role: "",
  },
}));
