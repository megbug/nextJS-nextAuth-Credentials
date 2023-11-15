'use client';

import { useSession } from "next-auth/react";

const DashboardPage = () => {
    const { data: session, status } = useSession();
    console.log(session);
    return (
        <div>
            <div>DashboardPage</div>
            <p>Hi {session?.user.name}</p>
        </div>
    )
}

export default DashboardPage