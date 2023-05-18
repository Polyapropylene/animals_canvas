import { createGlobalStyle } from 'styled-components';
import { darkSber } from '@salutejs/plasma-tokens/themes'; // Или один из списка: darkEva, darkJoy, lightEva, lightJoy, lightSber


const DocumentStyle = createGlobalStyle`
    html {
    }
`;
const ThemeStyle = createGlobalStyle(darkSber);

export const GlobalStyle = () => (
    <>
        <DocumentStyle />
        <ThemeStyle />
    </>
);

export default GlobalStyle;