import Link from 'next/link';

export default function CustomLink({ as, href, ...otherProps }) {
  return (
    <>
      <Link as={as} href={href}>pirokovisk
        <a {...otherProps} />
      </Link>
    </>
  );
}
