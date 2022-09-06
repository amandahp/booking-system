export interface SearchBarProps {
 placeholder: string,
 onChange:(value:React.ChangeEvent<HTMLInputElement>) => void;
 defaultChecked?: boolean;
 value?: string;
 onChangeCheckbox?: (value:React.ChangeEvent<HTMLInputElement>) => void;
 checkboxtext?: string; 
}