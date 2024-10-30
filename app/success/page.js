import Link from "next/link";

export default function SuccessPage() {
    return (
        <div>
            Thanks for your purchase!
            <br />
            <Link href='/'>Return Home</Link>
        </div>
    )
}