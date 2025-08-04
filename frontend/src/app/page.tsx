import { LoginForm } from '@/app/login/LoginForm';

export default function Home() {
    return (
        //usar padding, medias baseadas em alturas, dps do login arrumar a responsividade nas outras
        <div className="bg-[rgba(79,17,163,255)] flex min-h-svh flex-col items-center justify-center sm:p-2 card-responsivo">
            <div className="flex flex-col gap-6 items-center">
                <div className="w-24 rounded-full">
                    <img src="images\logo-cyberedux.png" alt="Logo da empresa Cyber Edux" />
                </div>
                <LoginForm />
            </div>
        </div>
    )
}
