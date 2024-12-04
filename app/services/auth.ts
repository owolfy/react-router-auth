import { fbAuth } from "~/firebase/firebaseConfig";

export const isAuth = (): Promise<boolean> => {
    return new Promise((resolve) => {
        const unsubscribe = fbAuth.onAuthStateChanged((user) => {
            unsubscribe();
            resolve(!!user);
        });
    });
};