import * as S  from "./SearchBar.styles"
import { SearchBarProps } from "./types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFilter } from '@fortawesome/free-solid-svg-icons/faFilter'



export const Search = (props:SearchBarProps) => {
  const {placeholder, onChange, defaultChecked, value, onChangeCheckbox, checkboxtext } = props
  const iconFilter = <FontAwesomeIcon icon={faFilter} />
  
  return(
   <S.SearchArea>
    <div className="top">
     <input onChange={onChange} className="input-search" type="text" placeholder={placeholder} />
     <button className="button-filter">{iconFilter}</button>
     <button className="button-search">Pesquisar</button>
    </div>
    <S.Checkbox>
      <input type="checkbox"           
        defaultChecked={defaultChecked}
        value={value}
        onChange={onChangeCheckbox}/>
      <p>&nbsp;{checkboxtext}</p>
    </S.Checkbox>
   </S.SearchArea>
    
  )
}