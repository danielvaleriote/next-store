import React, { useState } from 'react';

type Props = {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ value, setValue }: Props) => {
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<input
			placeholder="Digite o que você procura"
			value={value}
			onChange={changeHandler}
		></input>
	);
};

export default SearchBar;
