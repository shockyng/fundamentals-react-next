import Link from "next/link";

export default function page() {
    return (
        <div>
            <h1>Products Page</h1>
            <Link href="/src/app/(internals)/products/details">Redirect to Details</Link>
        </div>
    );
}
