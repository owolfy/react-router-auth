import { useEffect, useState } from "react";
import AuthContext from './authContext';
import { onAuthStateChanged, User } from "firebase/auth";
import { fbAuth } from "~/firebase/firebaseConfig";
import AuthUser from "~/types/authUser";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<AuthUser | null>(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(fbAuth, (user: User | null) => {
            setUser(user ? {
                displayName: user.displayName,
                email: user.email,
                uid: user.uid
            } : null);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};