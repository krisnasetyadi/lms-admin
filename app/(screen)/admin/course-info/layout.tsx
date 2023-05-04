import SectionComponent from "@/app/component/section-component";
import { ReactNode } from "react";

export default function Layout({
    children
}: {children: ReactNode}) {
    return (
        <>
        {children}
        </>
    )
}