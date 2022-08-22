import React, { useContext, useEffect } from 'react';
import context from '../../context';
import { StyledPopup, PopupContainer } from './styled';

interface Props {
	children: React.ReactNode;
	variant?: 'danger' | '';
	popupId: string;
}

const Popup = ({ children, variant, popupId }: Props) => {
	const ctx = useContext(context);

	useEffect(() => {
		setTimeout(() => {
			document
				.getElementById('popup_' + ctx.popup.currPopupId)
				?.classList.add('fadeout');

			setTimeout(() => {
				if (ctx.popup.currPopupId === popupId)
					ctx.setPopup({ active: false, currPopupId: '' });
			}, 600);
		}, 1000);
	}, []);

	return (
		<>
			{ctx.popup.active && ctx.popup.currPopupId === popupId && (
				<PopupContainer>
					<StyledPopup
						style={
							variant === 'danger' ? { backgroundColor: 'var(--main-red)' } : {}
						}
						id={'popup_' + ctx.popup.currPopupId}
					>
						{children}
					</StyledPopup>
				</PopupContainer>
			)}
		</>
	);
};

export default Popup;
