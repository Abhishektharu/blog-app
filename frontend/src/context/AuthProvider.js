// AuthProvider Component
const initialAuthState = JSON.parse(localStorage.getItem("auth")) || {
    user: null,
    token: null,
  };
  
  export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(initialAuthState);
  
    const login = (userData, token) => {
      setAuth({ user: userData, token });
      localStorage.setItem("auth", JSON.stringify({ user: userData, token }));
    };
  
    const logout = () => {
      setAuth({ user: null, token: null });
      localStorage.removeItem("auth");
    };
  
    return (
      <AuthContext.Provider value={{ auth, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  