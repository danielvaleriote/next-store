import React, { useEffect, useRef, useState } from 'react';
import { DropdownContainer, DropdownBtn, List, Item } from './style';
import { order } from '../../../types';

const SortDropdown = ({
	handleSort,
}: {
	handleSort: (order: order) => void;
}) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const ref = useRef<HTMLInputElement>(null);

	const checkClickOutside = ({ target }: MouseEvent) => {
		if (dropdownOpen && ref.current && !ref.current.contains(target as Node))
			setDropdownOpen(false);
	};

	useEffect(() => {
		document.addEventListener('mousedown', checkClickOutside);

		return () => document.removeEventListener('mousedown', checkClickOutside);
	}, [dropdownOpen]);

	return (
		<DropdownContainer ref={ref}>
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
