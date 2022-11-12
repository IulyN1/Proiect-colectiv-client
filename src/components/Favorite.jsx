import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledFavorite = styled(Rating)({
	'& .MuiRating-iconFilled': {
		color: '#ff4538'
	},
	'& .MuiRating-iconHover': {
		color: '#ff4538'
	}
});

export default function Favorite() {
	return (
		<StyledFavorite
			name="customized-color"
			max={1}
			icon={<FavoriteIcon fontSize="inherit" />}
			emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
		/>
	);
}
