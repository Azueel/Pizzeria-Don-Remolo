import Link from "next/link";

export const NavItem = ({ page, title }) => {
	return (
		<li className="hover:text-primary">
			<Link href={page || '/'} className='font-sans'>{title.toUpperCase()}</Link>
		</li>
	);
};