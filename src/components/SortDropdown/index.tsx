import React, { useEffect, useState } from 'react';
import { DropdownContainer, DropdownBtn, List, Item } from './style';
import { order } from '../../../types';

const SortDropdown = ({
	handleSort,
}: {
	handleSort: (order: order) => void;
}) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	useEffect(() => document.addEventListener('click', (e) => e.target), []);

	return (
		<DropdownContainer>
			<DropdownBtn
				onClick={() => {
					setDropdownOpen((oldValue) => !oldValue);
				}}
				style={dropdownOpen ? { borderRadius: '5px 5px 0px 0px' } : undefined}
			>
				Ordenar por:
			</DropdownBtn>
			{dropdownOpen && (
				<List>
					<Item onClick={() => handleSort('lowestPrice')}>Menor preço</Item>
					<Item onClick={() => handleSort('highestPrice')}>Maior preço</Item>
					<Item onClick={() => handleSort('rating')}>Melhor avaliação</Item>
				</List>
			)}
		</DropdownContainer>
	);
};

export default SortDropdown;
