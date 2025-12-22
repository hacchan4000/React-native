import { Appearance } from "react-native";
import { Children, createContext ,useState } from "react";
import { Colors } from '@/constants/theme';

export const ThemeContext = createContext({})
export const Provider = ({ children }) => { // function untuk ngembaliin skema warna perangkat user
    const [skemaWarna,setSkemaWarna] = useState(Appearance.getColorScheme())
    const tema = skemaWarna === 'dark' ? Colors.dark : Colors.light

    return (
        <ThemeContext.Provider value={
            {skemaWarna, setSkemaWarna, tema}
        }>
            {children} {/* ini artinya akan bungkus komponen lain spy skemaWarna, setSkemaWarna, tema tersedia di komponen tsbt*/}
        </ThemeContext.Provider>
    )
}
