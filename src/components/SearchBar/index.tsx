import React from 'react';
import { SearchInput, InputContainer } from './styled';

type Props = {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ value, setValue }: Props) => {
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<InputContainer>
			<SearchInput
				placeholder="Digite o que você procura"
				value={value}
				onChange={changeHandler}
			/>
		</InputContainer>
	);
};

export default SearchBar;
