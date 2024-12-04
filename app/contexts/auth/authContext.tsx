import { createContext } from 'react';
import AuthUser from '~/types/authUser';

interface AuthContextType {
    user: AuthUser | null;
    setUser: (user: AuthUser | null) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;