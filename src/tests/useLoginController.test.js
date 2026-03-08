import { act, renderHook } from "@testing-library/react"
import { UseLoginController } from "../controllers/useLoginController"
import { AuthContext } from "../context/AuthContext"

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
    useLocation: () => ({ pathname: '/' }),
    useParams: () => ({}),
}));

Object.defineProperty(window, 'localStorage', {
    value: { getItem: jest.fn(), setItem: jest.fn() },
    writable: true,
});

describe('useLoginController', () => {

    const mockLogin = jest.fn();

    const wrapper = ({ children }) => (
        <AuthContext.Provider value={{ login: mockLogin }}>
            {children}
        </AuthContext.Provider>
    );

    test('Testando Erro de login', () => {


        mockLogin.mockReturnValue('Senha Incorreta');

        const { result } = renderHook(() => UseLoginController(), { wrapper });

        const fakeEvent = { preventDefault: jest.fn() };
        
        act(()=>{
            result.current.setUserName('caiocesar');
            result.current.setPassword('1234767');
        })

        
        act(() => {
            result.current.handleLogin(fakeEvent);
        });
        
        expect(result.current.stateView).toBe('Senha Incorreta');
        expect(fakeEvent.preventDefault).toHaveBeenCalled();
    });

    test('Testando Sucesso de Login',()=>{
        mockLogin.mockReturnValue(true);

        const {result} = renderHook(()=> UseLoginController(), {wrapper});

        const fakeEvent = {preventDefault: jest.fn()};


        act(()=>{
            result.current.handleLogin(fakeEvent);
        });

        expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
        expect(fakeEvent.preventDefault).toHaveBeenCalled();
    })
});