import { LoginForm } from '@/app/login/LoginForm';

export default function Home() {
    return (
        <div className="bg-[rgba(79,17,163,255)] flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-[800px] flex-col gap-6 items-center">
                <div className="w-30 h-30 bg-orange-500 rounded-full">
                    <img src="images\logo-cyberedux.png" alt="Logo da empresa Cyber Edux" />
                </div>
                <LoginForm />
            </div>
        </div>
    )
}
