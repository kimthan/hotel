import React,{createContext} from 'react';

export const ThemeContext = createContext()

class ThemeContextProvider extends React.Component{
    state = {
        isLightTheme:true,
        dark:{test:'test'}
    }

    render(){
        return(
            <ThemeContext.Provider value={{...this.state}}>
              {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider