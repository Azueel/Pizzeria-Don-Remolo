import Image from 'next/image';

export const ProductCard = ({ title, desc, oldPrice, newPrice }) => {
	return (
		<article className='flex flex-col gap-5 min-w-[200px] w-full max-w-[250px] min-h-[200px] h-full max-h-[320px] rounded-lg shadow-2xl lg:gap-4'>
			<section className='w-full h-max'>
				<Image src={require('../../public/assets/combo-para-2.svg')} alt='s' />
			</section>
			<h5 className='font-bold px-2'> { title } </h5>
			<p className='px-2 text-[11px] sm:text-[.7rem] lg:text-[.8rem]'> { desc } </p>
			<section className='grid grid-cols-2 justify-items-end px-2'>
				<p className='text-gray line-through'> ${ oldPrice } </p>
				<p className='font-bold'> ${ newPrice } </p>
			</section>
			<section className='flex justify-center px-3 lg:p-0 px-3'>
				<button className='w-full max-w-[200px] h-8 text-white bg-primary rounded-[50px] active:shadow-xl' type='button'>Agregar al carrito</button>
			</section>
		</article>
	);
};