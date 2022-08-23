import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Product } from '../../../types';
import DetailedProduct from '../../components/DetailedProduct';
import { fetchProducts } from '../../utils/products';

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: [],
	fallback: true,
});

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id;
	let product: Product | null = null;
	try {
		if (id && typeof id === 'string') product = await fetchProducts(`/${id}`);
	} catch (err) {}

	return { props: { product } };
};

const ProductPage: NextPage<{ product: Product }> = ({ product }) => {
	return (
		<>
			<Head>
				<title>
					{product?.title + ' | Next Store' || 'Produto não encontrado'}
				</title>
				{product && (
					<meta
						name="description"
						content={`Página do produto${" '" + product.title + "'" || '.'}`}
					/>
				)}
			</Head>
			{product && <DetailedProduct product={product} />}
		</>
	);
};

export default ProductPage;
